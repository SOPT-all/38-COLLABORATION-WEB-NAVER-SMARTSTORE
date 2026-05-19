import GuideSection from './components/guide-section/guide-section';
import HomeNoticeBar from './components/home-notice-bar';
import MissionSection from './components/mission-section/mission-section';
import RegisterButton from './components/register-button/register-button';
import { useHomeNotices } from './hooks/use-home-notices';

const StoreHome = () => {
  const { data: notices = [] } = useHomeNotices();

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
