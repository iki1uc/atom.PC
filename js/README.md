# QUEAST · System-Framework  
**by iki1uc — Proprietär — Closed Source**

QUEAST ist ein modularer System‑Cluster, bestehend aus Engines, Rooms, RAWATOR‑Systemen, HDF‑ROM‑Ahnen und einer zentralen Oberfläche.  
Dieses Framework bildet eine vollständige technische Familie, deren Module logisch voneinander abstammen und miteinander interagieren.

Dieses Dokument erklärt die Struktur, Abstammung und Funktion aller Module.

---

# 🧬 System-Diagramm (Familienstruktur)

┌──────────────┐
│   SYS.js     │  ← System-Kernel
└──────┬───────┘
│
┌──────┴───────┐
│   core.js     │  ← Core-Engine
└──────┬───────┘
│
┌───────────────┼────────────────┐
│               │                │
│ axiom.js      │ axiom.map.js   │  ← Axiom-DNA
│               │                │
└───────────────┴────────────────┘

┌──────────────┬───────────────┬───────────────┐
│ HOLO.room.js │ NC.room.js     │ RESPO.room.js │
│ HOLO.engine  │ atom.js        │ beam.js       │
└──────────────┴───────────────┴───────────────┘


### 🔹 HOLO.engine.js  
**Position:** Kind‑Modul  
**Eltern:** core.js, axiom.js  
**Geschwister:** NC.room.js, RESPO.room.js, atom.js, beam.js  
**Kinder:** HOLO_ROOM.frames (81 Frames)  
**Enkel:** rawator‑81.js (nutzt HOLO‑Frames)

---

## 🧒 RAWATOR-SYSTEM (Enkel)

Diese Dateien hängen von HOLO, NC, AXIOM und CORE ab.

┌──────────────┬───────────────┬──────────────┐
│ rawator.js   │ rawator-life  │ rawator-81    │
│ geo.json     │ id.json       │ sli.ready     │
└──────────────┴───────────────┴──────────────┘


---

## 🧓 HDF-ROMs (Ahnen)

Unveränderliche Axiom‑Zustände:

d.hdf.rom
e.hdf.rom
i.hdf.rom
n.hdf.rom
o.hdf.rom
r.hdf.rom
s.hdf.rom
u.hdf.rom
w.hdf.rom


---

## 🧬 RAW-Dateien (Gene)

d.raw
sli.ready
use.json
user.json


---

## 🖥️ Oberfläche (Skin)

index.html


Die zentrale Schaltstelle, die alle Engines, Rooms und RAWATOR‑Systeme sichtbar macht.

---

# 📌 Zusammenfassung: Position von HOLO.engine.js

**HOLO.engine.js ist ein Kind‑Modul, das:**

- von SYS.js, core.js und axiom.js abstammt  
- HOLO.room.js als direkten Nachfahren hat  
- 81 HOLO‑Frames erzeugt (Kinder)  
- vom RAWATOR‑System genutzt wird (Enkel)  
- auf Axiom‑ROMs basiert (Ahnen)  
- in index.html sichtbar wird (Oberfläche)

Es ist ein zentrales Modul der QUEAST‑Familie.

---

# 🔒 LICENSE-CLOSED.txt

Copyright (c) 2026 iki1uc

Alle Rechte vorbehalten.

Dieses Projekt ist proprietär.
Das Kopieren, Klonen, Forken, Verbreiten, Modifizieren oder
kommerzielle Nutzen ist ohne schriftliche Erlaubnis verboten.

Nur der Autor iki1uc darf dieses Projekt verwenden, verbreiten
oder erweitern.

Externe Nutzung nur mit expliziter Business-Lizenz.
Dieses Projekt ist urheberrechtlich geschützt.

Kein Clone. Kein Fork. Keine Nutzung. Keine Weitergabe.

Alle Rechte liegen bei wieimmer iki1uc.

Version: 2026
Maintainer: iki1uc
Status: Proprietär / Closed Source

