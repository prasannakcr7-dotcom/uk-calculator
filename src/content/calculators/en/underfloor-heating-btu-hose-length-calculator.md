---
title: "Underfloor Heating BTU & Pipe Length Calculator UK 2026/27"
description: "Calculate UK wet underfloor heating (UFH) 16mm PERT/PEX pipe coil lengths, manifold loop counts, and BTU thermal heat outputs."
category: "vivienda"
lang: "en"
isDevolved: false
translationUrl: "/underfloor-heating-btu-hose-length-calculator/"
labels:
  inputTitle: "UFH Room Area & Pipe Spacing Details"
  areaLabel: "Heated Room Floor Area (sq m)"
  spacingLabel: "Pipe Center-to-Center Spacing (mm)"
  manifoldDistLabel: "Distance from Room to UFH Manifold (Metres)"
  resultLabel: "Total PERT/PEX Pipe Length & Loops Required"
  heatOutputLabel: "Estimated Thermal Heat Output Rating:"
  breakdownTitle: "Underfloor Heating System Breakdown"
calcBadgesTitle: "Underfloor Heating Assurances"
taxYearBadge: "BS EN 1264 UFH Standards"
taxYearBadgeDesc: "Calculates pipe coil lengths and circuit loop limits compliant with BS EN 1264 Water based surface embedded heating systems."
devolBadge: "Max 100m Loop Circuit Limit"
devolBadgeDesc: "Enforces 100m to 110m maximum circuit loop length rules to prevent excessive hydraulic pressure drop."
taperBadge: "Heat Pump Low Temperature Math"
taperBadgeDesc: "Models 150mm pipe spacing optimized for low flow temperature Air Source Heat Pumps (45°C flow)."
authoritiesTitle: "Reference Authorities"
auth1Name: "UHMA (Underfloor Heating Manufacturers Association)"
auth1Desc: "The UK trade body representing hydronic underfloor heating manufacturers, technical design standards, and manifold commissioning."
auth1Link: "https://www.uhma.org.uk"
auth2Name: "BS EN 1264 Water Based Surface Embedded Heating Systems"
auth2Desc: "Official British Standards Institution standard governing hydronic underfloor heating thermal output and hydraulic design."
auth2Link: "https://knowledge.bsigroup.com/products/water-based-surface-embedded-heating-and-cooling-systems-definition-and-symbols"
sourcesTitle: "Official Sources"
source1: "BS EN 1264-2:2021 Embedded Heating Systems & CIBSE Guide B4 (Radian Heating) →"
lastUpdatedTitle: "Updated for 2026/27:"
lastUpdatedDesc: "Aligned with current UK statutory underfloor heating standards."
---

Designing a **wet (hydronic) underfloor heating (UFH) system** in the UK requires calculating the total length of **16mm PERT-AL-PERT or PEX pipe coil**, the number of **manifold circuit loops**, and thermal heat output in **Watts / BTU/hr**.

Because water friction creates hydraulic pressure drop inside narrow 16mm pipework, single circuit loops MUST NOT exceed **100 to 110 metres in length**. Spacing pipes at **150mm centers** provides optimal thermal performance for low-temperature **Air Source Heat Pumps**.

## ⚙️ Statutory BS EN 1264 Underfloor Heating Rules for 2026/27

### 1. UFH Pipe Spreading Rates & Consumption
The quantity of 16mm UFH pipe required per square metre depends on pipe center-to-center spacing:
- **150mm Pipe Spacing (Standard Screed / Heat Pump)**: **6.67 metres of pipe per sq m**.
- **200mm Pipe Spacing (High Output Gas Boiler)**: **5.00 metres of pipe per sq m**.
- **100mm Pipe Spacing (Perimeter Zones / Low Flow Temp)**: **10.00 metres of pipe per sq m**.

### 2. The 100-Metre Maximum Loop Circuit Rule
- A single 16mm UFH pipe circuit loop should never exceed **100 to 110 metres** (including flow and return tails back to the stainless steel manifold).
- **Number of Loops Formula**: `Loops = Ceiling[ Total Pipe Length (m) ÷ 105m ]`.
- *Example*: Heating a **30.0 sq m room** at **150mm spacing (6.67m/sq m)** located **8 metres from the manifold**:
  - `Floor Pipe Length = 30.0 × 6.67 = 200 metres`.
  - `Manifold Tails = 8m × 2 = 16 metres`.
  - `Total Pipe = 200 + 16 = 216 metres`.
  - `Manifold Loops = Ceiling[ 216 ÷ 105 ] = 2 Circuit Loops (108m per loop)`.

### 3. Thermal Heat Output Density (Watts per sq m)
Hydronic floor heating emits radiant warmth based on floor surface temperature limits (max **29°C** for living areas / **33°C** for tiled bathrooms):
- **Sand & Cement Screed (65mm)**: Emits ~**70 to 100 W/sq m** (238 to 340 BTU/hr per sq m).
- **Overfloor Low-Profile Panels (18mm)**: Emits ~**60 to 80 W/sq m**.

---

## 📊 Practical UFH Pipe Length Worked Examples

Below are two worked calculation examples illustrating underfloor heating pipe math:

<div class="example-box">
  <strong>Example 1: 30.0 sq m extension at 150mm pipe spacing (8m to manifold)</strong>
  <ul>
    <li>Heated Floor Area: **30.00 sq m**</li>
    <li>Pipe Spacing: **150mm Centers** (6.67m pipe / sq m)</li>
    <li>Distance to Manifold: **8.0 metres** (16m flow/return tails)</li>
  </ul>
  <p>Calculation: Total pipe = (30 × 6.67) + 16 = 216m. Requires 2 Manifold Loops (108m/loop) + 2,100W Heat Output.</p>
  <div class="net-highlight">Required Materials: **216 Metres PERT Pipe (2 Manifold Loops)** @ 2,100W Output</div>
</div>

<div class="example-box">
  <strong>Example 2: 15.0 sq m kitchen at 200mm pipe spacing (5m to manifold)</strong>
  <ul>
    <li>Heated Floor Area: **15.00 sq m**</li>
    <li>Pipe Spacing: **200mm Centers** (5.00m pipe / sq m)</li>
    <li>Distance to Manifold: **5.0 metres** (10m flow/return tails)</li>
  </ul>
  <p>Calculation: Total pipe = (15 × 5.0) + 10 = 85m. Requires 1 Manifold Loop (85m/loop) + 1,050W Heat Output.</p>
  <div class="net-highlight">Required Materials: **85 Metres PERT Pipe (1 Manifold Loop)**</div>
</div>

---

## 📑 Common Pitfalls & UFH Warnings

1. **Kinking 16mm Pipe During Laying**: Multi-layer PERT-AL-PERT pipe contains an aluminum core that holds its shape, but sharp bends below 80mm radius can kink the pipe. Always use plastic pipe clips and bend formers.
2. **Exceeding 2.5 TOG Flooring Thermal Resistance**: Laying thick carpet and heavy foam underlay over UFH blocks heat transfer. Under BS EN 1264, the combined TOG rating of carpet plus underlay MUST NOT exceed **2.5 TOG**.
3. **Pressure Testing Before Screeding**: ALWAYS pressure test wet UFH pipework with water at **6 bar pressure for 24 hours** BEFORE pouring floor screed. Keep the system pressurized during screed pouring to detect accidental spade punctures immediately.

---

## ❓ Frequently Asked Questions (FAQ)

<div class="faq-sec">
  <div class="faq-item">
    <button class="faq-trigger">What is PERT-AL-PERT pipe vs PEX pipe? <span class="icon">▼</span></button>
    <div class="faq-content">
      <p>PERT-AL-PERT is a 5-layer pipe featuring an internal aluminum oxygen barrier sandwiched between Polyethylene of Raised Temperature Resistance. It holds its shape when bent, making manual installation far easier than springy PEX pipe.</p>
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-trigger">What flow water temperature does wet UFH run at? <span class="icon">▼</span></button>
    <div class="faq-content">
      <p>Wet UFH operates at low flow water temperatures between **35°C and 45°C** (compared to 70°C to 75°C for traditional wall radiators), making UFH 25% to 40% more efficient when paired with heat pumps.</p>
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-trigger">What is a UFH Mixing Shunt Group on a manifold? <span class="icon">▼</span></button>
    <div class="faq-content">
      <p>A mixing shunt group features an A-rated circulation pump and thermostatic mixing valve attached to the manifold, blending hot boiler water (70°C) down to safe UFH temperatures (45°C).</p>
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-trigger">Can wet UFH be installed upstairs on timber joists? <span class="icon">▼</span></button>
    <div class="faq-content">
      <p>Yes. Upstairs timber floors use low-profile aluminum heat-diffuser spreader plates slotted between joists or 18mm grooved acoustic insulation boards without adding heavy screed weight.</p>
    </div>
  </div>
</div>
