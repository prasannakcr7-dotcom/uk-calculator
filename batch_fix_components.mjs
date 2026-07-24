import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compDir = path.join(__dirname, 'src/components');

const affectedFiles = [
  "AgeCalculator.astro",
  "ArmedForcesPensionSchemeCalculator.astro",
  "BankOverdraftCostCalculator.astro",
  "BirthdayDayOfWeekStarSignFinderCalculator.astro",
  "BitcoinInGbpExchangeCalculator.astro",
  "BmiBmrCalorieCalculator.astro",
  "BodyFatPercentageEstimator.astro",
  "BudgetCalculator503020Rule.astro",
  "BusinessValuationCalculator.astro",
  "BuyToLetStampDutySurchargeCalculator.astro",
  "CapitalGainsTaxOnSharesCalculator.astro",
  "CapitalRepaymentMortgageCalculator.astro",
  "CarDepreciationEstimator.astro",
  "CarLeasingVsPcpFinanceComparisonCalculator.astro",
  "ChildcareVouchersVsTaxFreeChildcareCalculator.astro",
  "CommercialLeaseServiceChargeSquareFootageCalculator.astro",
  "CompanyCarTaxBikCalculator.astro",
  "CompoundInterestCalculator.astro",
  "CryptoTaxCalculatorHmrcRules.astro",
  "CurrencyConverter.astro",
  "DailyWaterHydrationIntakeCalculator.astro",
  "DateDurationDayCounterCalculator.astro",
  "DegreeClassificationBoundaryEstimator.astro",
  "DiscountSaleSavingsCalculator.astro",
  "DividendTaxCalculator.astro",
  "EarlyPaymentDiscountCalculator.astro",
  "ElectricityCostApplianceRunningCostCalculator.astro",
  "ElectricVehicleEvChargingCostRangeCalculator.astro",
  "FirefightersPensionSchemeUkCalculator.astro",
  "FixedMortgageRateTermComparatorCalculator.astro",
  "FlightTimeTimeDifferenceCalculator.astro",
  "ForwardMortgageRateLockEstimator.astro",
  "FuelCostJourneyMileageCalculator.astro",
  "FurloughPayRecalculationHistoricalEstimator.astro",
  "HelpToSaveSchemeCalculator.astro",
  "HmrcLateTaxPaymentPenaltyInterestCalculator.astro",
  "HmrcPaymentOnAccountTaxBillCalculator.astro",
  "HomeEnergyEfficiencyGrantsCalculator.astro",
  "HowMuchHouseCanIAffordCalculator.astro",
  "IdealBodyWeightPredictor.astro",
  "ImperialToMetricUnitConverter.astro",
  "ImportDutyVatCalculator.astro",
  "IndexFundEtfInvestmentCalculator.astro",
  "InflationPurchasingPowerCalculator.astro",
  "LifetimeIsaFirstHomeCalculator.astro",
  "LimitedCompanySetupCostsCalculator.astro",
  "LtvLoanToValueBracketCalculator.astro",
  "MortgageDelayOfferValidityEstimator.astro",
  "MortgageOutstandingBalanceEstimator.astro",
  "MortgageOverpaymentSavingsCalculator.astro",
  "MortgageStressTestAffordabilityCalculator.astro",
  "MotCostRepairBudgetCalculator.astro",
  "NorthernIrelandDogLicenceCostCalculator.astro",
  "NorthernIrelandRatesDomesticRatingPropertyTaxCalculator.astro",
  "P11dBenefitInKindBiKTaxCalculator.astro",
  "PaypalUkFeesCalculator.astro",
  "PensionDrawdownCapitalDepletionCalculator.astro",
  "PercentageCalculator.astro",
  "PersonalLoanCalculator.astro",
  "PolicePensionSchemeUkCalculator.astro",
  "ProfitMarginMarkupCalculator.astro",
  "RemortgageProductTransferCalculator.astro",
  "RepaymentVsInterestOnlyMortgageComparisonCalculator.astro",
  "RightToBuyCouncilHouseDiscountCalculator.astro",
  "RoiReturnOnInvestmentCalculator.astro",
  "RoiRoiPACalculator.astro",
  "RuleOfThreeDreisatzMathCalculator.astro",
  "RunningPaceRaceTimePredictor.astro",
  "SavingsTargetGrowthCalculator.astro",
  "ScaleModelMapConverter.astro",
  "ScottishCouncilTaxBandsMultiplierCalculator.astro",
  "ScottishHighersToUcasTariffPointsConverter.astro",
  "ScottishLandAndBuildingsTransactionTaxLbttCalculator.astro",
  "ScottishSelfEmployedIncomeTaxVsRestOfUkCalculator.astro",
  "SelfEmployedClass2Class4NationalInsuranceCalculator.astro",
  "SelfInvestedPersonalPensionSippCalculator.astro",
  "SharedOwnershipRentAndServiceChargeCalculator.astro",
  "SmallBusinessVatFlatRateSchemeVsStandardCalculator.astro",
  "SocialSecurityScotlandCarersAllowanceSupplementCalculator.astro",
  "SoleTraderTaxReserveBudgetCalculator.astro",
  "SoleTraderVsLtdCompanyRegistrationFeesCalculator.astro",
  "SolicitorFeesEstimator.astro",
  "SortCodeAccountNumberToIbanConverter.astro",
  "StatutoryLatePaymentInterestCalculator.astro",
  "StatutoryMaternityPaySmpEligibilityCalculator.astro",
  "StatutoryRedundancyPaymentCalculator.astro",
  "StudentGradePointAverageGpaPercentageConverter.astro",
  "StudentMaintenanceGrantLoanEligibilityCalculator.astro",
  "TeachersPensionSchemeUkCalculator.astro",
  "TimeZoneCalculator.astro",
  "TippingServiceChargeCalculator.astro",
  "TuitionFeeLoanInterestCompoundingEstimator.astro",
  "UnfairDismissalEmploymentTribunalCompensationCalculator.astro",
  "UniversalCreditScottishWorkAllowanceCalculator.astro",
  "UniversitiesCollegesAdmissionsServiceUcasPointsCalculator.astro",
  "UsedCarInspectionBudgetCalculator.astro",
  "VehicleStatutoryOffRoadNotificationSornEstimator.astro",
  "WeddingBudgetPlanner.astro",
  "WelshLandTransactionTaxLttCalculator.astro"
];

let updatedCount = 0;

affectedFiles.forEach(file => {
  const filePath = path.join(compDir, file);
  if (!fs.existsSync(filePath)) return;

  let code = fs.readFileSync(filePath, 'utf8');

  // Ensure Sidebar import
  if (!code.includes("import Sidebar from './Sidebar.astro'")) {
    code = code.replace(/^(---\r?\n)/, `$1import Sidebar from './Sidebar.astro';\n`);
  }

  const parts = code.split('---');
  if (parts.length < 3) return;

  const frontmatter = parts.slice(0, 2).join('---') + '---';
  let body = parts.slice(2).join('---');

  // Strip scoped style blocks
  body = body.replace(/<style>[\s\S]*?<\/style>/gi, '');

  // Strip duplicate h2 title if present
  body = body.replace(/<h[23][^>]*>(.*?)<\/h[23]>\s*(<p[^>]*>.*?<\/p>)?/i, (match, title) => {
    if (title.toLowerCase().includes('calculator') || title.toLowerCase().includes('pay') || title.toLowerCase().includes('tax') || title.toLowerCase().includes('allowance') || title.toLowerCase().includes('pension')) {
      return '';
    }
    return match;
  });

  // Map legacy inner class names
  body = body.replace(/class=["']calculator-container["']/gi, '');
  body = body.replace(/class=["']calculator-card["']/gi, 'class="card"');
  body = body.replace(/class=["']input-group["']/gi, 'class="field-group"');
  body = body.replace(/<label\s+for="([^"]+)">([^<]+)<\/label>/gi, '<div class="field-label"><span>$2</span></div>');
  body = body.replace(/class=["'](results-card|results-box)["']/gi, 'class="card breakdown-card"');
  body = body.replace(/class=["']result-item highlight["']/gi, 'class="breakdown-row net"');
  body = body.replace(/class=["']result-item["']/gi, 'class="breakdown-row"');
  body = body.replace(/<button[^>]*class=["']calc-button["'][^>]*>.*?<\/button>/gi, '');

  // Wrap inputs in amount-field if inside field-group and not wrapped
  body = body.replace(/(<div class="field-group">[\s\S]*?<div class="field-label">[\s\S]*?<\/div>\s*)(<input[^>]*type=["'](number|text)["'][^>]*>)/gi, (match, prefix, inputStr) => {
    if (!prefix.includes('amount-field')) {
      return `${prefix}<div class="amount-field">${inputStr}</div>`;
    }
    return match;
  });

  // Extract <slot /> tag
  let hasSlot = false;
  if (body.includes('<slot')) {
    hasSlot = true;
    body = body.replace(/<slot\s*\/?>/gi, '');
  }

  // Wrap inside standard 2-column layout grid if not present
  if (!body.includes('class="layout calculator-layout')) {
    body = `
<div class="layout calculator-layout work-category">
  <div class="main-col">
    ${body.trim()}
    <slot />
  </div>
  <div class="side-col">
    <Sidebar />
  </div>
</div>
`;
  } else {
    // If layout wrapper already exists, ensure <slot /> is at the end of main-col
    if (hasSlot && body.includes('<div class="main-col">')) {
      body = body.replace(/(<\/div>\s*<div class="side-col">)/i, `  <slot />\n  </div>\n  <div class="side-col">`);
    }
  }

  fs.writeFileSync(filePath, frontmatter + body, 'utf8');
  updatedCount++;
});

console.log(`Successfully refactored ${updatedCount} affected calculator components.`);
