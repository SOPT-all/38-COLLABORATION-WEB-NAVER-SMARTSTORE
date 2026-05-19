import { Fragment } from 'react';

const NAV_LINKS = [
  '이용약관',
  '전자금융거래 이용약관',
  '개인정보 처리방침',
  '청소년 보호정책',
  '책임의 한계와 법적고지',
  '안전거래가이드',
  '고객센터',
];

const BUSINESS_INFO = [
  { label: '사업자등록번호', value: '220-81-62517' },
  { label: '통신판매업신고번호', value: '제2006-경기성남-0692호' },
  { label: '대표이사', value: '최수연' },
];

const borderButtonClass =
  'body-md-12 inline-flex border border-gray-200 bg-white px-[0.4rem] py-[0.2rem]';

const Footer = () => {
  return (
    <footer className='flex w-full flex-col items-center justify-center pt-[3.8rem] pb-[3rem]'>
      <div className='body-md-12 flex items-center gap-[0.8rem] pb-[1.4rem]'>
        {NAV_LINKS.map((label, index) => (
          <Fragment key={label}>
            <span>{label}</span>
            {index !== NAV_LINKS.length - 1 && (
              <div className='h-[1.1rem] w-[0.1rem] bg-gray-200' />
            )}
          </Fragment>
        ))}
      </div>

      <p className='text-gray body-md-13-2 pb-[1.4rem] text-center'>
        네이버(주)는 통신판매중개자이며, 통신판매의 당사자가 아닙니다. 상품,
        상품정보, 거래에 관한 의무와 책임은 판매자에게 있습니다.
        <br />
        또한 판매자와 구매자간의 거래에 대하여 당사는 관여하지 않기 때문에
        거래에 대해서는 책임을 지지 않습니다.
      </p>

      <div className='flex flex-wrap items-center gap-x-4 gap-y-1 pb-[0.6rem]'>
        {BUSINESS_INFO.map(({ label, value }) => (
          <span key={label} className='body-md-13-2 flex gap-[1rem]'>
            {label} : {value}
          </span>
        ))}
        <span className={borderButtonClass}>사업자정보확인</span>
      </div>

      <div className='flex items-center gap-[2rem] pb-[2rem]'>
        <span className='body-md-13-2 text-black'>
          주소 : 경기도 성남시 분당구 정자일로 95, NAVER 1784, 13561
        </span>
        <span className={borderButtonClass}> 전화상담 (전화 전 클릭)</span>
        <span className={borderButtonClass}> 톡톡상담</span>
      </div>

      <div className='flex items-center gap-[0.4rem]'>
        <span className='text-green title-b-18'>NAVER</span>
        <p className='text-gray body-md-12'>
          Copyright @ NAVER Corp. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
