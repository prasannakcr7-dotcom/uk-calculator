# Mandatory Calculator Component Design Rules

## 1. Mandatory 3-Card Architecture (DO NOT OMIT OR REMOVE ANY CARD)
Every calculator component (`src/components/<ComponentName>.astro`) MUST contain all 3 of the following cards in exact sequential order:

1. **Card 1: Input Card (`<div class="card">`)**:
   - Contains all parameter inputs, sliders, and select controls.

2. **Card 2: Result Hero Card (`<div class="result-card">`)**:
   - MUST be placed directly between Card 1 and Card 3.
   - MUST use the exact category gradient background: `style="background: linear-gradient(135deg, var(--<category>-1), var(--<category>-2) 80%);"`
   - MUST contain `.result-label`, `.result-amount` (with big number display), and `.result-year` (sub-result/tax info).
   - **CRITICAL**: This card MUST NEVER be omitted or removed.

3. **Card 3: Breakdown Card (`<div class="card" style="padding-bottom:0;">`)**:
   - MUST contain `<h2>📊 ... Breakdown</h2>`.
   - MUST contain itemized `<div class="breakdown-row section">` rows and a final bottom `<div class="breakdown-row net" style="border-top: 2px solid var(--line);">`.
   - **CRITICAL**: This card MUST NEVER be omitted or removed.

4. **Right Sidebar Column (`<div class="sidebar"><Sidebar category="<category>" /></div>`)**:
   - Placed inside `<div class="layout calculator-layout <categoryClass>">` as the 280px right column next to `<div class="main-col">`.

---

## 2. Category & Theme Color Matching Protocol
Before refactoring or editing any calculator component (`src/components/<ComponentName>.astro`), you MUST ALWAYS:
1. Open and inspect the corresponding markdown file in `src/content/calculators/en/<slug>.md`.
2. Extract the exact `category:` property from the YAML frontmatter (`trabajo`, `impuestos`, `vivienda`, `familia`, `salud`, `movilidad`, `social`, `finanzas`, `alltag`).
3. Enforce the exact matching CSS layout class, gradient variables, and sidebar prop:

| Category | CSS Class | Gradient Variables | Sidebar Prop |
|---|---|---|---|
| `trabajo` | `work-category` | `var(--work-1), var(--work-2)` | `<Sidebar category="trabajo" />` |
| `impuestos` | `taxes-category` | `var(--taxes-1), var(--taxes-2)` | `<Sidebar category="impuestos" />` |
| `vivienda` | `housing-category` | `var(--housing-1), var(--housing-2)` | `<Sidebar category="vivienda" />` |
| `familia` | `family-category` | `var(--family-1), var(--family-2)` | `<Sidebar category="familia" />` |
| `salud` | `health-category` | `var(--health-1), var(--health-2)` | `<Sidebar category="salud" />` |
| `movilidad` | `mobility-category` | `var(--mobility-1), var(--mobility-2)` | `<Sidebar category="movilidad" />` |
| `social` | `social-category` | `var(--social-1), var(--social-2)` | `<Sidebar category="social" />` |
| `finanzas` | `finance-category` | `var(--finance-1), var(--finance-2)` | `<Sidebar category="finanzas" />` |
| `alltag` | `reside-category` | `var(--reside-1), var(--reside-2)` | `<Sidebar category="alltag" />` |
