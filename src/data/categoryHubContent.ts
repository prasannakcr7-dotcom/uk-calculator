export interface KeyFigure {
  term: string;
  value: string;
  note: string;
}

export interface FigureGroup {
  label: string;
  isHighlighted: boolean;
  items: KeyFigure[];
}

export interface Tip {
  icon: string;
  title: string;
  body: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Source {
  label: string;
  url: string;
}

export interface HubContent {
  introTitle: string;
  introHtml: string;
  tipsTitle: string;
  tips: Tip[];
  figuresTitle: string;
  figureGroups: FigureGroup[];
  faqTitle: string;
  faq: FAQItem[];
  sourcesTitle: string;
  sources: Source[];
}

export const categoryHubContent: Record<string, Record<string, HubContent>> = {
  work: {
    default: {
      introTitle: "Work & Salary in the UK (2026/27)",
      introHtml: `
        <p>Understanding your payroll deductions is critical for managing personal finance. In the UK, employees under PAYE (Pay As You Earn) see deductions for Income Tax, National Insurance (NI), and potentially Student Loans or workplace pensions. The <a class="il" href="/salary-income-tax-calculator/england/">Salary Take-Home Pay Calculator</a> helps you estimate your net earnings from your gross wages.</p>
        <p>Key 2026/27 rules: The standard UK personal allowance is <strong>£12,570</strong>, which is tax-free. Earnings above this are taxed at the basic rate (20%), higher rate (40%), or additional rate (45%), with allowance tapering starting at £100,000. National Insurance Class 1 employee contributions are 8% on earnings between £1,048 and £4,189 per month, and 2% above that.</p>
        <p>Devolved structures: Income tax bands are devolved in Scotland (using a 6-band system), while Wales holds rate-setting powers but currently aligns with England and Northern Ireland.</p>
      `,
      tipsTitle: "Common Mistakes & Tips",
      tips: [
        { icon: "📋", title: "Verify Your Tax Code", body: "An incorrect tax code (like an emergency code) can result in significant over-withholding. Check your tax code on your payslip against HMRC guidance." },
        { icon: "⏳", title: "Qualifying for Pension Match", body: "Workplace auto-enrolment requires a minimum 8% contribution (typically 5% employee, 3% employer). Maximize matching contributions if your employer offers them." }
      ],
      figuresTitle: "Key 2026/27 Figures",
      figureGroups: [
        {
          label: "Income Tax (England/Wales/NI)",
          isHighlighted: true,
          items: [
            { term: "Personal Allowance", value: "£12,570", note: "Tax-free" },
            { term: "Basic Rate (20%)", value: "£12,571 - £50,270", note: "Standard rate" },
            { term: "Higher Rate (40%)", value: "£50,271 - £125,140", note: "Higher rate band" },
            { term: "Additional Rate (45%)", value: "Above £125,140", note: "Top tax band" }
          ]
        },
        {
          label: "Employee National Insurance (Class 1)",
          isHighlighted: false,
          items: [
            { term: "Primary Threshold", value: "£242/week", note: "0% NI below" },
            { term: "Main Rate (8%)", value: "£242 - £967/week", note: "Standard rate" },
            { term: "Higher Rate (2%)", value: "Above £967/week", note: "Upper rate" }
          ]
        }
      ],
      faqTitle: "Frequently Asked Questions",
      faq: [
        { question: "How much net salary do I get from a £30,000 gross salary?", answer: "For a standard employee with tax code 1257L in England, a £30,000 gross salary yields approximately <strong>£24,300 net</strong> per year, after deducting income tax and National Insurance." },
        { question: "How does the personal allowance taper work?", answer: "Your personal allowance decreases by £1 for every £2 of adjusted net income over <strong>£100,000</strong>. This means the allowance is fully lost when income reaches £125,140." }
      ],
      sourcesTitle: "Sources & Legal Basis",
      sources: [
        { label: "HMRC — PAYE Tax Rates and Allowances", url: "https://www.gov.uk/income-tax-rates" },
        { label: "UK Legislation — National Insurance contributions", url: "https://www.gov.uk/national-insurance" }
      ]
    },
    scotland: {
      introTitle: "Work & Salary in Scotland (2026/27)",
      introHtml: `
        <p>Scotland operates a devolved income tax system with a 6-band progressive structure that differs significantly from England, Wales, and Northern Ireland. The <a class="il" href="/salary-income-tax-calculator/scotland/">Scotland Salary Calculator</a> applies these specific Scottish bands (Starter, Basic, Intermediate, Advanced, Higher, and Top) to compute your exact take-home pay.</p>
        <p>Key 2026/27 rules: While the Personal Allowance remains UK-wide at £12,570, Scottish tax rates range from 19% (Starter rate) up to 48% (Top rate). National Insurance rates remain aligned UK-wide (8% main rate, 2% upper rate).</p>
      `,
      tipsTitle: "Common Mistakes & Tips",
      tips: [
        { icon: "🏴\u200d󠁡󠁩󠁡󠁮\u200d󠁿", title: "Check for the 'S' Prefix", body: "If you reside in Scotland, your tax code must start with an 'S' (e.g. S1257L) to ensure your payroll uses the devolved Scottish tax rates." }
      ],
      figuresTitle: "Scottish Income Tax Bands 2026/27",
      figureGroups: [
        {
          label: "Scottish Income Tax Bands",
          isHighlighted: true,
          items: [
            { term: "Starter Rate (19%)", value: "£12,571 - £14,876", note: "Low earner starter band" },
            { term: "Basic Rate (20%)", value: "£14,877 - £26,561", note: "Standard basic band" },
            { term: "Intermediate Rate (21%)", value: "£26,562 - £44,260", note: "Middle earner band" },
            { term: "Advanced Rate (42%)", value: "£44,261 - £75,000", note: "Advanced band" },
            { term: "Higher Rate (45%)", value: "£75,001 - £125,140", note: "Higher rate band" },
            { term: "Top Rate (48%)", value: "Above £125,140", note: "Max Scottish tax band" }
          ]
        }
      ],
      faqTitle: "Frequently Asked Questions",
      faq: [
        { question: "Why do I pay more income tax in Scotland?", answer: "Scotland has a more progressive tax system. While low earners pay slightly less due to the 19% Starter rate, earnings above £28,850 are taxed higher than the equivalent UK basic rate, and the 42% Advanced rate starts at £44,260." }
      ],
      sourcesTitle: "Sources & Legal Basis",
      sources: [
        { label: "Scottish Government — Income Tax Rates", url: "https://www.gov.scot/policies/taxes/" },
        { label: "Revenue Scotland — Devolved Taxation Guidance", url: "https://www.revenue.scot" }
      ]
    }
  },
  taxes: {
    default: {
      introTitle: "Taxes & Duties in the UK (2026/27)",
      introHtml: `
        <p>The UK tax system is administered by HM Revenue and Customs (HMRC). Taxes include Income Tax, Council Tax, Value Added Tax (VAT) on goods and services, Capital Gains Tax, and Stamp Duty Land Tax (SDLT) on property purchases. Use our directory to access HMRC and devolved calculations.</p>
        <p>Key rates: Standard VAT is 20% (standard rate, 5% reduced rate, and 0% zero rate). Capital Gains Tax rates vary between basic rate and higher rate taxpayers, with higher rates applicable to residential property sales.</p>
      `,
      tipsTitle: "Tax Tips & Reminders",
      tips: [
        { icon: "📦", title: "VAT Registration Limit", body: "If your taxable turnover exceeds £90,000 in a rolling 12-month period, you must register for VAT." }
      ],
      figuresTitle: "Tax Thresholds 2026/27",
      figureGroups: [
        {
          label: "VAT Rates",
          isHighlighted: true,
          items: [
            { term: "Standard Rate", value: "20%", note: "Most goods & services" },
            { term: "Reduced Rate", value: "5%", note: "Home energy, child seats" },
            { term: "Zero Rate", value: "0%", note: "Books, food, kids clothing" }
          ]
        }
      ],
      faqTitle: "Frequently Asked Questions",
      faq: [
        { question: "What is the standard VAT rate in the UK?", answer: "The standard VAT rate is <strong>20%</strong>. A reduced rate of 5% applies to specific items like domestic fuel and electricity, and 0% applies to essential goods." }
      ],
      sourcesTitle: "Sources & Legal Basis",
      sources: [
        { label: "HMRC — VAT Rates and Thresholds", url: "https://www.gov.uk/vat-rates" }
      ]
    }
  },
  family: {
    default: {
      introTitle: "Family & Child Support in the UK (2026/27)",
      introHtml: `
        <p>The UK provides various social security and financial support options for parents and families, including Child Benefit, Statutory Maternity/Paternity Pay, and childcare assistance. Free hours systems are devolved across the UK nations.</p>
      `,
      tipsTitle: "Important Family Tips",
      tips: [
        { icon: "👼", title: "High Income Child Benefit Charge", body: "If you earn over £60,000, you must pay a tax charge on any Child Benefit claimed, up to a full clawback at £80,000." }
      ],
      figuresTitle: "Child Support Rates 2026/27",
      figureGroups: [
        {
          label: "Child Benefit Rates",
          isHighlighted: true,
          items: [
            { term: "Eldest / Only Child", value: "£25.60/week", note: "Standard rate" },
            { term: "Additional Children", value: "£16.95/week", note: "Per additional child" }
          ]
        }
      ],
      faqTitle: "Frequently Asked Questions",
      faq: [
        { question: "What is the High Income Child Benefit Charge threshold?", answer: "The threshold starts at <strong>£60,000</strong>. Between £60,000 and £80,000, you pay a progressive tax charge to repay a percentage of the benefit." }
      ],
      sourcesTitle: "Sources & Legal Basis",
      sources: [
        { label: "GOV.UK — Child Benefit Information", url: "https://www.gov.uk/child-benefit" }
      ]
    }
  },
  housing: {
    default: {
      introTitle: "Housing & Property Transactions in the UK",
      introHtml: `
        <p>Property transaction taxes are devolved in the UK. England & NI use Stamp Duty Land Tax (SDLT), Scotland uses Land and Buildings Transaction Tax (LBTT), and Wales uses Land Transaction Tax (LTT). Energy efficiency and landlord regulations also vary between nations.</p>
      `,
      tipsTitle: "Housing Tips",
      tips: [
        { icon: "🔑", title: "Tenancy Deposit Scheme", body: "Landlords must deposit tenant bonds into a government-approved tenancy deposit scheme (TDS) within 30 days of receipt." }
      ],
      figuresTitle: "Stamp Duty (England/NI) 2026/27",
      figureGroups: [
        {
          label: "SDLT Residential Rates",
          isHighlighted: true,
          items: [
            { term: "Up to £250,000", value: "0%", note: "Standard threshold" },
            { term: "£250,001 - £925,000", value: "5%", note: "Mid band" },
            { term: "£925,001 - £1.5 million", value: "10%", note: "High band" },
            { term: "Above £1.5 million", value: "12%", note: "Max rate" }
          ]
        }
      ],
      faqTitle: "Frequently Asked Questions",
      faq: [
        { question: "How much is Stamp Duty for first-time buyers?", answer: "In England and NI, first-time buyers get relief and pay 0% SDLT on purchases up to <strong>£425,000</strong>, with discounted rates on property up to £625,000." }
      ],
      sourcesTitle: "Sources & Legal Basis",
      sources: [
        { label: "HMRC — Stamp Duty Land Tax Guidance", url: "https://www.gov.uk/stamp-duty-land-tax" }
      ]
    }
  },
  mobility: {
    default: {
      introTitle: "Car & Mobility Regulations (2026/27)",
      introHtml: `
        <p>Vehicular taxes, fuel duties, business mileage claims, and traffic fines are enforced by local councils, court systems, and the DVLA. Some traffic frameworks differ, such as lower BAC drink-driving limits in Scotland.</p>
      `,
      tipsTitle: "Mileage Claims Tip",
      tips: [
        { icon: "🚗", title: "HMRC Approved Mileage Rates", body: "For business use of a personal car, you can claim 45p per mile up to 10,000 miles per year, and 25p per mile thereafter tax-free." }
      ],
      figuresTitle: "Approved Mileage Allowance Payments",
      figureGroups: [
        {
          label: "HMRC Approved Rates",
          isHighlighted: true,
          items: [
            { term: "First 10,000 miles", value: "45p / mile", note: "For cars & vans" },
            { term: "Over 10,000 miles", value: "25p / mile", note: "For cars & vans" }
          ]
        }
      ],
      faqTitle: "Frequently Asked Questions",
      faq: [
        { question: "What is the drink-driving limit in the UK?", answer: "In England, Wales, and NI, the limit is <strong>80mg of alcohol per 100ml of blood</strong>. In Scotland, the limit is lower at <strong>50mg per 100ml</strong>." }
      ],
      sourcesTitle: "Sources & Legal Basis",
      sources: [
        { label: "GOV.UK — Travel and Mileage Rates", url: "https://www.gov.uk/government/publications/rates-and-allowances-travel-after-tax" }
      ]
    }
  },
  health: {
    default: {
      introTitle: "Health Services & Social Care in the UK",
      introHtml: `
        <p>Health and social care are devolved in the UK. Prescription costs are free to all in Scotland, Wales, and Northern Ireland, while residents of England pay a flat charge unless they qualify for age or income exemptions.</p>
      `,
      tipsTitle: "Prescription Savings",
      tips: [
        { icon: "🩺", title: "Get a PPC (Prescription Prepayment Certificate)", body: "If you reside in England and pay for more than 3 prescriptions in 3 months (or 11 in a year), purchasing a PPC will save you money." }
      ],
      figuresTitle: "NHS Charges (England) 2026/27",
      figureGroups: [
        {
          label: "English Prescription Rates",
          isHighlighted: true,
          items: [
            { term: "Single Item Charge", value: "£9.90", note: "Standard charge" },
            { term: "3-Month PPC", value: "£32.05", note: "Unlimited items" },
            { term: "12-Month PPC", value: "£114.50", note: "Unlimited items" }
          ]
        }
      ],
      faqTitle: "Frequently Asked Questions",
      faq: [
        { question: "Are prescriptions free in Scotland, Wales, and NI?", answer: "Yes, prescriptions are <strong>100% free</strong> for all residents of Scotland, Wales, and Northern Ireland. Charges are only active in England." }
      ],
      sourcesTitle: "Sources & Legal Basis",
      sources: [
        { label: "NHS Business Services Authority — Prescription Charges", url: "https://www.nhsbsa.nhs.uk" }
      ]
    }
  },
  social: {
    default: {
      introTitle: "Benefits & Pensions in the UK",
      introHtml: `
        <p>DWP (Department for Work and Pensions) manages benefits and state pensions across the UK. Key offerings include Universal Credit, Jobseeker's Allowance, Personal Independence Payment (PIP), and the State Pension forecast.</p>
      `,
      tipsTitle: "Pension Qualifying Years",
      tips: [
        { icon: "👵", title: "Check State Pension Credits", body: "You must have at least 10 qualifying years of National Insurance contributions to receive any state pension, and 35 years to receive the full new State Pension." }
      ],
      figuresTitle: "State Pension Rates 2026/27",
      figureGroups: [
        {
          label: "New State Pension",
          isHighlighted: true,
          items: [
            { term: "Full Weekly Amount", value: "£221.20", note: "Subject to triple-lock indexation" },
            { term: "Minimum NI Years", value: "10 years", note: "Required to receive anything" },
            { term: "Full NI Years", value: "35 years", note: "Required for max amount" }
          ]
        }
      ],
      faqTitle: "Frequently Asked Questions",
      faq: [
        { question: "What is the retirement age for the UK State Pension?", answer: "The current State Pension age is <strong>66</strong>. It is scheduled to increase gradually to 67 between 2026 and 2028." }
      ],
      sourcesTitle: "Sources & Legal Basis",
      sources: [
        { label: "DWP — State Pension Guidance", url: "https://www.gov.uk/state-pension" }
      ]
    }
  },
  finance: {
    default: {
      introTitle: "Finance & Savings in the UK",
      introHtml: `
        <p>Manage private savings tax-efficiently using Individual Savings Accounts (ISAs) or Self-Invested Personal Pensions (SIPPs). Compound interest and debt solutions are governed by UK-wide financial authorities.</p>
      `,
      tipsTitle: "Savings Reminders",
      tips: [
        { icon: "📈", title: "Maximize ISA Allowances", body: "You can save up to £20,000 per tax year tax-free across cash, stocks & shares, or lifetime ISAs." }
      ],
      figuresTitle: "ISA Allowances 2026/27",
      figureGroups: [
        {
          label: "Tax-Free Savings Limits",
          isHighlighted: true,
          items: [
            { term: "Annual ISA Limit", value: "£20,000", note: "Combined limit across all ISAs" },
            { term: "Lifetime ISA (LISA) Limit", value: "£4,000/year", note: "Eligible for 25% govt bonus" }
          ]
        }
      ],
      faqTitle: "Frequently Asked Questions",
      faq: [
        { question: "What is the SIPP contribution limit?", answer: "You can receive tax relief on contributions up to 100% of your earnings, capped at an annual allowance of <strong>£60,000</strong>." }
      ],
      sourcesTitle: "Sources & Legal Basis",
      sources: [
        { label: "HMRC — Pension and ISA Allowances", url: "https://www.gov.uk/individual-savings-accounts" }
      ]
    }
  },
  alltag: {
    default: {
      introTitle: "Everyday Calculators (2026/27)",
      introHtml: `
        <p>Everyday calculators provide tools for general mathematics, school admissions, UCAS points, inflation tracking, daily calendar tools, and time conversion.</p>
      `,
      tipsTitle: "Everyday Tip",
      tips: [
        { icon: "💡", title: "Calculate UCAS points early", body: "Ensure you check how your qualifications (A-Levels, Highers, BTECs) translate to UCAS tariff points ahead of university applications." }
      ],
      figuresTitle: "UCAS Tariff Points (Typical A-Levels)",
      figureGroups: [
        {
          label: "A-Level Grades to UCAS Points",
          isHighlighted: true,
          items: [
            { term: "Grade A*", value: "56 points", note: "Max points per subject" },
            { term: "Grade A", value: "48 points", note: "" }
          ]
        }
      ],
      faqTitle: "Frequently Asked Questions",
      faq: [
        { question: "What is a UCAS points converter?", answer: "It is a tool that converts your academic qualifications (such as A-levels, BTECs, or Scottish Highers) into a standardized score used by UK universities for admissions." }
      ],
      sourcesTitle: "Sources & Legal Basis",
      sources: [
        { label: "UCAS — Tariff Tables", url: "https://www.ucas.com" }
      ]
    }
  }
};
