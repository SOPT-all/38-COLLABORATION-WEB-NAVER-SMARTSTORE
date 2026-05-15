import { StepContentImage } from '@shared/assets/images';

import GuideHeader from '../guide-header';
import MissionButtonGroup from './mission-button-group/mission-button-group';
import StepContentCard from './step-content-card';

const MissionSection = () => {
  return (
    <section>
      <GuideHeader
        title={'초보 사장님 첫 미션'}
        description={'첫 상품을 등록하고 내 스토어를 꾸며보세요.'}
      />
      <div className='mt-[1.6rem] flex h-[38rem]'>
        <MissionButtonGroup />
        <StepContentCard
          stepNumber={1}
          imageSrc={StepContentImage}
          imageAlt={'이미지'}
        />
      </div>
    </section>
  );
};

export default MissionSection;
