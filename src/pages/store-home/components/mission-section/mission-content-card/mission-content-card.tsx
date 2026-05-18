import { MissionContentImage } from '@shared/assets/images';
import { useNavigate } from 'react-router-dom';

import { StepContentButton } from '../../step-content-button/step-content-button';

interface MissionContentCardProps {
  stepNumber: number;
}

export default function MissionContentCard({
  stepNumber
}: MissionContentCardProps) {
  const navigate = useNavigate();
  return (
    <div className='flex flex-1 border border-gray-200 bg-white'>
      {/* 왼쪽 콘텐츠 영역 */}
      <div className='flex flex-1 flex-col justify-between px-[3.2rem] py-[3.6rem]'>
        {/* 숫자 + 원 프레임 */}
        <div className='title-b-18 flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-full bg-gray-100 text-gray-500'>
          {stepNumber}
        </div>

        {/* 하단 텍스트(제목+버튼) */}
        <div className='flex flex-col gap-[1.6rem]'>
          <div className='flex flex-col gap-[0.8rem]'>
            <p className='title-sb-16-1_5 text-black'>
              첫 상품을 지금 바로 등록해보세요.
            </p>
            <p className='body-md-14-6_5 text-gray'>
              내가 팔고자하는 첫 상품을 등록해보세요. 상품 소개 내용에 정확한
              정보를 입력하고 매력적인 소개 이미지와 설명을 입력하세요.
            </p>
          </div>
          <StepContentButton
            text={'상품 등록하기'}
            onClick={() => navigate('/register')}
          />
        </div>
      </div>

      <img
        src={MissionContentImage}
        className='object-contain'
      />
    </div>
  );
}
