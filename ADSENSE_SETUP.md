# Google AdSense Setup-Anleitung

## 🎯 Übersicht

Es wurden **zwei AdSense-Anzeigenflächen** in die Anwendung integriert:

### Anzeigenplatzierung:
1. **Anzeige #1**: Neben der Kostenübersicht im Grunddaten-Bereich
2. **Anzeige #2**: Nach den Rentabilitätsboxen im Basis-Ergebnisse-Bereich

## 📝 Konfigurationsschritte

### 1. Google AdSense-Konto einrichten

1. Melden Sie sich bei [Google AdSense](https://www.google.com/adsense/) an
2. Fügen Sie Ihre Website hinzu und warten Sie auf die Genehmigung
3. Nach der Genehmigung erhalten Sie Ihre **Publisher-ID** (ca-pub-XXXXXXXXXXXXXXXX)

### 2. Anzeigenblöcke erstellen

1. Gehen Sie zu **Anzeigen** → **Übersicht** → **Nach Anzeigenblock**
2. Erstellen Sie zwei neue Display-Anzeigenblöcke:
   - **Anzeige #1**: "Kostenübersicht Sidebar"
   - **Anzeige #2**: "Basis-Ergebnisse Banner"
3. Notieren Sie sich die jeweiligen **data-ad-slot** IDs

### 3. Code aktualisieren

#### A) Layout-Datei (`app/layout.tsx`)

Ersetzen Sie `ca-pub-XXXXXXXXXXXXXXXX` mit Ihrer echten Publisher-ID:

```tsx
<script 
  async 
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-IHRE_PUBLISHER_ID"
  crossOrigin="anonymous"
></script>
```

#### B) AdSense-Komponente (`app/components/AdSenseAd.tsx`)

Ersetzen Sie in Zeile 32 die Publisher-ID:

```tsx
data-ad-client="ca-pub-IHRE_PUBLISHER_ID"
```

#### C) Haupt-Seite (`app/page.tsx`)

Ersetzen Sie die AdSlot-Platzhalter mit Ihren echten Slot-IDs:

**Zeile ~498** (Anzeige #1 - neben Kostenübersicht):
```tsx
<AdSenseAd adSlot="IHRE_SLOT_ID_1" />
```

**Zeile ~704** (Anzeige #2 - im Basis-Ergebnisse-Bereich):
```tsx
<AdSenseAd adSlot="IHRE_SLOT_ID_2" className="mt-6 min-h-[200px]" />
```

### 4. Deployment

Nach der Konfiguration:

1. Committen Sie die Änderungen:
   ```bash
   git add .
   git commit -m "AdSense IDs konfiguriert"
   git push
   ```

2. Deployen Sie auf Ihre Produktionsumgebung (GCP)

3. Verifizieren Sie in Google AdSense, dass die Anzeigen erkannt werden

## 🔒 Datenschutz

Die AdSense-Integration ist bereits in den Datenschutzseiten dokumentiert:
- `/app/impressum/page.tsx` - Abschnitt "Google AdSense"
- `/app/datenschutz/page.tsx` - Abschnitt "Google AdSense"

Die Cookie-Consent-Implementierung (`app/components/CookieConsent.tsx`) berücksichtigt bereits die AdSense-Cookies.

## 🎨 Design

Die Anzeigenblöcke haben folgendes Design:
- **Hintergrund**: Hellgrau (bg-gray-50)
- **Rahmen**: Mittelgrau (border-gray-300)
- **Padding**: 4 (p-4)
- **Minimale Höhe**: 250px (Anzeige #1), 200px (Anzeige #2)
- **Responsive**: Vollständig responsive mit `data-full-width-responsive="true"`

## ⚠️ Wichtige Hinweise

1. **Testphase**: AdSense-Anzeigen werden in der Entwicklungsumgebung nicht angezeigt. Sie müssen auf einer öffentlichen Domain gehostet werden.

2. **Genehmigung**: Es kann 24-48 Stunden dauern, bis Google AdSense Ihre Website genehmigt.

3. **Policy-Konformität**: Stellen Sie sicher, dass Ihre Website den [Google AdSense-Richtlinien](https://support.google.com/adsense/answer/48182) entspricht.

4. **Performance**: Die Anzeigen werden asynchron geladen und beeinträchtigen die Seitengeschwindigkeit nicht.

## 📊 Tracking

Nach der Aktivierung können Sie in Ihrem AdSense-Dashboard folgendes überwachen:
- Impressions pro Anzeigenblock
- Klickrate (CTR)
- Einnahmen
- Performance-Metriken

## 🆘 Fehlerbehebung

**Problem**: Anzeigen werden nicht angezeigt
- **Lösung**: Überprüfen Sie die Browser-Konsole auf JavaScript-Fehler
- Stellen Sie sicher, dass AdBlocker deaktiviert sind
- Verifizieren Sie, dass alle IDs korrekt eingefügt wurden

**Problem**: "AdSense not defined" Fehler
- **Lösung**: Das AdSense-Script im Layout muss korrekt geladen werden
- Warten Sie, bis die Seite vollständig geladen ist

## 📞 Support

Bei Problemen wenden Sie sich an:
- [Google AdSense Help Center](https://support.google.com/adsense/)
- [AdSense Community Forum](https://support.google.com/adsense/community)
