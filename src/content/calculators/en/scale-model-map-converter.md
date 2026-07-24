---
title: "Scale Model & Ordnance Survey Map Distance Converter 2026/27"
description: "Convert real-world dimensions into scale model sizes (OO gauge 1:76, N gauge 1:148, 1:72, 1:35) and Ordnance Survey map distances."
category: "alltag"
lang: "en"
isDevolved: false
translationUrl: "/scale-model-map-converter"
labels:
  preset: "Select Scale Ratio Preset"
  custom: "Custom Scale Factor (X in 1:X)"
  real: "Real-World Actual Dimension (Metres)"
calcBadgesTitle: "Scale Model Standards"
taxYearBadge: "2026/27 Scale Standards"
taxYearBadgeDesc: "Calculates precise model dimensions for UK railway modelling (OO, N, O gauge), plastic scale modeling, and OS mapping."
devolBadge: "UK Railway & OS Standards"
devolBadgeDesc: "Supports UK-specific model railway scales (OO gauge 4mm/ft = 1:76.2) and Ordnance Survey mapping ratios."
taperBadge: "Proportional Metric Factors"
taperBadgeDesc: "Divides real-world millimetre dimensions by the scale denominator ratio (1:X) to yield exact model sizes."
authoritiesTitle: "Reference Authorities"
auth1Name: "Ordnance Survey (OS)"
auth1Desc: "UK national mapping agency defining OS Explorer (1:25,000) and OS Landranger (1:50,000) map scales."
auth1Link: "https://www.ordnancesurvey.co.uk"
auth2Name: "Scale Model Railway Association (SMRA / MORG)"
auth2Desc: "UK scale model railway standards organisation defining OO, N, and O gauge scale standards."
auth2Link: "https://www.scalemodelrailway.co.uk"
sourcesTitle: "Official Sources"
source1: "Ordnance Survey Map Scale Technical Specifications & UK Railway Scale Rules"
lastUpdatedTitle: "Last Updated"
lastUpdatedDesc: "April 2026 — Verified with official scale modeling ratio standards."
---

Whether designing UK model railway layouts, assembling plastic scale model kits (aircraft, armour, miniatures), building architectural models, or calculating real-world distances on Ordnance Survey (OS) maps, converting between **real-world dimensions** and **scaled model sizes** requires applying proportional ratio mathematics.

In the UK, railway modelling uses unique national scales—notably **OO Gauge (1:76.2 scale)**, where 4mm represents 1 foot—differing from North American HO scale (1:87). For map reading, **Ordnance Survey Explorer maps** use a **1:25,000 scale** (where 4cm on the map equals 1km on the ground).

## ⚙️ Rules & Thresholds

- **UK Model Railway Scale Standards**:
  - **OO Gauge (4mm/ft = 1:76.2)**: Most popular UK model railway scale. A 15-metre real train carriage measures **196.8mm** in OO scale.
  - **N Gauge (2mm/ft = 1:148 in UK)**: Compact UK N gauge scale (compared to 1:160 Continental N gauge).
  - **O Gauge (7mm/ft = 1:43.5)**: Large-scale UK model railway standard.
- **Plastic Model Kit Ratios**:
  - **1:72 Scale**: Standard aircraft and military vehicle scale.
  - **1:48 Scale**: Large aircraft model scale.
  - **1:35 Scale**: Military armour, tanks, and diorama figures.
- **Ordnance Survey (OS) Map Scales**:
  - **OS Explorer (1:25,000)**: 4cm on map = 1km in reality (1cm = 250m).
  - **OS Landranger (1:50,000)**: 2cm on map = 1km in reality (1cm = 500m).
- **Scale Conversion Formula**: `Model Dimension (mm) = (Real World Dimension in Metres × 1000) / Scale Ratio`.

## 📊 Practical Examples

<div class="example-box">
  <strong>Example 1: Converting a 15-Metre Real Building for a UK OO Gauge (1:76.2) Model Railway Layout</strong>
  <ul>
    <li>Real-World Dimension: 15 Metres (15,000 mm)</li>
    <li>Scale Ratio: 1:76.2 (OO Gauge 4mm/ft)</li>
  </ul>
  <p>Calculation: 15,000 mm / 76.2 = **196.85 mm** = **19.69 cm** (7.75 inches).</p>
  <div class="net-highlight">Scaled OO Model Dimension: 196.85 mm (19.69 cm / 7.75 inches)</div>
</div>

## 📑 Common Pitfalls

- **Confusing UK OO Gauge (1:76.2) with US/EU HO Scale (1:87)**: Running 1:87 HO trains alongside 1:76 OO buildings causes noticeable scale proportion discrepancies on UK layouts.
- **Confusing UK N Gauge (1:148) with European N Scale (1:160)**: UK N gauge models are scaled slightly larger (1:148) to accommodate UK loading gauge constraints.
- **Misinterpreting OS Map Grid Squares**: On 1:25,000 and 1:50,000 OS maps, each standard blue grid square measures **1km by 1km** (1 square kilometre) in reality.

---

## ❓ Frequently Asked Questions (FAQ)

<div class="faq-sec">
  <div class="faq-item">
    <button class="faq-trigger">What is the difference between UK OO gauge and HO scale?</button>
    <div class="faq-content">
      <p>UK OO gauge uses a scale ratio of 1:76.2 (4mm to 1 foot), whereas European and American HO scale uses a 1:87 ratio (3.5mm to 1 foot). OO scale models are roughly 14% larger than HO scale models, though both run on 16.5mm track width.</p>
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-trigger">How do I measure distance on an Ordnance Survey 1:25,000 map?</button>
    <div class="faq-content">
      <p>On an OS Explorer 1:25,000 map, 4 centimetres on the paper map represents exactly 1 kilometre (1,000 metres) on the ground. Every 1 millimetre on the map equals 25 metres in reality.</p>
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-trigger">How do I calculate custom scale dimensions?</button>
    <div class="faq-content">
      <p>To calculate any model dimension, convert the real-world measurement into millimetres (multiply metres by 1,000) and divide by the scale ratio denominator X (where scale is 1:X).</p>
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-trigger">What does 4mm scale mean in UK model railways?</button>
    <div class="faq-content">
      <p>4mm scale means that 4 millimetres on the model represents 1 foot (12 inches) on the real prototype. Since 1 foot equals 304.8mm, dividing 304.8 by 4 gives the exact OO scale ratio of 1:76.2.</p>
    </div>
  </div>
</div>
