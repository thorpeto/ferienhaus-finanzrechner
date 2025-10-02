# 🚀 SSL Setup für Ferienhaus-Rechner auf GCP - Schritt für Schritt

## ✅ Empfohlene Lösung: Cloud Run mit Google-Managed SSL

**Vorteile für Ihr Projekt:**
- ⚡ Setup in 15 Minuten
- 🔒 Automatisches SSL (Let's Encrypt via Google)
- 💰 Kosteneffizient (~5-10€/Monat)
- 🔄 Auto-Scaling bei Traffic
- 🛠️ Keine Server-Wartung

---

## 📋 Voraussetzungen

### 1. Domain registrieren (falls noch nicht geschehen)

**Empfohlene Anbieter:**
- IONOS: https://www.ionos.de/
- Namecheap: https://www.namecheap.com/
- Google Domains: https://domains.google/

**Beispiel-Domain:** `ferienhaus-rechner.de`

### 2. Google Cloud Account

1. Gehen Sie zu: https://console.cloud.google.com/
2. Erstellen Sie ein neues Projekt: `ferienhaus-finanzrechner`
3. Aktivieren Sie Billing (Kreditkarte erforderlich)

### 3. Lokale Tools installieren

```bash
# Google Cloud SDK installieren
# Für Ubuntu/Debian:
curl https://sdk.cloud.google.com | bash
exec -l $SHELL

# Für andere Systeme: https://cloud.google.com/sdk/docs/install

# Login und Projekt setzen
gcloud auth login
gcloud config set project ferienhaus-finanzrechner
```

---

## 🔧 TEIL 1: Cloud Run Deployment

### Schritt 1: Cloud Run API aktivieren

```bash
# Im Terminal ausführen
gcloud services enable run.googleapis.com
gcloud services enable cloudbuild.googleapis.com
```

### Schritt 2: Docker-Image bauen und deployen

```bash
# In Ihrem Projekt-Verzeichnis
cd /workspaces/ferienhaus-finanzrechner

# Projekt-ID abrufen
PROJECT_ID=$(gcloud config get-value project)
echo "Ihr Projekt: $PROJECT_ID"

# Docker-Image mit Cloud Build erstellen
gcloud builds submit --tag gcr.io/$PROJECT_ID/ferienhaus-rechner

# Auf Cloud Run deployen
gcloud run deploy ferienhaus-rechner \
  --image gcr.io/$PROJECT_ID/ferienhaus-rechner \
  --platform managed \
  --region europe-west1 \
  --allow-unauthenticated \
  --memory 512Mi \
  --cpu 1 \
  --max-instances 10
```

**Erwartete Ausgabe:**
```
✓ Deploying... Done.
✓ Creating Revision...
✓ Routing traffic...
Service URL: https://ferienhaus-rechner-xxxxxxxxxx-ew.a.run.app
```

### Schritt 3: Testen Sie die temporäre URL

```bash
# URL wird ausgegeben, z.B.:
# https://ferienhaus-rechner-abc123-ew.a.run.app

# Öffnen im Browser:
xdg-open https://ferienhaus-rechner-abc123-ew.a.run.app
```

✅ **Checkpoint:** Ihre App sollte jetzt über die Cloud Run URL erreichbar sein!

---

## 🌐 TEIL 2: Custom Domain mit SSL einrichten

### Schritt 4: Domain Mapping erstellen

```bash
# Ihre Domain hier einsetzen
DOMAIN="ferienhaus-rechner.de"

# Domain Mapping erstellen
gcloud run domain-mappings create \
  --service ferienhaus-rechner \
  --domain $DOMAIN \
  --region europe-west1
```

**Wichtig:** Google zeigt Ihnen jetzt DNS-Einträge an, die Sie kopieren müssen!

**Beispiel-Ausgabe:**
```
Please add the following DNS records to your domain registrar:

NAME                      TYPE    DATA
ferienhaus-rechner.de     A       216.239.32.21
ferienhaus-rechner.de     A       216.239.34.21
ferienhaus-rechner.de     A       216.239.36.21
ferienhaus-rechner.de     A       216.239.38.21
ferienhaus-rechner.de     AAAA    2001:4860:4802:32::15
ferienhaus-rechner.de     AAAA    2001:4860:4802:34::15
ferienhaus-rechner.de     AAAA    2001:4860:4802:36::15
ferienhaus-rechner.de     AAAA    2001:4860:4802:38::15
```

### Schritt 5: DNS-Einträge bei Ihrem Domain-Provider hinzufügen

#### Beispiel: IONOS

1. Login: https://www.ionos.de/
2. Gehen Sie zu **Domains & SSL**
3. Klicken Sie auf Ihre Domain
4. Wählen Sie **DNS**
5. Fügen Sie die A- und AAAA-Records hinzu:

```
Typ   Host   Wert                      TTL
A     @      216.239.32.21            3600
A     @      216.239.34.21            3600
A     @      216.239.36.21            3600
A     @      216.239.38.21            3600
AAAA  @      2001:4860:4802:32::15    3600
AAAA  @      2001:4860:4802:34::15    3600
AAAA  @      2001:4860:4802:36::15    3600
AAAA  @      2001:4860:4802:38::15    3600
```

6. **Speichern** und warten

#### Beispiel: Namecheap

1. Login: https://ap.www.namecheap.com/
2. **Domain List** → Ihre Domain → **Manage**
3. **Advanced DNS** Tab
4. Löschen Sie alte A-Records
5. Fügen Sie neue Records hinzu (wie oben)

### Schritt 6: DNS-Propagation abwarten

```bash
# DNS-Status prüfen (5-30 Minuten)
nslookup ferienhaus-rechner.de

# Erwartete Ausgabe sollte Google-IPs zeigen:
# Address: 216.239.32.21
# Address: 216.239.34.21
```

**Tools zum Testen:**
- https://dnschecker.org/
- https://www.whatsmydns.net/

### Schritt 7: SSL-Status überprüfen

```bash
# Domain Mapping Status prüfen
gcloud run domain-mappings describe ferienhaus-rechner.de \
  --region europe-west1

# Status sollte sein: certificateStatus: ACTIVE
```

**Status-Bedeutungen:**
- `PENDING` - Warten auf DNS
- `PROVISIONING` - SSL-Zertifikat wird erstellt (15-30 Min)
- `ACTIVE` - ✅ SSL ist aktiv!

---

## 🎉 TEIL 3: Verifizierung & Security

### Schritt 8: HTTPS testen

```bash
# Öffnen Sie Ihre Domain
curl -I https://ferienhaus-rechner.de

# Erwartete Antwort:
# HTTP/2 200
# server: Google Frontend
```

**Im Browser testen:**
```
https://ferienhaus-rechner.de
```

✅ **Sollte zeigen:** 🔒 Sicheres SSL-Zertifikat

### Schritt 9: www-Subdomain hinzufügen (optional)

```bash
# www-Subdomain auch mappen
gcloud run domain-mappings create \
  --service ferienhaus-rechner \
  --domain www.ferienhaus-rechner.de \
  --region europe-west1

# Fügen Sie CNAME-Record hinzu:
# Typ: CNAME
# Host: www
# Wert: ghs.googlehosted.com
```

### Schritt 10: Security Headers aktivieren

Fügen Sie in `next.config.js` hinzu:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
```

**Danach neu deployen:**
```bash
gcloud builds submit --tag gcr.io/$PROJECT_ID/ferienhaus-rechner
gcloud run deploy ferienhaus-rechner \
  --image gcr.io/$PROJECT_ID/ferienhaus-rechner \
  --platform managed \
  --region europe-west1 \
  --allow-unauthenticated
```

---

## 📊 TEIL 4: Monitoring & Kosten

### Traffic-Monitoring

```bash
# Cloud Run Logs ansehen
gcloud logging read "resource.type=cloud_run_revision" --limit 50

# Oder in der Console:
# https://console.cloud.google.com/run/detail/europe-west1/ferienhaus-rechner/logs
```

### Kosten überwachen

**Typische Kosten für kleine App:**
- Cloud Run: ~5-10€/Monat (bei 10.000 Requests/Monat)
- SSL: Kostenlos (Google-managed)
- Cloud Build: ~2€/Monat
- Container Registry: ~1€/Monat

**Budget Alert einrichten:**
```bash
# In Console: https://console.cloud.google.com/billing/budgets
# Budget: 20€/Monat mit Email-Alert
```

---

## 🔄 Updates deployen

```bash
# Nach Änderungen am Code:
cd /workspaces/ferienhaus-finanzrechner

# Neues Image bauen
gcloud builds submit --tag gcr.io/$PROJECT_ID/ferienhaus-rechner

# Deployen (behält SSL-Konfiguration)
gcloud run deploy ferienhaus-rechner \
  --image gcr.io/$PROJECT_ID/ferienhaus-rechner \
  --platform managed \
  --region europe-west1
```

---

## 🐛 Troubleshooting

### Problem: "Certificate provisioning in progress"

**Ursache:** DNS noch nicht propagiert oder SSL wird noch erstellt

**Lösung:**
```bash
# 1. DNS prüfen
dig ferienhaus-rechner.de

# 2. 30 Minuten warten
# 3. Status erneut prüfen
gcloud run domain-mappings describe ferienhaus-rechner.de \
  --region europe-west1
```

### Problem: "Domain mapping already exists"

**Lösung:**
```bash
# Bestehendes Mapping löschen
gcloud run domain-mappings delete ferienhaus-rechner.de \
  --region europe-west1

# Neu erstellen
gcloud run domain-mappings create --service ferienhaus-rechner \
  --domain ferienhaus-rechner.de --region europe-west1
```

### Problem: "Service not found"

**Lösung:**
```bash
# Services auflisten
gcloud run services list --region europe-west1

# Richtigen Namen verwenden (z.B. mit Bindestrichen)
```

### Problem: AdSense funktioniert nicht mit HTTPS

**Lösung:**
- Stellen Sie sicher, dass AdSense-Script `https://` verwendet
- In `app/layout.tsx` sollte bereits korrekt sein
- AdSense-Konto für neue Domain freischalten

---

## ✅ Checkliste

- [ ] Google Cloud Account erstellt
- [ ] Projekt `ferienhaus-finanzrechner` erstellt
- [ ] Billing aktiviert
- [ ] Cloud Run API aktiviert
- [ ] App erfolgreich deployed
- [ ] Temporäre URL funktioniert
- [ ] Domain registriert
- [ ] Domain Mapping erstellt
- [ ] DNS A-Records hinzugefügt (4x)
- [ ] DNS AAAA-Records hinzugefügt (4x)
- [ ] DNS-Propagation abgewartet (15-30 Min)
- [ ] SSL-Status: ACTIVE
- [ ] HTTPS funktioniert: `https://ferienhaus-rechner.de` 🔒
- [ ] Security Headers konfiguriert
- [ ] www-Subdomain hinzugefügt (optional)
- [ ] Budget Alert eingerichtet
- [ ] AdSense mit HTTPS getestet

---

## 🎯 Nächste Schritte

1. **Analytics einrichten:**
   - Google Analytics 4 mit HTTPS-Domain konfigurieren
   - AdSense-Konto für neue Domain autorisieren

2. **Performance optimieren:**
   - Cloud CDN aktivieren (optional)
   - Image Optimization prüfen

3. **Backup einrichten:**
   - Git Repository als Backup verwenden
   - Container Images werden automatisch gespeichert

---

## 📞 Support-Ressourcen

- **GCP Cloud Run Docs:** https://cloud.google.com/run/docs
- **Custom Domains:** https://cloud.google.com/run/docs/mapping-custom-domains
- **GCP Support Forum:** https://stackoverflow.com/questions/tagged/google-cloud-run
- **SSL-Probleme:** https://cloud.google.com/run/docs/troubleshooting#domain

---

**Viel Erfolg mit Ihrem SSL-Setup! 🚀🔒**

Bei Fragen können Sie Issues auf GitHub erstellen oder die GCP-Community kontaktieren.
