export const NOTICE_TYPE_LABEL: Record<string, string> = {
  SYSTEM: '시스템',
  EVENT: '이벤트',
  STORE: '스토어',
  SERVICE: '서비스',
};

export const HOME_NOTICE_BAR_ROLLING_INTERVAL_MS = 3000;
export const HOME_NOTICE_BAR_ROLLING_TRANSITION_DURATION_MS = 500;
export const HOME_NOTICE_BAR_ROLLING_RESET_DELAY_MS =
  HOME_NOTICE_BAR_ROLLING_TRANSITION_DURATION_MS;
export const HOME_NOTICE_BAR_ROLLING_TRANSITION_CLASS =
  'transition-transform duration-500 ease-out';
export const HOME_NOTICE_BAR_ITEM_HEIGHT_REM = 6;
export const HOME_NOTICE_BAR_ITEM_HEIGHT_CLASS = 'h-[6rem]';
