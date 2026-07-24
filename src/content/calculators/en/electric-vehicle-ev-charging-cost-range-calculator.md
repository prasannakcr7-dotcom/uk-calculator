---
title: "UK Electric Vehicle (EV) Charging Cost & Range Calculator 2026/27"
description: "Calculate full EV battery charging costs, pence-per-mile running costs, charging session costs, and range added across UK tariffs."
category: "movilidad"
lang: "en"
isDevolved: false
translationUrl: "/electric-vehicle-ev-charging-cost-range-calculator"
labels:
  battery: "EV Usable Battery Capacity (kWh)"
  efficiency: "EV Driving Efficiency (Miles Per kWh)"
  tariff: "Charging Location & Tariff Type"
  start: "Start Battery Charge State (%)"
  end: "Target Battery Charge State (%)"
calcBadgesTitle: "EV Tariff Standards"
taxYearBadge: "2026/27 EV Rates"
taxYearBadgeDesc: "Calculates EV battery charging costs across UK smart off-peak EV tariffs (7p/kWh), standard domestic tariffs (24.5p/kWh), and public rapid chargers."
devolBadge: "UK Wide Application"
devolBadgeDesc: "Applies to EV charging cost estimations for private drivers, company car tax fleets, and commercial EV networks nationwide."
taperBadge: "Pence Per Mile Efficiency"
taperBadgeDesc: "Calculates exact pence-per-mile EV running costs based on vehicle efficiency (Miles per kWh)."
authoritiesTitle: "Reference Authorities"
auth1Name: "Ofgem (Office of Gas and Electricity Markets)"
auth1Desc: "Regulates UK domestic smart EV tariffs, domestic price caps, and public charging network compliance."
auth1Link: "https://www.ofgem.gov.uk"
auth2Name: "Energy Saving Trust (EST)"
auth2Desc: "UK government-backed advice body for electric vehicle adoption, home charger grants, and EV running cost comparisons."
auth2Link: "https://energysavingtrust.org.uk"
sourcesTitle: "Official Sources"
source1: "Ofgem Domestic Tariff Regulations & UK Public Chargepoint Network Data"
lastUpdatedTitle: "Last Updated"
lastUpdatedDesc: "April 2026 — Verified with 2026/27 UK EV tariff rates."
---

As electric vehicle (EV) adoption expands rapidly across the UK, the cost of charging an electric car varies dramatically depending on **where and when you charge**.

Charging an EV at home overnight using a dedicated **Smart Off-Peak EV Tariff** (such as Octopus Intelligent or OVO Charge) can cost as little as **7p per kWh** (approx. **1.8p per mile**), whereas charging at a motorway public ultra-rapid charger (150kW+) can cost up to **79p per kWh** (approx. **20p per mile**).

## ⚙️ Rules & Thresholds

- **Key EV Formulas**:
  - `Energy Added (kWh) = Usable Battery Capacity × ((Target % - Start %) / 100)`.
  - `Session Charging Cost (£) = Energy Added × (Tariff Rate in Pence / 100)`.
  - `Driving Range Added (Miles) = Energy Added × Efficiency (Miles per kWh)`.
  - `Pence Per Mile Cost (p/mi) = Tariff Rate in Pence / Efficiency (Miles per kWh)`.
- **UK Charging Tariff Benchmarks (2026/27)**:
  - **Overnight Smart EV Tariff (Home)**: **~7.00p / kWh** (1.8p – 2.0p per mile).
  - **Standard Domestic Price Cap (Home)**: **~24.50p / kWh** (6.4p – 7.0p per mile).
  - **Public Fast Charger (7kW – 22kW)**: **~45.00p / kWh** (11.8p – 12.8p per mile).
  - **Public Ultra-Rapid Hub (150kW+)**: **~79.00p / kWh** (20.7p – 22.5p per mile).
- **Public Charging VAT**: Domestic home electricity incurs 5% VAT, whereas public EV charging stations are subject to standard 20% VAT.

## 📊 Practical Examples

<div class="example-box">
  <strong>Example 1: Charging a 64 kWh EV Battery from 10% to 80% on Home Off-Peak EV Tariff (7p/kWh @ 3.8 mi/kWh)</strong>
  <ul>
    <li>Battery Usable Capacity: 64 kWh</li>
    <li>Charging Window: 10% to 80% (70% net charge added = 44.8 kWh)</li>
    <li>Tariff Rate: 7.00p per kWh (Overnight Smart EV Tariff)</li>
    <li>Efficiency: 3.8 Miles per kWh</li>
  </ul>
  <p>Energy Added: 44.8 kWh<br>Session Charging Cost: 44.8 kWh × £0.07 = **£3.14**<br>Driving Range Added: 44.8 × 3.8 = **170.2 Miles**<br>Running Cost Per Mile: 7.00p / 3.8 = **1.84p per mile**.</p>
  <div class="net-highlight">Session Cost: £3.14 (Range Added: 170 Miles | Cost Per Mile: 1.84p)</div>
</div>

## 📑 Common Pitfalls

- **Relying Exclusively on Highway Ultra-Rapid Chargers**: Charging solely at 79p/kWh public rapid chargers makes an EV as expensive to run as a petrol car (~20p/mile).
- **Overestimating Cold Weather Battery Range**: Cold winter temperatures reduce EV efficiency by 15% to 25% (dropping efficiency from 4.0 mi/kWh in summer to 3.0 mi/kWh in winter).
- **Confusing Gross Battery Capacity with Usable Capacity**: A car advertised with a 60 kWh gross battery may have a usable net capacity of 54 kWh due to protective buffer reserves.

---

## ❓ Frequently Asked Questions (FAQ)

<div class="faq-sec">
  <div class="faq-item">
    <button class="faq-trigger">How much does it cost to charge a typical electric car at home in the UK?</button>
    <div class="faq-content">
      <p>Using a dedicated overnight smart EV tariff (at ~7p/kWh), charging a standard 60 kWh electric car battery from empty to full costs just £4.20, providing around 200 to 220 miles of driving range.</p>
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-trigger">What is a Smart Off-Peak EV Tariff?</button>
    <div class="faq-content">
      <p>A smart EV tariff is a specialized dual-rate domestic electricity tariff offered by UK energy suppliers. It provides a discounted low unit rate (typically 7p/kWh) for 4 to 6 hours overnight when grid demand is low, specifically designed for charging electric vehicles.</p>
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-trigger">Why is public EV charging more expensive than home charging?</button>
    <div class="faq-content">
      <p>Public EV charging costs more because commercial chargepoint operators must cover high hardware installation costs, grid connection upgrades, site lease rents, ongoing maintenance, and standard 20% VAT (compared to 5% VAT on domestic home electricity).</p>
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-trigger">What does Miles Per kWh (mi/kWh) mean?</button>
    <div class="faq-content">
      <p>Miles Per kWh (mi/kWh) is the electric vehicle equivalent of Miles Per Gallon (MPG). It measures how many miles an electric car can travel on 1 Kilowatt-hour of battery energy. Efficient EVs achieve 4.0 to 4.5 mi/kWh, while large heavy electric SUVs achieve 2.5 to 3.0 mi/kWh.</p>
    </div>
  </div>
</div>
