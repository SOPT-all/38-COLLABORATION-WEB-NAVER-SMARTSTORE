import { Fragment } from 'react';
import { IcNaverLogo } from '@shared/assets/icons';

const NAV_LINKS = ['쇼핑파트너센터', '커머스솔루션마켓', '통합광고주센터'];

const Header = () => {
  return (
    <header className='flex w-full items-center justify-between bg-gray-800 px-[2rem] py-[1.6rem]'>
      <div className='flex items-center gap-[1.6rem]'>
        <div className='flex items-center gap-[0.8rem]'>
          <IcNaverLogo className='text-green h-[1.95rem] w-[1.95rem]' />
          <span className='ns-title-b-20 text-white'>스마트스토어센터</span>
        </div>

        <nav className='flex items-center'>
          {NAV_LINKS.map((label, index) => (
            <Fragment key={label}>
              <span className='body-md-14 text-gray cursor-pointer'>
                {label}
              </span>
              {index !== NAV_LINKS.length - 1 && (
                <div className='mx-[0.8rem] h-[1.6rem] w-[0.1rem] bg-gray-400' />
              )}
            </Fragment>
          ))}
        </nav>
      </div>

      <div className='body-md-12 flex items-center gap-[1.6rem] text-white'>
        <div className='flex items-center gap-[0.4rem]'>
          <span>iter1290님</span>
          <button
            type='button'
            className='flex items-center justify-center rounded-[5rem] border border-white px-[0.8rem] py-[0.2rem]'
          >
            내정보
          </button>
        </div>
        <span>로그아웃</span>
      </div>
    </header>
  );
};

export default Header;
