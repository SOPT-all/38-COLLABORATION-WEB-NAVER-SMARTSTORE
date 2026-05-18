import GuideSection from './components/guide-section/guide-section';
import HomeNoticeBar, { type HomeNotice } from './components/home-notice-bar';
import MissionSection from './components/mission-section/mission-section';
import RegisterButton from './components/register-button/register-button';

const notices: HomeNotice[] = [
  {
    id: 1,
    noticeType: 'SYSTEM',
    title: '정산 일일 리포트 발송 일시 중단 안내',
    createdAt: '2026-05-09T14:30:00',
  },
  {
    id: 2,
    noticeType: 'EVENT',
    title: '데탑 웹 1조 화이팅 ~~',
    createdAt: '2026-05-14T14:30:00',
  },
];

const StoreHome = () => {
  return (
    <div className='w-full'>
      <HomeNoticeBar notices={notices} />
      <div className='flex w-full flex-col px-[2.6rem]'>
        <div className='mt-[0.8rem]'>
          <RegisterButton />
        </div>
        <div className='mt-[3.6em]'>
          <MissionSection />
        </div>
        <div className='mt-[4.8rem]'>
          <GuideSection />
        </div>
      </div>
    </div>
  );
};

export default StoreHome;
