# ROKKO! Records Homepage

Willkommen zur offiziellen Homepage von **ROKKO! Records** - Das Label für neurodiverse Künstler aus dem Spektrum.

## 🎵 Features

✅ **Responsive Design** - Funktioniert perfekt auf Handy, Tablet und Desktop  
✅ **Video Modal** - Schwebendes Pop-up mit Autoplay und Mute-Button  
✅ **Artist Showcase** - 7 Artists mit detaillierten Profilen  
✅ **Streaming Links** - Direct Links zu Spotify, Apple Music, Amazon, Beatport, YouTube  
✅ **YouTube Integration** - Eingebettete YouTube Playlisten  
✅ **Newsletter** - Newsletter-Anmeldung mit Validierung  
✅ **Impressum** - Vollständige rechtliche Informationen  

## 🎨 Design-Spezifikationen

### Farbschema
- **Schwarzton:** `#000000`
- **Orangeton:** `#E7760D`
- **Hellbraunton:** `#53483E`

### Spezielle Styles
- **Borders:** 5pt Orange auf Artist-Kacheln und wichtigen Elementen
- **Border-Radius:** Abgerundete Ecken auf Header und Boxen
- **Fonts:** Segoe UI, Tahoma, Geneva (systemfonts)
- **Clip-Path:** Abgeschrägte Artist-Label

## 📁 Verzeichnisstruktur

```
ROKKO-HOMEPAGE-NEU/
├── index.html              # Hauptseite
├── styles.css              # Styling (12.8 KB)
├── script.js               # Interaktivität
├── images/                 # Bildordner
│   ├── README.md
│   ├── header-placeholder.png
│   ├── skaramush-vandango.png
│   ├── silberstreif.png
│   ├── anger-uschis.png
│   ├── henri-bellieu.png
│   ├── fleur-et-beunie.png
│   ├── sukram.png
│   ├── anthony-sinclair.png
│   └── rokko-logo.png
├── videos/                 # Video Ordner
│   ├── README.md
│   ├── intro-web.mp4       # Querformat
│   └── intro-mobile.mp4    # Hochkant
└── README.md              # Diese Datei
```

## 🚀 Installation & Verwendung

### 1. Repository clonen
```bash
git clone https://github.com/Skarramushvandango-tech/ROKKO-HOMEPAGE-NEU.git
cd ROKKO-HOMEPAGE-NEU
```

### 2. Bilder hochladen
Platziere deine Bilder im `/images` Ordner:
- 8 Artist Porträts
- 1 Header Image
- 1 ROKKO Logo

### 3. Videos hochladen
Platziere deine Videos im `/videos` Ordner:
- `intro-web.mp4` (Querformat, 1920x1080 oder ähnlich)
- `intro-mobile.mp4` (Hochkant, 1080x1920 oder 9:16)

### 4. Links anpassen
Öffne `script.js` und ersetze alle `PLACEHOLDER` URLs mit echten Links:

```javascript
links: {
    spotify: 'https://open.spotify.com/artist/DEIN_ARTIST_ID',
    apple: 'https://music.apple.com/artist/DEIN_ARTIST_ID',
    amazon: 'https://www.amazon.com/music/artist/DEIN_ARTIST_ID',
    beatport: 'https://www.beatport.com/artist/DEIN_ARTIST_ID',
    youtube: 'https://www.youtube.com/channel/DEIN_CHANNEL_ID'
}
```

### 5. Lokal testen
Öffne die `index.html` in deinem Browser oder nutze einen lokalen Server:

```bash
# Mit Python 3
python -m http.server 8000

# Mit Node.js (http-server)
npx http-server
```

Dann öffne `http://localhost:8000` im Browser.

## 📋 Sections der Website

### 1. Navigation
- Links zu allen Hauptsektionen
- Sticky Position beim Scrolling

### 2. Header
- Artist Portal Image
- ▶ Video abspielen Button
- Orange 5pt Border mit abgerundeten unteren Ecken

### 3. Video Modal
- Schwebendes Pop-up
- Autoplay mit Mute (Standard)
- 🔊/🔇 Ton an/aus Button
- ✕ Close Button
- ESC Taste zum Schließen

### 4. Welcome Section
- "Willkommen" Überschrift (Orange)
- "Wir sind ROKKO! Records" Box
- Beschreibungstext zur Label-Philosophie

### 5. Artists Section ("Projekte")
- 2x4 Grid mit Artist-Kacheln
- Jede Kachel mit:
  - Artist Foto (400x400px min.)
  - Orange 5pt Border
  - Abgeschrägtes Label mit Artist-Name
  - Hover-Effekt (Zoom)
- Click öffnet Artist-Detail Modal

### 6. Artist Detail Modal
- Artist Foto (linke Seite)
- Artist Name (Überschrift)
- Artist Biografie (Beschreibung)
- 5 Streaming Buttons (rechte Seite):
  - Spotify (grün #1DB954)
  - Apple Music (rot #FA243C)
  - Amazon (orange #FF9900)
  - Beatport (hellblau #00D1FF)
  - YouTube (rot #FF0000)

### 7. YouTube Section
- Eingebettete YouTube Playlist
- Responsive Embedding

### 8. Newsletter Section
- "Bleib auf dem Laufenden!" Überschrift
- Email-Input Feld
- Checkbox für Datenschutzerklärung
- Submit Button
- Bestätigungsmeldung nach erfolgreicher Anmeldung

### 9. Impressum / Footer
- ROKKO! Records
- Name: Markus Ilgner
- Adresse: Am Brunnen 3, 47279 Duisburg
- Mail: (folgt noch)

## 🎬 Video Anforderungen

### Intro Video Web (intro-web.mp4)
- **Format:** MP4
- **Auflösung:** 1920x1080 (16:9)
- **Länge:** 15-30 Sekunden
- **Größe:** Unter 10MB
- **Audio:** Ja (wird mit Button stummgeschaltet)

### Intro Video Mobile (intro-mobile.mp4)
- **Format:** MP4
- **Auflösung:** 1080x1920 (9:16)
- **Länge:** 15-30 Sekunden
- **Größe:** Unter 5MB
- **Audio:** Ja (wird mit Button stummgeschaltet)

## 🎨 CSS Struktur

Das Stylesheet ist in folgende Abschnitte unterteilt:

1. **Variables & General Styles** - Farbdefinitionen und Basis-Styles
2. **Navigation** - Navbar Styling
3. **Header** - Header Section
4. **Video Modal** - Video Pop-up Styling
5. **Welcome Section** - Welcome Box
6. **Artists Section** - Grid und Kacheln
7. **Artist Modal** - Detail Pop-up
8. **YouTube Section** - Embedded Videos
9. **Newsletter Section** - Form Styling
10. **Footer / Impressum** - Footer Styling
11. **Responsive Design** - Media Queries

## ⚙️ JavaScript Funktionalität

Das JavaScript-Skript implementiert:

1. **Video Modal Management**
   - Öffnen/Schließen
   - Autoplay mit Mute
   - Mute-Button Toggle
   - Responsive Video Source Auswahl

2. **Artist Modal Management**
   - Dynamic Content Loading
   - Link Updates
   - Keyboard Controls (ESC)

3. **Newsletter Form**
   - Email Validierung
   - Checkbox Validierung
   - Success Message

4. **Navigation**
   - Smooth Scrolling
   - Link Management

## 🔧 Customization

### Farben ändern
Öffne `styles.css` und ändere die CSS-Variablen:

```css
:root {
    --black: #000000;
    --orange: #E7760D;
    --brown: #53483E;
}
```

### Artists hinzufügen
Öffne `script.js` und füge einen neuen Eintrag in `artistsData` ein:

```javascript
'neuer-artist': {
    name: 'Neuer Artist',
    bio: 'Beschreibung...',
    image: 'images/neuer-artist.png',
    links: {
        spotify: 'https://...',
        apple: 'https://...',
        // etc.
    }
}
```

Dann füge eine entsprechende Artist-Kachel in `index.html` hinzu.

## 📱 Responsive Breakpoints

- **Desktop:** Über 768px
- **Tablet:** 480px - 768px
- **Mobile:** Unter 480px

## 🔐 Browser Unterstützung

- ✅ Chrome/Edge (Neueste Versionen)
- ✅ Firefox (Neueste Versionen)
- ✅ Safari (Neueste Versionen)
- ✅ Mobile Browser (iOS Safari, Chrome Mobile)

## 📧 Newsletter Integration

Das aktuelle Formular zeigt nur eine Bestätigungsmeldung. Für echte Newsletter-Integration:

### Option 1: Mailchimp
Integrationscode hinzufügen in `script.js`

### Option 2: ConvertKit
API Integration für Email-Verwaltung

### Option 3: Eigenbackend
Backend API aufbauen zum Speichern von E-Mails

## 🐛 Debugging

- Browser Developer Tools öffnen (F12)
- Konsole checken auf Fehler
- `console.log()` Meldungen ansehen

## 📝 Lizenz & Copyright

© 2026 ROKKO! Records. Alle Rechte vorbehalten.

---

**Viel Erfolg mit ROKKO! Records!** 🎵🎶