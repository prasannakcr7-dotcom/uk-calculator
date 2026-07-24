---
title: "UK Coronavirus Job Retention Scheme (CJRS) Furlough Audit Estimator"
description: "Calculate historical CJRS furlough grant entitlements (80% gross pay up to £2,500/month cap), employer top-up requirements, and audit verification parameters."
category: "trabajo"
lang: "en"
isDevolved: false
translationUrl: "/furlough-pay-recalculation-historical-estimator"
labels:
  salary: "Pre-Furlough Baseline Gross Monthly Salary (£)"
  phase: "CJRS Scheme Phase Period"
  topup: "Employer Discretionary Salary Top-Up Rate (%)"
calcBadgesTitle: "CJRS Audit Standards"
taxYearBadge: "Historical Reference Rules"
taxYearBadgeDesc: "Calculates historical UK Coronavirus Job Retention Scheme (CJRS) grant parameters for employer audit compliance checks."
devolBadge: "UK Wide Application"
devolBadgeDesc: "Applies to historical CJRS claims filed by employers across England, Scotland, Wales, and Northern Ireland."
taperBadge: "£2,500 Monthly Grant Cap"
taperBadgeDesc: "Models the statutory £2,500/month maximum government grant cap and tapering government contribution percentages."
authoritiesTitle: "Reference Authorities"
auth1Name: "HM Revenue & Customs (HMRC)"
auth1Desc: "UK tax authority responsible for historical CJRS compliance audits, clawback assessments, and overpayment penalties."
auth1Link: "https://www.gov.uk/government/organisations/hm-revenue-customs"
auth2Name: "The National Audit Office (NAO)"
auth2Desc: "UK independent parliamentary body evaluating CJRS expenditure accuracy and fraud prevention measures."
auth2Link: "https://www.nao.org.uk"
sourcesTitle: "Official Sources"
source1: "HMRC Coronavirus Job Retention Scheme (CJRS) Technical Specifications & Treasury Directions"
lastUpdatedTitle: "Last Updated"
lastUpdatedDesc: "April 2026 — Verified with historical HMRC CJRS audit rules."
---

The **Coronavirus Job Retention Scheme (CJRS)**—commonly known as the **UK Furlough Scheme**—ran from March 2020 through September 2021 to support employers and preserve jobs during the COVID-19 pandemic.

Under CJRS rules, **HMRC** provided government grants to employers covering up to **80% of furloughed employees' usual gross wages** (subject to a statutory cap of **£2,500 per month**). Because HMRC continues to conduct retrospective **CJRS compliance audits** to identify overclaimed grants or payroll errors, calculating historical furlough grant parameters remains essential for payroll professionals, accountants, and legal advisers.

## ⚙️ Rules & Thresholds

- **CJRS Scheme Phases & Statutory Caps**:
  - **Phase 1 (March 2020 – August 2020)**: Government paid **80% of wages** up to a maximum cap of **£2,500 per month**. Employer paid £0 towards wages.
  - **Phase 2 (September 2020)**: Government paid **70% of wages** up to **£2,187.50 per month**. Employer was mandated to pay **10%** (£312.50 max) to ensure the employee received 80% (£2,500 max).
  - **Phase 3 (October 2020 & July 2021)**: Government paid **60% of wages** up to **£1,875.00 per month**. Employer was mandated to pay **20%** (£625 max) to maintain the 80% employee minimum.
- **Reference Pay Calculation Rules**: For salaried employees, baseline pay was calculated based on the last pay period prior to 19 March 2020 (or 30 October 2020 for later claims). For variable pay employees, baseline pay was the higher of the same month in the prior year or average monthly earnings in 2019/20.
- **Employer Pension & NI Contributions**: Initially covered by government grants in 2020, employer National Insurance and pension contributions became 100% employer-funded from August 2020 onwards.

## 📊 Practical Examples

<div class="example-box">
  <strong>Example 1: Employee with £2,800/month Pre-Furlough Salary Furloughed in Phase 1 (80% Grant Rate)</strong>
  <ul>
    <li>Pre-Furlough Baseline Monthly Salary: £2,800.00</li>
    <li>80% Uncapped Calculation: £2,800 × 80% = £2,240.00 / month</li>
    <li>Government Monthly Cap: £2,500.00 / month (Uncapped result £2,240 is below cap)</li>
    <li>Employer Top-Up: 0% (No optional top-up)</li>
  </ul>
  <p>Employee Gross Furlough Pay: **£2,240.00 / month**<br>HMRC Government Furlough Grant Share (80%): **£2,240.00 / month**<br>Employer Mandatory Wage Share: **£0.00 / month**.</p>
  <div class="net-highlight">Employee Pay: £2,240/mo | HMRC Grant Share: £2,240/mo | Employer Share: £0/mo</div>
</div>

## 📑 Common Pitfalls

- **Confusing Gross Employee Furlough Pay with Government Grant Share**: During later scheme phases (e.g. 60% government share), employers were required to top up 20% to ensure employees received their full 80% entitlement.
- **Errors in Variable Hours Calculation**: Miscalculating average monthly earnings for variable-rate workers was the single leading cause of HMRC CJRS audit overclaim notices.
- **Failing to Retain Audit Evidence**: Employers are required by HMRC to retain full CJRS calculation records, claim reference numbers, and employee agreement letters for at least 6 years.

---

## ❓ Frequently Asked Questions (FAQ)

<div class="faq-sec">
  <div class="faq-item">
    <button class="faq-trigger">What was the maximum monthly CJRS furlough grant paid by HMRC?</button>
    <div class="faq-content">
      <p>Under the UK CJRS furlough scheme, the maximum government grant paid to an employer was £2,500 per month per employee (representing 80% of a £3,125 gross monthly salary).</p>
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-trigger">Why does HMRC conduct retrospective CJRS furlough audits?</button>
    <div class="faq-content">
      <p>HMRC conducts retrospective audits to verify that employers correctly calculated baseline reference pay, applied statutory monthly caps, passed 100% of grant funds to employees, and did not claim grants for staff working illegally during full furlough.</p>
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-trigger">What happens if an HMRC CJRS audit reveals an overclaimed grant?</button>
    <div class="faq-content">
      <p>If an HMRC audit finds a CJRS overclaim, the employer must repay the overclaimed amount plus statutory late payment interest. Deliberate misclaims attract penalty fines up to 100% of the overclaimed grant.</p>
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-trigger">Were employees required to pay Income Tax on CJRS furlough pay?</button>
    <div class="faq-content">
      <p>Yes. Furlough pay received by employees was subject to standard UK Income Tax and employee National Insurance deductions through regular employer PAYE payroll.</p>
    </div>
  </div>
</div>
