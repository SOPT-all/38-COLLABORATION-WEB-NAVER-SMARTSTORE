import { IcArrowRightGreen } from '@shared/assets/icons';

const ProductNameNotice = () => {
  return (
    <div
      id='product-name-notice'
      className='text-green body-md-12 flex flex-col gap-[0.7rem]'
    >
      <p>
        상품명을 검색최적화 가이드에 맞게 입력하면 검색 노출에 도움이 될 수
        있으며, 가이드에 맞지 않을 경우 별도 고지 없이 제재될 수 있습니다.
      </p>

      <p className='flex'>
        전용 상품명을 사용 중인 경우 대표 상품명수정 시에도 전용 상품명으로
        노출됩니다.
        <a
          href='https://join.shopping.naver.com/faq/list.nhn?catgCd=H00015'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='검색 SEO 가이드 새 탭에서 열기'
          className='underline'
        >
          검색 SEO 가이드
        </a>
        <IcArrowRightGreen />
      </p>
    </div>
  );
};

export default ProductNameNotice;
