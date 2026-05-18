import { IcArrowRight, IcNaverCircle } from '@shared/assets/icons';
import { Button } from '@shared/ui/button';
import { cn } from '@shared/utils/cn';
import { useNavigate } from 'react-router-dom';

interface ProductNoticeBarProps {
  variant: 'register' | 'preview';
}

const NOTICE_BAR_TEXT = {
  register: {
    title: '상품등록',
    activeTab: '상품 등록',
    tabs: ['상품 등록', '그룹상품 등록'],
  },
  preview: {
    title: '상품 조회/수정',
    activeTab: '상품 조회',
    tabs: ['상품 조회'],
  },
} as const;

const ProductNoticeBar = ({ variant }: ProductNoticeBarProps) => {
  const navigate = useNavigate();
  const { title, activeTab, tabs } = NOTICE_BAR_TEXT[variant];

  return (
    <section aria-label={`${title} 상단 공지`}>
      <div className='grid h-[6rem] grid-cols-[auto_1fr] border border-gray-200 bg-white'>
        <button
          type='button'
          className='text-gray flex items-center border-r border-gray-200 bg-gray-100 px-[0.2rem]'
          aria-label='이전 페이지로 이동'
          onClick={() => navigate(-1)}
        >
          <IcArrowRight
            aria-hidden='true'
            className='size-[2.4rem] rotate-180'
          />
        </button>

        <div className='flex items-center gap-[1.6rem] px-[2.8rem]'>
          <div className='flex shrink-0 items-center gap-[1.3rem]'>
            <h1 className='ns-title-b-20 text-black'>{title}</h1>
            <span className='body-md-14 text-red flex items-center gap-[0.4rem]'>
              <span
                className='bg-red size-[0.6rem] rounded-full'
                aria-hidden='true'
              />
              필수항목
            </span>
          </div>

          <div className='flex items-center gap-[0.8rem]'>
            <Button color='gray'>검색 SEO 가이드</Button>
            <Button color='green' size='large'>
              그룹상품이 노출에 강한 이유
            </Button>
          </div>
        </div>
      </div>

      <nav
        className='flex h-[4.1rem] border border-gray-200 bg-white px-[6rem]'
        aria-label={`${title} 탭`}
      >
        <div className='flex h-full gap-[4rem]'>
          {tabs.map((tab) => {
            const isActive = tab === activeTab;

            return (
              <button
                key={tab}
                type='button'
                className={cn(
                  'title-sb-16-1_5 relative flex h-full items-center justify-center whitespace-nowrap text-black',
                  isActive && 'text-green w-[5.9rem] px-[0.4rem]',
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                {tab === '그룹상품 등록' ? (
                  <span className='inline-flex items-center gap-[0.2rem]'>
                    {tab}
                    <IcNaverCircle
                      aria-hidden='true'
                      className='text-red size-[2rem]'
                    />
                  </span>
                ) : (
                  tab
                )}
                {isActive && (
                  <span
                    className='bg-green absolute inset-x-0 bottom-[-0.1rem] h-[0.3rem]'
                    aria-hidden='true'
                  />
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </section>
  );
};

export default ProductNoticeBar;
