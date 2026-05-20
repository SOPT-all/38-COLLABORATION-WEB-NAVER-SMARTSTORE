export const NOTICE_TYPE_LABEL: Record<string, string> = {
  GENERAL: '일반',
  SYSTEM: '시스템',
  SAFE_TRADE: '안전거래',
  SELLING_TIP: '판매팁',
  D_COMMERCE: 'D-커머스',
  HAZARD_INFO: '위해정보',
  MANUAL: '매뉴얼',
};

export const HOME_NOTICE_BAR_ROLLING_INTERVAL_MS = 3000;
export const HOME_NOTICE_BAR_ROLLING_TRANSITION_DURATION_MS = 500;
export const HOME_NOTICE_BAR_ROLLING_RESET_DELAY_MS =
  HOME_NOTICE_BAR_ROLLING_TRANSITION_DURATION_MS;
export const HOME_NOTICE_BAR_ROLLING_TRANSITION_CLASS =
  'transition-transform duration-500 ease-out';
export const HOME_NOTICE_BAR_ITEM_HEIGHT_REM = 6;
export const HOME_NOTICE_BAR_ITEM_HEIGHT_CLASS = 'h-[6rem]';
