// 장학생선발인원 및 장학금지급현황 <년도별>
// 재단사업 > 선발인원 및 지급 현황 탭의 표와, 메인 화면 팝업이 함께 쓴다.
// 행을 추가하면 팝업의 누적 수치도 자동으로 따라간다.

export interface AwardRow {
  date: string;
  count: string;
  countTotal: string;
  amount: string;
  amountTotal: string;
  note: string;
}

// 대괄호가 붙은 선발인원([39] 등)은 기존 장학생에게 이어서 지급한 인원이라 누계에 더하지 않는다.
export const awardRows: AwardRow[] = [
  { date: '2014. 02. 26 <제1기>', count: '39', countTotal: '39', amount: '117,000,000', amountTotal: '117,000,000', note: '고등학생' },
  { date: '2014. 02. 26 <제1기>', count: '40', countTotal: '79', amount: '160,000,000', amountTotal: '277,000,000', note: '대학생' },
  { date: '2014. 08. 26 <제1기>', count: '[39]', countTotal: '79', amount: '156,000,000', amountTotal: '433,000,000', note: '대학생' },
  { date: '2015. 02. 25 <제2기>', count: '69', countTotal: '148', amount: '276,000,000', amountTotal: '709,000,000', note: '대학생' },
  { date: '2015. 08. 26 <제2기>', count: '[68]', countTotal: '148', amount: '272,000,000', amountTotal: '981,000,000', note: '대학생' },
  { date: '2016. 02. 25 <제3기>', count: '60', countTotal: '208', amount: '240,000,000', amountTotal: '1,221,000,000', note: '대학생' },
  { date: '2016. 08. 24 <제3기>', count: '[55]', countTotal: '208', amount: '220,000,000', amountTotal: '1,441,000,000', note: '대학생' },
  { date: '2017. 02. 23 <제4기>', count: '50', countTotal: '258', amount: '200,000,000', amountTotal: '1,641,000,000', note: '대학생' },
  { date: '2017. 08. 23 <제4기>', count: '[49]', countTotal: '258', amount: '196,000,000', amountTotal: '1,837,000,000', note: '대학생' }
];

// 마지막 행의 누계가 곧 현재까지의 누적 수치다.
const lastRow = awardRows[awardRows.length - 1];

export const awardTotalCount = lastRow?.countTotal ?? '0';
export const awardTotalAmount = lastRow?.amountTotal ?? '0';
