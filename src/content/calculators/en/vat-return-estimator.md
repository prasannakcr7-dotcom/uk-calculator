---
title: "VAT Return Estimator UK 2026/27 — Quarterly Box 5 Math"
description: "Calculate UK quarterly VAT returns, Making Tax Digital (MTD) Box 1 & Box 4 totals, and net VAT payable."
category: "impuestos"
lang: "en"
isDevolved: false
translationUrl: "/vat-return-estimator/"
labels:
  inputTitle: "Quarterly VAT Return Details"
  salesVatLabel: "Quarterly Sales Output VAT Charged (£)"
  purchaseVatLabel: "Quarterly Purchases Input VAT Reclaimable (£)"
  resultLabel: "Estimated Net Quarterly VAT Payable to HMRC"
  deadlineLabel: "Quarterly Return & Payment Deadline:"
  breakdownTitle: "VAT Return Box Breakdown"
calcBadgesTitle: "VAT Return Assurances"
taxYearBadge: "MTD Compliant Math"
taxYearBadgeDesc: "Calculates official HMRC Making Tax Digital 9-box VAT return totals."
devolBadge: "Box 1 vs Box 4 Relief"
devolBadgeDesc: "Offsets input VAT reclaimable on business purchases (Box 4) directly against sales output VAT (Box 1)."
taperBadge: "7-Day Payment Window"
taperBadgeDesc: "Integrates official statutory filing and payment deadlines (1 month and 7 days after quarter end)."
authoritiesTitle: "Reference Authorities"
auth1Name: "HM Revenue & Customs (HMRC)"
auth1Desc: "The UK tax authority regulating quarterly VAT returns, MTD software compliance, and payment processing."
auth1Link: "https://www.gov.uk/vat-returns"
auth2Name: "GOV.UK Making Tax Digital (MTD) Guide"
auth2Desc: "Official HMRC guidance on MTD digital record keeping, electronic filing, and penalty points systems."
auth2Link: "https://www.gov.uk/guidance/use-making-tax-digital-for-vat"
sourcesTitle: "Official Sources"
source1: "Value Added Tax Regulations 1995 (SI 1995/2518) →"
lastUpdatedTitle: "Updated for 2026/27:"
lastUpdatedDesc: "Aligned with current UK statutory VAT return rules."
---

All VAT-registered businesses in the UK must submit electronic **VAT Returns** to HMRC at regular intervals (typically quarterly) under **Making Tax Digital (MTD) for VAT** legislation.

Understanding how **Box 1 (Output VAT charged on sales)** and **Box 4 (Input VAT paid on business expenses)** determine your net **Box 5 payment** keeps your business cash flow predictable.

## ⚙️ Statutory 9-Box VAT Return Rules for 2026/27

### 1. Key VAT Return Boxes
- **Box 1 (Output VAT)**: Total VAT charged on sales of goods and services to customers during the VAT period.
- **Box 4 (Input VAT)**: Total VAT paid on valid business purchases, stock, equipment, and utility bills.
- **Box 5 (Net VAT Payable / Refund)**: Calculated as **Box 1 minus Box 4**:
  - If Box 1 is greater than Box 4: You owe the net difference to HMRC.
  - If Box 4 is greater than Box 1: HMRC pays you a **VAT refund**.

### 2. Statutory Filing & Payment Deadlines
- The electronic deadline for submitting your VAT return and paying HMRC is **1 calendar month and 7 days** after the end of the quarterly VAT period.
- *Example*: For the VAT quarter ending 30 June, the deadline for filing and payment is **7 August**.

---

## 📊 Practical VAT Return Worked Examples

Below are two worked calculation examples illustrating quarterly VAT return submissions:

<div class="example-box">
  <strong>Example 1: Trading quarter with £6,000 output VAT and £2,200 input VAT</strong>
  <ul>
    <li>Box 1 (Sales Output VAT Charged): **£6,000.00**</li>
    <li>Box 4 (Purchase Input VAT Reclaimable): **£2,200.00**</li>
    <li>Box 5 Calculation: £6,000.00 - £2,200.00 = **£3,800.00**</li>
  </ul>
  <p>Calculation: Net VAT due to HMRC = £3,800.00. Collected automatically via HMRC Direct Debit on the 10th of the month following the deadline.</p>
  <div class="net-highlight">Box 5 Net Payable to HMRC: **£3,800.00**</div>
</div>

<div class="example-box">
  <strong>Example 2: Investment quarter with £3,000 output VAT and £7,500 input VAT (Equipment Purchase)</strong>
  <ul>
    <li>Box 1 (Sales Output VAT Charged): **£3,000.00**</li>
    <li>Box 4 (Purchase Input VAT Reclaimable on New Machinery): **£7,500.00**</li>
    <li>Box 5 Calculation: £3,000.00 - £7,500.00 = **-£4,500.00**</li>
  </ul>
  <p>Calculation: Input VAT exceeds output VAT. HMRC deposits a £4,500.00 VAT refund check directly into the business bank account.</p>
  <div class="net-highlight">Box 5 Net HMRC Refund: **£4,500.00 Refund**</div>
</div>

---

## 📑 Common Pitfalls & VAT Return Warnings

1. **Reclaiming Input VAT Without Valid VAT Invoices**: HMRC inspectors strictly require valid tax invoices containing the seller's 9-digit UK VAT number. You cannot claim Box 4 input VAT using simplified credit card till receipts without a breakdown.
2. **Reclaiming VAT on Business Entertainment**: Input VAT incurred on entertaining UK clients, directors, or business partners is strictly **non-deductible** under UK VAT law and cannot be included in Box 4.
3. **New HMRC Points-Based Late Submission Penalties**: Failing to file your VAT return on time incurs penalty points. Reaching 4 penalty points triggers an automatic statutory **£200 fine** plus late payment interest accrued daily.

---

## ❓ Frequently Asked Questions (FAQ)

<div class="faq-sec">
  <div class="faq-item">
    <button class="faq-trigger">What is Making Tax Digital (MTD) software bridging? <span class="icon">▼</span></button>
    <div class="faq-content">
      <p>MTD requires all VAT returns to be submitted electronically via API-enabled software (such as Xero, QuickBooks, or MTD bridging spreadsheets). Manual paper filings are no longer accepted by HMRC.</p>
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-trigger">How does HMRC process VAT refund payments? <span class="icon">▼</span></button>
    <div class="faq-content">
      <p>If your Box 5 calculation results in a refund, HMRC typically transfers the money directly into your registered business bank account within **10 working days** of receiving your electronic VAT return.</p>
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-trigger">Can I claim VAT on motoring and petrol expenses? <span class="icon">▼</span></button>
    <div class="faq-content">
      <p>Input VAT on fuel used for business travel can be reclaimed using HMRC fuel scale charges or exact mileage records. Input VAT on purchasing a company car is generally 100% blocked unless it is an exclusive commercial taxi/hire car.</p>
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-trigger">What are standard UK VAT Accounting Schemes? <span class="icon">▼</span></button>
    <div class="faq-content">
      <p>Standard Accounting reports VAT based on invoice dates. **Cash Accounting** allows small businesses to report VAT based on actual cash payment received dates, protecting cash flow from unpaid customer invoices.</p>
    </div>
  </div>
</div>
