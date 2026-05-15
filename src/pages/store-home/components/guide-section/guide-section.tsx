import GuideImage1 from '@pages/store-home/assets/guide_image_1.webp';
import GuideImage2 from '@pages/store-home/assets/guide_image_2.webp';
import GuideImage3 from '@pages/store-home/assets/guide_image_3.webp';
import GuideImage4 from '@pages/store-home/assets/guide_image_4.webp';
import GuideHeader from '@pages/store-home/components/guide-header.tsx';
import GuideContentItem, {
  type GuideContentItemProps,
} from '@pages/store-home/components/guide-section/guide-content-item/guide-content-item';

const guideContents: GuideContentItemProps[] = [
  {
    image: GuideImage1,
    title: '초보 사장님을 위한 스마트스토어 첫 가이드',
    description:
      '상품등록부터 정산까지! 스토어 운영을 위한 주요 기능들을 어디에서 어떻게 사용하는지 차근차근 알려드릴게요!',
  },
  {
    image: GuideImage2,
    title: '상세 페이지 만들기 어렵지 않아요!',
    description:
      '내 상품이 더 매력적으로 보이기 위해서 상품 페이지를 어떻게 만들면 좋을지 알려드려요.',
  },
  {
    image: GuideImage3,
    title: '검색에 강한 상품 등록 방법',
    description:
      '검색이 잘 되려면 어떤 키워드와 정보를 꼭 입력해야 하는 지 알려드려요.',
  },
  {
    image: GuideImage4,
    title: '고객을 부르는 쿠폰 포인트 혜택',
    description:
      '고객 유입을 위해 꼭 설정해야 할 쿠폰 포인트 혜택 설정 방법을 안내드려요.',
  },
];

const guideRows = [guideContents.slice(0, 2), guideContents.slice(2, 4)];

const GuideSection = () => {
  return (
    <section className='flex flex-col items-start gap-[1.6rem] self-stretch'>
      <GuideHeader
        title='첫 판매를 만들기 위해 꼭 보고 가시면 좋은 판매 가이드'
        description='사장님의 첫 판매를 위해 스마트스토어 담당자가 직접 안내하는 판매 팁을 꼭 확인해보세요.'
      />

      <div className='flex w-full flex-col items-start gap-[2.4rem] border border-gray-200 bg-white p-[2.4rem]'>
        {guideRows.map((row) => (
          <div
            key={row.map(({ title }) => title).join('-')}
            className='grid w-full grid-cols-2 gap-[2.4rem]'
          >
            {row.map((guideContent) => (
              <GuideContentItem key={guideContent.title} {...guideContent} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default GuideSection;
