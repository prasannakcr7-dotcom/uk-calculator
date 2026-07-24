---
title: "Timesheet Hours Worked Calculator — Paid Hours & Breaks"
description: "Calculate total paid working hours and decimal hours from start times, end times, and unpaid meal breaks."
category: "trabajo"
lang: "en"
isDevolved: false
translationUrl: "/timesheet-hours-worked-calculator/"
labels:
  inputTitle: "Timesheet Shift Details"
  startTimeLabel: "Shift Start Time (HH:MM)"
  endTimeLabel: "Shift End Time (HH:MM)"
  breakMinutesLabel: "Unpaid Break Duration (Minutes)"
  resultLabel: "Total Paid Working Hours"
  decimalHoursLabel: "Decimal Hours Format:"
  breakdownTitle: "Timesheet Breakdown"
calcBadgesTitle: "Timesheet Assurances"
taxYearBadge: "Decimal Conversion"
taxYearBadgeDesc: "Converts hours and minutes cleanly into decimal hours (e.g. 7h 30m = 7.50 hours) for payroll software."
devolBadge: "20-Min Rest Break"
devolBadgeDesc: "Checks statutory Working Time Directive right to a 20-minute rest break for shifts over 6 hours."
taperBadge: "Overtime Threshold"
taperBadgeDesc: "Tracks weekly cumulative hours against full-time 37.5 hour overtime thresholds."
authoritiesTitle: "Reference Authorities"
auth1Name: "Department for Business & Trade (DBT)"
auth1Desc: "The UK government department establishing Working Time Regulations rest break rights."
auth1Link: "https://www.gov.uk/rest-breaks-at-work"
auth2Name: "ACAS Working Hours & Rest Breaks Guide"
auth2Desc: "Official guidance detailing shift patterns, rest periods between shifts, and paid vs. unpaid breaks."
auth2Link: "https://www.acas.org.uk/rest-breaks"
sourcesTitle: "Official Sources"
source1: "Working Time Regulations 1998 (Regulation 12) (legislation.gov.uk) →"
lastUpdatedTitle: "Updated for 2026/27:"
lastUpdatedDesc: "Aligned with current UK statutory rest break rules."
---

Accurately recording working hours on daily timesheets ensures employees are paid correctly for all hours worked and employers remain compliant with payroll regulations.

Converting hours and minutes into **decimal hours** is standard practice across modern payroll systems like Xero, Sage, and QuickBooks.

## ⚙️ Statutory Rest Break Rules & Decimal Conversion Math

### 1. Statutory Rest Breaks under Working Time Regulations
Under **Regulation 12 of the Working Time Regulations 1998**:
- **Shifts Over 6 Hours**: Workers have the statutory right to at least **one uninterrupted 20-minute rest break** during the working day.
- **Paid vs Unpaid Breaks**: Employer contracts dictate whether rest breaks are paid or unpaid. Meal/lunch breaks are almost universally unpaid unless specified otherwise in your employment handbook.

### 2. Hours & Minutes to Decimal Hours Conversion
Payroll software processes wages by multiplying hourly rates by **decimal hours**:
- **15 Minutes**: 15 / 60 = **0.25 Hours**
- **30 Minutes**: 30 / 60 = **0.50 Hours**
- **45 Minutes**: 45 / 60 = **0.75 Hours**
- **Formula**: `Paid Hours = (End Time - Start Time - Unpaid Break) in Decimal`

---

## 📊 Practical Timesheet Worked Examples

Below are two worked calculation examples illustrating shift hour calculations:

<div class="example-box">
  <strong>Example 1: Shift 08:30 to 17:00 with a 30-minute unpaid lunch break</strong>
  <ul>
    <li>Total Elapsed Time (08:30 to 17:00): **8 Hours 30 Minutes**</li>
    <li>Unpaid Lunch Break: **30 Minutes (0.50 hours)**</li>
    <li>Net Paid Working Time: 8.50 - 0.50 = **8.00 Hours**</li>
  </ul>
  <p>Calculation: 8.00 hours × £15.00/hr = £120.00 gross daily pay.</p>
  <div class="net-highlight">Total Net Paid Working Hours: **8.00 Hours (8h 00m)**</div>
</div>

<div class="example-box">
  <strong>Example 2: Shift 09:00 to 17:15 with a 45-minute unpaid lunch break</strong>
  <ul>
    <li>Total Elapsed Time (09:00 to 17:15): **8 Hours 15 Minutes (8.25 hours)**</li>
    <li>Unpaid Lunch Break: **45 Minutes (0.75 hours)**</li>
    <li>Net Paid Working Time: 8.25 - 0.75 = **7.50 Hours**</li>
  </ul>
  <p>Calculation: 7.50 hours × £16.00/hr = £120.00 gross daily pay.</p>
  <div class="net-highlight">Total Net Paid Working Hours: **7.50 Hours (7h 30m)**</div>
</div>

---

## 📑 Common Pitfalls & Timesheet Errors

1. **Confusing Minutes with Decimals (The .30 vs .50 Error)**: Entering 7 hours and 30 minutes into payroll as `7.30` instead of `7.50` results in underpaying the employee by 12 minutes (0.20 hours) per shift!
2. **Forgetting Night Shift Midnight Crossovers**: Shifts starting in the evening (e.g. 22:00) and ending the following morning (e.g. 06:00) cross midnight. Timesheet software must add 24 hours to the end time to calculate 8 elapsed hours correctly.
3. **Failing to Track Daily 11-Hour Rest Periods**: Workers are entitled to a minimum of **11 consecutive hours of daily rest** between ending one work shift and starting the next.

---

## ❓ Frequently Asked Questions (FAQ)

<div class="faq-sec">
  <div class="faq-item">
    <button class="faq-trigger">Are tea breaks required to be paid under UK employment law? <span class="icon">▼</span></button>
    <div class="faq-content">
      <p>Whether short tea breaks (e.g. 10 or 15 minutes) are paid depends entirely on your employer's contract terms. There is no statutory requirement for short tea breaks to be paid, though many employers do pay for short comfort breaks.</p>
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-trigger">How do I convert 45 minutes into a payroll decimal? <span class="icon">▼</span></button>
    <div class="faq-content">
      <p>Divide the number of minutes by 60. For 45 minutes: 45 ÷ 60 = 0.75. So 7 hours and 45 minutes equals 7.75 decimal hours.</p>
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-trigger">What is the weekly rest break entitlement for UK workers? <span class="icon">▼</span></button>
    <div class="faq-content">
      <p>Workers have the statutory right to an uninterrupted 24-hour rest period without work each week, or a 48-hour uninterrupted rest period every fortnight.</p>
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-trigger">Can an employer deduct breaks automatically if an employee worked through them? <span class="icon">▼</span></button>
    <div class="faq-content">
      <p>If an employee was required to work through their lunch break due to business operational needs, the employer must pay for those working hours so that average pay does not fall below National Minimum Wage.</p>
    </div>
  </div>
</div>
