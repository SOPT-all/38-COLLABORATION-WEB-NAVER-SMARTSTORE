import { useState } from 'react';

import { SectionCard, SectionSubtitle } from '../section-cards';
import SegmentedToggle from '../toggles/segmented-toggle';

const rowClass =
  'flex w-full items-start gap-[4rem] border-b border-gray-200 pb-[0.8rem]';

const lastRowClass = 'flex w-full items-start gap-[4rem]';

const labelClass = 'flex h-[4rem] w-[12rem] shrink-0 items-center';

const PriceSection = () => {
  const [discount, setDiscount] = useState('설정안함');
  const [salePeriod, setSalePeriod] = useState('설정안함');
  const [tax, setTax] = useState('과세상품');

  return (
    <SectionCard title='판매가' paddingX='small' className='w-[103.4rem]'>
      <section className='flex flex-col gap-[1.2rem]'>
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

          <SegmentedToggle
            options={['설정함', '설정안함']}
            selectedOption={discount}
            onChange={setDiscount}
            ariaLabel='즉시할인 설정'
          />
        </div>

        <div className={rowClass}>
          <div className={labelClass}>
            <SectionSubtitle title='판매기간' required={false} />
          </div>

          <SegmentedToggle
            options={['설정함', '설정안함']}
            selectedOption={salePeriod}
            onChange={setSalePeriod}
            ariaLabel='판매기간 설정'
          />
        </div>

        <div className={lastRowClass}>
          <div className={labelClass}>
            <SectionSubtitle title='부가세' />
          </div>

          <SegmentedToggle
            options={['과세상품', '면세상품', '영세상품']}
            selectedOption={tax}
            onChange={setTax}
            ariaLabel='부가세 설정'
          />
        </div>
      </section>
    </SectionCard>
  );
};

export default PriceSection;
