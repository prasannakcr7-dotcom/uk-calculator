---
title: "Gas Unit Converter UK (m³ & ft³ to kWh) 2026/27"
description: "Convert UK gas meter readings (cubic metres m³ and imperial cubic feet ft³) into energy kilowatt-hours (kWh)."
category: "vivienda"
lang: "en"
isDevolved: false
translationUrl: "/gas-unit-converter-m-to-kwh/"
labels:
  inputTitle: "Gas Meter Unit Conversion Details"
  volumeLabel: "Gas Meter Units Consumed"
  meterTypeLabel: "Gas Meter Type"
  calorificLabel: "Gas Calorific Value (MJ/m³)"
  resultLabel: "Converted Gas Energy Consumption"
  estimatedCostLabel: "Estimated Cost at 6.2p/kWh Ofgem Cap:"
  breakdownTitle: "Statutory Gas Conversion Formula Breakdown"
calcBadgesTitle: "Gas Conversion Assurances"
taxYearBadge: "Statutory Conversion Formula"
taxYearBadgeDesc: "Calculates gas energy using official Gas (Calculation of Thermal Energy) Regulations formula."
devolBadge: "Metric & Imperial Support"
devolBadgeDesc: "Converts both modern metric meters (m³) and older imperial meters (100 cu ft)."
taperBadge: "Calorific Value (CV) Math"
taperBadgeDesc: "Incorporates National Grid daily Calorific Value (CV) variations (typically 38.0 to 41.0 MJ/m³)."
authoritiesTitle: "Reference Authorities"
auth1Name: "Ofgem (Office of Gas and Electricity Markets)"
auth1Desc: "The UK energy regulator establishing gas thermal energy calculation regulations and consumer standards."
auth1Link: "https://www.ofgem.gov.uk"
auth2Name: "GOV.UK Gas Meter Conversion Regulations"
auth2Desc: "Official UK government legislation detailing gas meter volume correction factors and energy unit conversion formulas."
auth2Link: "https://www.gov.uk/guidance/gas-meter-readings-and-bills"
sourcesTitle: "Official Sources"
source1: "Gas (Calculation of Thermal Energy) Regulations 1996 (SI 1996/439) & Gas Act 1986 →"
lastUpdatedTitle: "Updated for 2026/27:"
lastUpdatedDesc: "Aligned with current UK statutory gas conversion parameters."
---

Gas meters in the UK do not measure energy (kWh) directly. Instead, they measure physical gas volume—either in **cubic metres (m³)** on modern digital meters or **cubic feet (ft³)** on older imperial meters.

Your energy supplier converts volume readings into **kilowatt-hours (kWh)** on your gas bill using a **statutory mathematical formula** governed by **Ofgem** and the **Gas (Calculation of Thermal Energy) Regulations 1996**.

## ⚙️ Statutory Gas Conversion Formulas for 2026/27

### 1. Metric Meter Formula (m³ to kWh)
To convert metric cubic metres (`m³`) into energy (`kWh`):
- **Statutory Formula**: `kWh = Volume (m³) × Volume Correction Factor (1.02264) × Calorific Value (CV) ÷ 3.6`.
- **Constants**:
  - **Volume Correction Factor**: `1.02264` (Corrects for temperature and gas pressure at the meter).
  - **Calorific Value (CV)**: Typically **39.5 MJ/m³** (Measures energy density of gas supplied through local mains pipelines, ranging between 38.0 and 41.0).
  - **Conversion Constant**: `3.6` (Converts megajoules into kWh).
- **Metric Quick Rule of Thumb**: Multiply `m³` by **~11.2** to estimate `kWh`.

### 2. Imperial Meter Formula (ft³ to kWh)
Older imperial gas meters record usage in hundreds of cubic feet (`100 ft³`):
- **Statutory Formula**: `kWh = Volume (hundred ft³) × 2.83 × Volume Correction Factor (1.02264) × CV ÷ 3.6`.
- **Conversion Factor**: `1 hundred cu ft = 2.83 cubic metres`.
- **Imperial Quick Rule of Thumb**: Multiply `100 ft³` by **~31.5** to estimate `kWh`.

---

## 📊 Practical Gas Conversion Worked Examples

Below are two worked calculation examples illustrating statutory gas meter conversions:

<div class="example-box">
  <strong>Example 1: Converting 100 m³ of gas from a metric digital meter (CV 39.5 MJ/m³)</strong>
  <ul>
    <li>Input Volume: **100 m³**</li>
    <li>Volume Correction Factor: **1.02264**</li>
    <li>Calorific Value: **39.5 MJ/m³**</li>
  </ul>
  <p>Calculation: kWh = (100 × 1.02264 × 39.5) ÷ 3.6 = 1,121.7 kWh.</p>
  <div class="net-highlight">Converted Energy: **1,121.7 kWh** (£69.55 Energy Cost @ 6.2p/kWh)</div>
</div>

<div class="example-box">
  <strong>Example 2: Converting 50 units (5,000 ft³) from an imperial gas meter (CV 39.5 MJ/m³)</strong>
  <ul>
    <li>Input Volume: **50 units** (5,000 ft³)</li>
    <li>Metric Volume (50 × 2.83): **141.5 m³**</li>
  </ul>
  <p>Calculation: kWh = (141.5 × 1.02264 × 39.5) ÷ 3.6 = 1,587.2 kWh.</p>
  <div class="net-highlight">Converted Energy: **1,587.2 kWh** (£98.41 Energy Cost @ 6.2p/kWh)</div>
</div>

---

## 📑 Common Pitfalls & Gas Conversion Warnings

1. **Confusing Metric and Imperial Meter Units**: Entering imperial `ft³` readings into a supplier system configured for metric `m³` causes your gas bill to be overstated by **2.8 times**, resulting in massive overcharging errors.
2. **Checking the Calorific Value (CV) on Your Bill**: Your gas bill displays the exact daily Calorific Value used during your billing period. CV varies slightly depending on whether your gas was imported via LNG tankers or North Sea pipelines.
3. **Smart Meter Conversion Accuracy**: Smart gas meters measure volume in `m³` and send digital readings automatically. You can check the 'kWh' breakdown on your in-home display (IHD) unit.

---

## ❓ Frequently Asked Questions (FAQ)

<div class="faq-sec">
  <div class="faq-item">
    <button class="faq-trigger">How do I know if my gas meter is metric or imperial? <span class="icon">▼</span></button>
    <div class="faq-content">
      <p>Look at the numbers on the front of your gas meter. Metric meters display 'm³' next to the digital numbers. Imperial meters display 'ft³' or 'cubic feet'.</p>
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-trigger">What is the Volume Correction Factor (1.02264)? <span class="icon">▼</span></button>
    <div class="faq-content">
      <p>Gas expands and contracts with atmospheric temperature and pressure. The statutory 1.02264 factor adjusts gas volume to standard temperature (15°C) and pressure conditions.</p>
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-trigger">Why does my gas bill show a different Calorific Value each month? <span class="icon">▼</span></button>
    <div class="faq-content">
      <p>National Grid measures the energy density (Calorific Value) of mains gas daily at local distribution off-take points. Your bill applies the average CV recorded for your region during that billing cycle.</p>
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-trigger">How much does 1 m³ of gas cost under Ofgem price cap rates? <span class="icon">▼</span></button>
    <div class="faq-content">
      <p>1 m³ of gas converts to ~11.2 kWh. At a 6.2p/kWh unit rate, 1 m³ of gas costs approximately **69.4 pence** (excluding standing charges).</p>
    </div>
  </div>
</div>
