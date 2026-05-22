import { useState } from 'react';
import {
  MissionImage1,
  MissionImage2,
  MissionImage3,
  MissionImage4,
} from '@pages/store-home/assets';
import { useNavigate } from 'react-router-dom';

import GuideHeader from '../guide-header';
import MissionButtonGroup from './mission-button-group/mission-button-group';
import MissionContentCard from './mission-content-card/mission-content-card';

const MISSION_CONTENTS = [
  {
    step: 1,
    title: '첫 상품을 지금 바로 등록해보세요.',
    description:
      '내가 팔고자하는 첫 상품을 등록해보세요. 상품 소개 내용에 정확한 정보를 입력하고 매력적인 소개 이미지와 설명을 입력하세요.',
    buttonText: '상품 등록하기',
    navigateTo: '/register',
    image: MissionImage1,
  },
  {
    step: 2,
    title: '내 스토어를 매력적으로 꾸미고 상품을 진열하세요!',
    description:
      '내 상품들이 구매자들에게 매력적으로 보일 수 있게 내 스토어를 꾸며 보세요.',
    buttonText: '스토어 꾸미기',
    image: MissionImage2,
  },
  {
    step: 3,
    title: '고객문의에 좀 더 쉽게 응대할 수 있게 네이버 톡톡을 연결하세요.',
    description:
      '톡톡을 통해 고객문의를 쉽게 응대받을 수 있는 편의를 제공하고, 더 많은 고객 응대를 통한 매출 상승도 함께 노려보세요.',
    buttonText: '문의 응대하기',
    image: MissionImage3,
  },
  {
    step: 4,
    title:
      '구매자 혜택을 설정하여 더 많은 고객이 들어올 수 있게 첫 마케팅 설정을 해보세요.',
    description:
      '구매자들이 혜택을 느낄 수 있을 만한 쿠폰, 포인트 적립 같은 혜택을 설정해서 더 잘 팔리게 홍보해 보세요.',
    buttonText: '마케팅 설정하기',
    image: MissionImage4,
  },
];

const MissionSection = () => {
  const [selectedStep, setSelectedStep] = useState(1);
  const navigate = useNavigate();

  const { title, description, buttonText, navigateTo, image } =
    MISSION_CONTENTS[selectedStep - 1];

  return (
    <section>
      <GuideHeader
        title={'초보 사장님 첫 미션'}
        description={'첫 상품을 등록하고 내 스토어를 꾸며보세요.'}
      />
      <div className='mt-[1.6rem] flex h-[38rem]'>
        <MissionButtonGroup
          selectedStep={selectedStep}
          onStepChange={setSelectedStep}
        />
        <MissionContentCard
          stepNumber={selectedStep}
          title={title}
          description={description}
          buttonText={buttonText}
          onButtonClick={navigateTo ? () => navigate(navigateTo) : undefined}
          image={image}
        />
      </div>
    </section>
  );
};

export default MissionSection;
