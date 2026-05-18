import { useMemo } from 'react';
import { IcArrowDown, IcArrowRight } from '@shared/assets/icons';
import { cn } from '@shared/utils/cn';

import {
  HOME_NOTICE_BAR_ITEM_HEIGHT_CLASS,
  HOME_NOTICE_BAR_ITEM_HEIGHT_REM,
  HOME_NOTICE_BAR_ROLLING_TRANSITION_CLASS,
  NOTICE_TYPE_LABEL,
} from '../constants/home-notice-bar';
import { useHomeNoticeRolling } from '../hooks/use-home-notice-rolling';
import { formatNoticeDate } from '../utils/format-notice-date';
import { getRollingNotices } from '../utils/get-rolling-notices';

export type HomeNotice = {
  id: number;
  noticeType: string;
  title: string;
  createdAt: string;
};

type HomeNoticeBarProps = {
  notices: HomeNotice[];
};

const HomeNoticeItem = ({ notice }: { notice: HomeNotice }) => {
  const noticeTypeLabel =
    NOTICE_TYPE_LABEL[notice.noticeType] ?? notice.noticeType;
  const noticeDate = formatNoticeDate(notice.createdAt);

  return (
    <div
      className={cn(
        'flex flex-1 items-center gap-[1.2rem]',
        HOME_NOTICE_BAR_ITEM_HEIGHT_CLASS,
      )}
    >
      <span className='body-md-12 flex shrink-0 items-center justify-center gap-[1rem] bg-blue-100 px-[0.8rem] text-blue-500'>
        {noticeTypeLabel}
      </span>
      <strong className='body-md-14 truncate text-black'>{notice.title}</strong>
      {noticeDate && (
        <time
          className='body-md-13-0 text-gray shrink-0'
          dateTime={notice.createdAt}
        >
          {noticeDate}
        </time>
      )}
    </div>
  );
};

const ExpandLabel = ({ children }: { children: string }) => {
  return (
    <div className='body-md-12 text-gray flex shrink-0 items-center gap-0'>
      {children}
      <IcArrowDown aria-hidden='true' className='text-gray -ml-[0.4rem]' />
    </div>
  );
};

const HomeNoticeBar = ({ notices }: HomeNoticeBarProps) => {
  const { noticeIndex, isTransitionEnabled } = useHomeNoticeRolling(
    notices.length,
  );
  const firstNotice = notices[0];
  const rollingNotices = useMemo(() => getRollingNotices(notices), [notices]);

  if (!firstNotice) {
    return null;
  }

  return (
    <section className='flex w-full items-stretch' aria-label='공지사항'>
      <div
        className='text-gray flex shrink-0 items-center border border-gray-200 bg-gray-100 px-[0.05rem] py-[1.7rem]'
        aria-hidden='true'
      >
        <IcArrowRight
          aria-hidden='true'
          className='text-gray size-[2.4rem] rotate-180'
        />
      </div>

      <div
        className={cn(
          'flex w-full items-center justify-between border border-gray-100 bg-white px-[1.6rem]',
          HOME_NOTICE_BAR_ITEM_HEIGHT_CLASS,
        )}
      >
        <div
          className={cn(
            'flex-1 overflow-hidden',
            HOME_NOTICE_BAR_ITEM_HEIGHT_CLASS,
          )}
          aria-live='polite'
        >
          <div
            className={cn(
              'flex flex-col',
              isTransitionEnabled && HOME_NOTICE_BAR_ROLLING_TRANSITION_CLASS,
            )}
            style={{
              transform: `translateY(-${
                noticeIndex * HOME_NOTICE_BAR_ITEM_HEIGHT_REM
              }rem)`,
            }}
          >
            {rollingNotices.map((notice, index) => (
              <div
                key={`${notice.id}-${index}`}
                className={cn(
                  'flex items-center',
                  HOME_NOTICE_BAR_ITEM_HEIGHT_CLASS,
                )}
              >
                <HomeNoticeItem notice={notice} />

                <ExpandLabel>펼치기</ExpandLabel>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeNoticeBar;
