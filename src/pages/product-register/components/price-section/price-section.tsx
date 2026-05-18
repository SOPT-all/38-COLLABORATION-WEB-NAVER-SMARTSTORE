import { useState } from 'react';
import { IcArrowRight, IcTooltip } from '@shared/assets/icons';

import { SectionCard, SectionSubtitle } from '../section-cards';
import SegmentedToggle from '../toggles/segmented-toggle';

const rowClass =
  'flex w-full items-start gap-[4rem] border-b border-gray-200 pb-[0.8rem]';

const labelClass = 'flex h-[4rem] w-[12rem] shrink-0 items-center pl-[2rem]';

interface PriceSectionProps {
  onChange: (price: number) => void;
}

const PriceSection = ({ onChange }: PriceSectionProps) => {
  const [priceValue, setPriceValue] = useState('');
  const [discount, setDiscount] = useState('설정안함');
  const [salePeriod, setSalePeriod] = useState('설정안함');
  const [tax, setTax] = useState('과세상품');

  return (
    <SectionCard title='판매가' paddingX='small' className='w-full'>
      <section className='flex w-full flex-col gap-[1.2rem]'>
        <div className={rowClass}>
          <div className={labelClass}>
            <SectionSubtitle title='판매가' hasQuestion />
          </div>

          <div className='flex flex-col items-start gap-[2rem]'>
            <div className='flex h-[3.4rem] w-[19.9rem] border border-gray-200 bg-gray-50'>
              <input
                type='text'
                value={priceValue}
                placeholder='숫자만 입력'
                onChange={(e) => {
                  const num = Number(e.target.value.replace(/[^0-9]/g, ''));
                  setPriceValue(e.target.value.replace(/[^0-9]/g, ''));
                  onChange(num);
                }}
                className='body-md-12 placeholder:text-gray flex-1 px-[1rem] text-black outline-none'
              />

              <span className='body-md-12 text-gray grid w-[3.1rem] place-items-center border-l border-gray-200'>
                원
              </span>
            </div>

            <div className='body-md-12 text-green flex flex-col gap-[0.4rem]'>
              <p>
                스마트스토어를 통한 거래 시 주문관리/판매 수수료 및 그 외
                수수료가 부과될 수 있습니다.
                <a
                  href='https://join.shopping.naver.com/faq/list.nhn?catgCd=H00015'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='수수료 안내 페이지로 이동'
                  className='ml-[0.1rem] inline-flex items-center whitespace-nowrap underline'
                >
                  수수료 안내 <IcArrowRight className='text-green' />
                </a>
              </p>

              <p>
                판매가, 할인가를 활용한 비정상 거래는 자동 탐지되어 판매지수에
                포함되지 않으니 유의해주세요.
                <a
                  href='https://join.shopping.naver.com/faq/list.nhn?catgCd=H00015'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='안내 페이지로 이동'
                  className='ml-[0.1rem] inline-flex items-center whitespace-nowrap underline'
                >
                  안내 <IcArrowRight className='text-green' />
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className={rowClass}>
          <div className={labelClass}>
            <SectionSubtitle title='즉시할인' required={false} />
            <div className='ml-[0.4rem] flex h-[1.6rem] w-[1.6rem]'>
              <IcTooltip />
            </div>
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

        <div className='flex w-full items-start gap-[4rem]'>
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
