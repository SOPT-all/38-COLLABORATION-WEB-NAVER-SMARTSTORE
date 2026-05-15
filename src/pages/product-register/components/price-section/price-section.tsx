import { cn } from '@shared/utils/cn';

import { SectionCard, SectionSubtitle } from '../section-cards';

const buttonClass = (active: boolean) =>
  cn(
    'body-md-13-2 h-[3.4rem] w-[11.6rem] border px-[2rem] py-[0.8rem]',
    '-ml-[0.1rem] first:ml-0',
    active
      ? 'border-green bg-green text-white'
      : 'border-gray-200 bg-white text-gray',
  );

const rowClass =
  'flex w-full items-start gap-[4rem] border-b border-gray-200 pb-[0.8rem]';

const lastRowClass = 'flex w-full items-start gap-[4rem]';

const labelClass = 'flex h-[4rem] w-[12rem] shrink-0 items-center';

const PriceSection = () => {
  return (
    <SectionCard title='판매가' paddingX='small' className='w-[103.4rem]'>
      <div className='flex flex-col gap-[1.2rem]'>
        <div className={rowClass}>
          <div className={labelClass}>
            <SectionSubtitle title='판매가' hasQuestion />
          </div>

          <div className='flex flex-col items-start gap-[2rem]'>
            <div className='flex h-[3.4rem] w-[19.9rem] border border-gray-200 bg-gray-50'>
              <input
                type='text'
                placeholder='숫자만 입력'
                className='body-md-12 placeholder:text-gray flex-1 px-[1rem] text-black'
              />

              <span className='body-md-12 text-gray grid w-[3.1rem] place-items-center border-l border-gray-200'>
                원
              </span>
            </div>

            <div className='flex w-[49.1rem] flex-col gap-[0.4rem]'>
              <p className='body-md-12 text-green'>
                스마트스토어를 통한 거래 시 주문관리/판매 수수료 및 그 외
                수수료가 부과될 수 있습니다.
                <a href='#' className='whitespace-nowrap'>
                  수수료 안내 &gt;
                </a>
              </p>

              <p className='body-md-12 text-green'>
                판매가, 할인가를 활용한 비정상 거래는 자동 탐지되어 판매지수에
                포함되지 않으니 유의해주세요.
                <a href='#' className='whitespace-nowrap'>
                  안내 &gt;
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className={rowClass}>
          <div className={labelClass}>
            <SectionSubtitle title='즉시할인' required={false} />
          </div>

          <div className='flex'>
            <button type='button' className={buttonClass(false)}>
              설정함
            </button>
            <button type='button' className={buttonClass(true)}>
              설정안함
            </button>
          </div>
        </div>

        <div className={rowClass}>
          <div className={labelClass}>
            <SectionSubtitle title='판매기간' required={false} />
          </div>

          <div className='flex'>
            <button type='button' className={buttonClass(false)}>
              설정함
            </button>
            <button type='button' className={buttonClass(true)}>
              설정안함
            </button>
          </div>
        </div>

        <div className={lastRowClass}>
          <div className={labelClass}>
            <SectionSubtitle title='부가세' />
          </div>

          <div className='flex'>
            <button type='button' className={buttonClass(true)}>
              과세상품
            </button>
            <button type='button' className={buttonClass(false)}>
              면세상품
            </button>
            <button type='button' className={buttonClass(false)}>
              영세상품
            </button>
          </div>
        </div>
      </div>
    </SectionCard>
  );
};

export default PriceSection;
