import { useEffect, useState } from 'react';

import {
  HOME_NOTICE_BAR_ROLLING_INTERVAL_MS,
  HOME_NOTICE_BAR_ROLLING_RESET_DELAY_MS,
} from '../constants/home-notice-bar';

type UseHomeNoticeRollingReturn = {
  noticeIndex: number;
  isTransitionEnabled: boolean;
};

export const useHomeNoticeRolling = (
  noticeCount: number,
): UseHomeNoticeRollingReturn => {
  const [noticeIndex, setNoticeIndex] = useState(0);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const normalizedNoticeIndex =
    noticeCount > 0 ? Math.min(noticeIndex, noticeCount) : 0;

  useEffect(() => {
    if (noticeCount <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setIsTransitionEnabled(true);
      setNoticeIndex((prevIndex) => prevIndex + 1);
    }, HOME_NOTICE_BAR_ROLLING_INTERVAL_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [noticeCount]);

  useEffect(() => {
    if (noticeIndex < noticeCount || noticeCount <= 1) {
      return;
    }

    const timeoutId = window.setTimeout(
      () => {
        setIsTransitionEnabled(false);
        setNoticeIndex(0);
      },
      noticeIndex === noticeCount ? HOME_NOTICE_BAR_ROLLING_RESET_DELAY_MS : 0,
    );

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [noticeIndex, noticeCount]);

  return { noticeIndex: normalizedNoticeIndex, isTransitionEnabled };
};
