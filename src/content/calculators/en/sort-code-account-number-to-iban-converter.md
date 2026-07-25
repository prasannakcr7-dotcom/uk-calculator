---
title: "UK Sort Code & Account Number to IBAN Converter 2026/27"
description: "Convert 6-digit UK bank sort codes and 8-digit account numbers into 22-character UK IBANs and BIC/SWIFT codes."
keywords: "uk sort code & account number to iban converter 2026 27, convert 6digit uk bank sort codes, compound interest 2026/27"
category: "finanzas"
lang: "en"
isDevolved: false
translationUrl: "/sort-code-account-number-to-iban-converter"
labels:
  sort: "UK Sort Code (6 digits)"
  account: "UK Account Number (8 digits)"
  bank: "Select Banking Institution (for BIC/SWIFT)"
calcBadgesTitle: "IBAN Standard Rules"
taxYearBadge: "ISO 13616 Standard"
taxYearBadgeDesc: "Generates 22-character UK IBAN structures compliant with ISO 13616 and European Payments Council (EPC) standards."
devolBadge: "UK Wide Standard"
devolBadgeDesc: "Applies across all UK high-street banks, building societies, and challenger digital banks (Monzo, Starling, Revolut)."
taperBadge: "MOD-97 Validation"
taperBadgeDesc: "Uses 2-digit MOD97 checksum validation to prevent typographical errors during international wire transfers."
authoritiesTitle: "Reference Authorities"
auth1Name: "Pay.UK"
auth1Desc: "UK retail payments authority operating Bacs, Faster Payments, and UK IBAN sorting standards."
auth1Link: "https://www.wearepay.uk"
auth2Name: "SWIFT (Society for Worldwide Interbank Financial Telecommunication)"
auth2Desc: "Global member-owned cooperative providing standardized BIC codes and messaging networks for international banking."
auth2Link: "https://www.swift.com"
sourcesTitle: "Official Sources"
source1: "ISO 13616 International Bank Account Number Standard"
lastUpdatedTitle: "Last Updated"
lastUpdatedDesc: "April 2026 — Verified with 2026/27 UK IBAN structure guidelines."
---

An **International Bank Account Number (IBAN)** is a standardized international system for identifying bank accounts across international borders. When receiving funds from abroad or setting up international wire transfers into a UK bank account, overseas senders require your UK IBAN and BIC/SWIFT code.

In the UK, an IBAN consists of exactly **22 alphanumeric characters**. It seamlessly incorporates the country code (`GB`), two MOD-97 check digits, a 4-letter bank identifier code, your 6-digit domestic sort code, and your 8-digit bank account number.

## ⚙️ Rules & Thresholds

- **UK IBAN Structure (22 characters)**:
  - Country Code: `GB` (2 letters)
  - Check Digits: 2 numerical digits calculated via MOD-97 algorithm.
  - Bank Identifier: 4-letter alphabetic bank code (e.g. `HURC` for HSBC, `BARC` for Barclays, `LOYD` for Lloyds, `NWBK` for NatWest).
  - Sort Code: 6 numerical digits (e.g. `20-00-00`).
  - Account Number: 8 numerical digits (e.g. `12345678`).
- **SWIFT / BIC Code (8 or 11 characters)**: Bank Identifier Code used alongside IBAN for international wire routing.
- **SEPA Compatibility**: UK accounts participate in the Single Euro Payments Area (SEPA), enabling fast euro transfers using IBANs.

## 📊 Practical Examples

<div class="example-box">
  <strong>Example 1: Generating UK IBAN for HSBC Account</strong>
  <ul>
    <li>Sort Code: 20-00-00</li>
    <li>Account Number: 12345678</li>
    <li>Bank: HSBC Bank UK (HURC)</li>
  </ul>
  <p>4-Letter Bank Code: HURC<br>MOD-97 Check Digits: Calculated (e.g., 28)<br>Formatted 22-Char IBAN: GB28 HURC 2000 0012 3456 78<br>BIC / SWIFT Code: HURCGB21</p>
  <div class="net-highlight">Generated UK IBAN: GB28 HURC 2000 0012 3456 78</div>
</div>

## 📑 Common Pitfalls

- **Confusing Account Numbers**: Adding extra zeros or using 7-digit old account numbers without leading zeros will cause IBAN validation checks to fail.
- **Confusing IBAN with BIC**: An IBAN identifies your specific personal account, whereas a BIC/SWIFT code identifies your bank's institution branch network. Both are required for global wire transfers.
- **Spaces in Digital Transfers**: While spaces are added for human visual readability (e.g., `GB28 HURC 2000...`), remove spaces when pasting into electronic banking forms.

---

## ❓ Frequently Asked Questions (FAQ)

<div class="faq-sec">
  <div class="faq-item">
    <button class="faq-trigger">What is the difference between an IBAN and a SWIFT/BIC code?</button>
    <div class="faq-content">
      <p>An IBAN (International Bank Account Number) identifies your individual specific bank account held at a bank. A SWIFT or BIC (Bank Identifier Code) identifies the financial institution and branch network overall. International transfers require both the recipient's IBAN and BIC.</p>
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-trigger">Where can I find my official UK IBAN on my bank account?</button>
    <div class="faq-content">
      <p>Your official UK IBAN and BIC code can be found directly on your paper bank statement, inside your online banking web portal, or within your bank's mobile banking app under account details or statement settings.</p>
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-trigger">Can I use a UK IBAN to receive money from European SEPA countries?</button>
    <div class="faq-content">
      <p>Yes. The UK remains a full member of the Single Euro Payments Area (SEPA). You can provide your UK IBAN to senders in European SEPA member countries to receive euro credit transfers directly into your UK bank account.</p>
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-trigger">What happens if an IBAN check digit is typed incorrectly?</button>
    <div class="faq-content">
      <p>The 2-digit MOD-97 check digits built into every IBAN act as an automated mathematical safety lock. If a sender mistypes any digit in your sort code, account number, or bank code, foreign banking software will reject the transaction before money leaves the sender's account.</p>
    </div>
  </div>
</div>
