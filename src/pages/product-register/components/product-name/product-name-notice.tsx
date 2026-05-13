import { IcArrowRightSmall } from '@shared/assets/icons';

const ProductNameNotice = () => {
  return (
    <div
      id='product-name-notice'
      className='flex flex-col items-start gap-[0.7rem]'
    >
      {/* 첫번째 줄 */}
      <div className='flex items-start self-stretch'>
        <p className='body-md-12 text-green'>
          상품명을 검색최적화 가이드에 맞게 입력하면 검색 노출에 도움이 될 수
          있으며, 가이드에 맞지 않을 경우 별도 고지 없이 제재될 수 있습니다.
        </p>
      </div>

      {/* 두번째 줄 */}
      <div className='flex items-start gap-[0.2rem]'>
        <p className='body-md-12 text-green'>
          전용 상품명을 사용 중인 경우 대표 상품명수정 시에도 전용 상품명으로
          노출됩니다.
        </p>
        <div className='flex items-start'>
          <a
            href='#'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='검색 SEO 가이드 새 탭에서 열기'
            className='body-md-12 text-green w-[8.1rem] underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500'
          >
            검색 SEO 가이드
          </a>
          <div className='flex items-center gap-[0.4rem] p-[0.4rem]'>
            <IcArrowRightSmall className='text-green' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductNameNotice;
