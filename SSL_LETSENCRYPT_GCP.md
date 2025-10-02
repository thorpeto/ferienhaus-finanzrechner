# SSL/HTTPS mit Let's Encrypt auf Google Cloud Platform (GCP)

## 🎯 Übersicht

Diese Anleitung zeigt, wie Sie kostenlose SSL-Zertifikate von Let's Encrypt für Ihre Next.js-Anwendung auf GCP einrichten.

## 📋 Voraussetzungen

- ✅ Eine registrierte Domain (z.B. `ferienhaus-rechner.de`)
- ✅ DNS-Konfiguration zeigt auf Ihre GCP-IP
- ✅ Next.js-App läuft auf GCP (Cloud Run, Compute Engine, oder App Engine)

---

## 🚀 Option 1: Cloud Run mit Google-Managed SSL (EMPFOHLEN)

### Vorteile:
- ✅ **Automatisch** - Google verwaltet SSL-Zertifikate
- ✅ **Kostenlos** - Keine zusätzlichen Kosten
- ✅ **Auto-Renewal** - Zertifikate werden automatisch erneuert

### Schritte:

#### 1. Cloud Run Service deployen

```bash
# Build und Deploy
gcloud run deploy ferienhaus-rechner \
  --source . \
  --platform managed \
  --region europe-west1 \
  --allow-unauthenticated
```

#### 2. Custom Domain hinzufügen

```bash
# Domain Mapping erstellen
gcloud run domain-mappings create \
  --service ferienhaus-rechner \
  --domain ferienhaus-rechner.de \
  --region europe-west1
```

#### 3. DNS konfigurieren

Google zeigt Ihnen die DNS-Einträge an, die Sie bei Ihrem Domain-Provider hinzufügen müssen:

```
# Beispiel DNS-Einträge
NAME                  TYPE     DATA
ferienhaus-rechner.de  A        216.239.32.21
ferienhaus-rechner.de  A        216.239.34.21
ferienhaus-rechner.de  A        216.239.36.21
ferienhaus-rechner.de  A        216.239.38.21
ferienhaus-rechner.de  AAAA     2001:4860:4802:32::15
ferienhaus-rechner.de  AAAA     2001:4860:4802:34::15
ferienhaus-rechner.de  AAAA     2001:4860:4802:36::15
ferienhaus-rechner.de  AAAA     2001:4860:4802:38::15
```

#### 4. SSL wird automatisch aktiviert

Nach der DNS-Propagation (5-30 Minuten) aktiviert Google automatisch ein SSL-Zertifikat!

**Status prüfen:**
```bash
gcloud run domain-mappings describe \
  --domain ferienhaus-rechner.de \
  --region europe-west1
```

---

## 🔧 Option 2: Compute Engine VM mit Certbot

### Vorteile:
- ✅ Volle Kontrolle über Server
- ✅ Eigener Nginx/Apache Server möglich

### Schritte:

#### 1. VM erstellen und SSH verbinden

```bash
# VM erstellen
gcloud compute instances create ferienhaus-vm \
  --zone=europe-west1-b \
  --machine-type=e2-micro \
  --image-family=ubuntu-2204-lts \
  --image-project=ubuntu-os-cloud \
  --boot-disk-size=10GB

# SSH verbinden
gcloud compute ssh ferienhaus-vm --zone=europe-west1-b
```

#### 2. Node.js und Nginx installieren

```bash
# System aktualisieren
sudo apt update && sudo apt upgrade -y

# Node.js installieren
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Nginx installieren
sudo apt install -y nginx

# Certbot installieren
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
```

#### 3. Next.js App deployen

```bash
# Code klonen/hochladen
git clone https://github.com/thorpeto/ferienhaus-finanzrechner.git
cd ferienhaus-finanzrechner

# Dependencies installieren
npm install

# Production Build
npm run build

# PM2 für Prozess-Management
sudo npm install -g pm2
pm2 start npm --name "ferienhaus-app" -- start
pm2 startup
pm2 save
```

#### 4. Nginx als Reverse Proxy konfigurieren

```bash
sudo nano /etc/nginx/sites-available/ferienhaus-rechner
```

**Inhalt:**
```nginx
server {
    listen 80;
    server_name ferienhaus-rechner.de www.ferienhaus-rechner.de;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

**Aktivieren:**
```bash
sudo ln -s /etc/nginx/sites-available/ferienhaus-rechner /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### 5. SSL-Zertifikat mit Certbot erstellen

```bash
# Automatische Konfiguration (empfohlen)
sudo certbot --nginx -d ferienhaus-rechner.de -d www.ferienhaus-rechner.de

# Oder manuell
sudo certbot certonly --nginx -d ferienhaus-rechner.de -d www.ferienhaus-rechner.de
```

**Bei Erfolg:**
```
Congratulations! Your certificate and chain have been saved at:
/etc/letsencrypt/live/ferienhaus-rechner.de/fullchain.pem
Your key file has been saved at:
/etc/letsencrypt/live/ferienhaus-rechner.de/privkey.pem
```

#### 6. Auto-Renewal testen

```bash
# Dry-Run für Renewal
sudo certbot renew --dry-run

# Cron-Job ist automatisch erstellt
sudo systemctl status certbot.timer
```

#### 7. Firewall-Regeln in GCP

```bash
# HTTPS (443) erlauben
gcloud compute firewall-rules create allow-https \
  --allow tcp:443 \
  --source-ranges 0.0.0.0/0 \
  --description "Allow HTTPS traffic"

# HTTP (80) für Redirect behalten
gcloud compute firewall-rules create allow-http \
  --allow tcp:80 \
  --source-ranges 0.0.0.0/0 \
  --description "Allow HTTP traffic"
```

---

## 🌐 Option 3: Cloud Load Balancer mit Google-Managed SSL

### Vorteile:
- ✅ Globale Load Balancing
- ✅ CDN-Integration
- ✅ DDoS-Schutz
- ✅ Auto-Scaling

### Schritte:

#### 1. SSL-Zertifikat erstellen

```bash
gcloud compute ssl-certificates create ferienhaus-ssl \
  --domains=ferienhaus-rechner.de,www.ferienhaus-rechner.de \
  --global
```

#### 2. Backend Service konfigurieren

```bash
# NEG (Network Endpoint Group) für Cloud Run
gcloud compute network-endpoint-groups create ferienhaus-neg \
  --region=europe-west1 \
  --network-endpoint-type=serverless \
  --cloud-run-service=ferienhaus-rechner

# Backend Service
gcloud compute backend-services create ferienhaus-backend \
  --global \
  --load-balancing-scheme=EXTERNAL_MANAGED

# NEG zum Backend hinzufügen
gcloud compute backend-services add-backend ferienhaus-backend \
  --global \
  --network-endpoint-group=ferienhaus-neg \
  --network-endpoint-group-region=europe-west1
```

#### 3. URL Map und Proxy erstellen

```bash
# URL Map
gcloud compute url-maps create ferienhaus-map \
  --default-service=ferienhaus-backend

# HTTPS Proxy
gcloud compute target-https-proxies create ferienhaus-https-proxy \
  --url-map=ferienhaus-map \
  --ssl-certificates=ferienhaus-ssl

# Forwarding Rule
gcloud compute forwarding-rules create ferienhaus-https-rule \
  --global \
  --target-https-proxy=ferienhaus-https-proxy \
  --ports=443
```

#### 4. DNS auf Load Balancer IP zeigen

```bash
# IP-Adresse abrufen
gcloud compute forwarding-rules describe ferienhaus-https-rule --global

# Bei Ihrem DNS-Provider A-Record erstellen:
# ferienhaus-rechner.de -> [LOAD_BALANCER_IP]
```

---

## 🔐 Sicherheits-Best Practices

### 1. HTTP zu HTTPS Redirect

**Nginx:**
```nginx
server {
    listen 80;
    server_name ferienhaus-rechner.de www.ferienhaus-rechner.de;
    return 301 https://$server_name$request_uri;
}
```

### 2. HSTS Header aktivieren

**In Nginx:**
```nginx
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
```

**In Next.js (next.config.js):**
```javascript
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          }
        ]
      }
    ]
  }
}
```

### 3. Security Headers

```nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
```

---

## 📊 Kostenvergleich

| Option | Kosten/Monat | Setup-Zeit | Wartung |
|--------|-------------|-----------|---------|
| **Cloud Run + Google SSL** | ~5-15€ | 10 Min | Keine |
| **Compute Engine + Certbot** | ~8-25€ | 30-60 Min | Gering |
| **Load Balancer + SSL** | ~20-50€ | 45 Min | Keine |

---

## 🔍 Troubleshooting

### Problem: "Certificate provisioning in progress"

**Lösung:**
- Warten Sie 15-30 Minuten nach DNS-Änderungen
- Prüfen Sie DNS-Propagation: `nslookup ferienhaus-rechner.de`
- Status prüfen: `gcloud run domain-mappings describe ...`

### Problem: "Too many certificates already issued"

**Lösung:**
- Let's Encrypt Limit: 50 Zertifikate pro Domain/Woche
- Warten Sie 1 Woche oder nutzen Sie Google-Managed SSL

### Problem: Certbot Renewal schlägt fehl

**Lösung:**
```bash
# Logs prüfen
sudo journalctl -u certbot.timer
sudo certbot renew --force-renewal
```

### Problem: Mixed Content Warnings

**Lösung:**
- Stellen Sie sicher, dass alle Assets (Bilder, Scripts) über HTTPS geladen werden
- In Next.js: Nutzen Sie relative URLs oder `https://`

---

## 🎓 Empfehlung für Ihr Projekt

**Für den Ferienhaus-Rechner empfehle ich:**

### ✅ Cloud Run mit Google-Managed SSL

**Warum?**
1. **Einfachste Einrichtung** - 10 Minuten Setup
2. **Automatische SSL-Verwaltung** - Kein Certbot nötig
3. **Serverless** - Keine VM-Wartung
4. **Kosteneffizient** - Pay-per-Use
5. **Auto-Scaling** - Bei Traffic-Spitzen

**Quick Start:**
```bash
# 1. Build
npm run build

# 2. Deploy
gcloud run deploy ferienhaus-rechner \
  --source . \
  --region europe-west1 \
  --allow-unauthenticated

# 3. Domain hinzufügen
gcloud run domain-mappings create \
  --service ferienhaus-rechner \
  --domain ferienhaus-rechner.de

# 4. DNS konfigurieren (zeigt Google an)

# 5. Fertig! SSL wird automatisch aktiviert 🎉
```

---

## 📞 Support & Ressourcen

- **Let's Encrypt Dokumentation:** https://letsencrypt.org/docs/
- **GCP Cloud Run SSL:** https://cloud.google.com/run/docs/mapping-custom-domains
- **Certbot Dokumentation:** https://certbot.eff.org/
- **GCP Load Balancer SSL:** https://cloud.google.com/load-balancing/docs/ssl-certificates

---

## ✅ Checkliste

- [ ] Domain registriert
- [ ] DNS auf GCP konfiguriert
- [ ] Cloud Run Service deployed
- [ ] Custom Domain Mapping erstellt
- [ ] DNS-Einträge bei Provider hinzugefügt
- [ ] SSL-Zertifikat automatisch aktiviert (15-30 Min)
- [ ] HTTPS funktioniert: `https://ferienhaus-rechner.de`
- [ ] HTTP zu HTTPS Redirect aktiviert
- [ ] Security Headers konfiguriert
- [ ] Google Analytics & AdSense mit HTTPS getestet

---

**Viel Erfolg mit Ihrem SSL-Setup! 🔒✨**
