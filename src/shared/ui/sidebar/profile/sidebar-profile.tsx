import { IcArrowDown, IcSearch } from '@shared/assets/icons';
import IcProfileSvg from '@shared/assets/icons/ic_profile.svg';

const Profile = () => {
  return (
    <div className='flex flex-col items-center bg-gray-700 px-[2rem] py-[2.8rem]'>
      <img src={IcProfileSvg} alt='profile' />
      <p className='title-b-18 mt-[1.6rem] mb-[0.4rem] text-white'>
        Testing Store
      </p>
      <span className='body-md-13-2 text-gray mb-[3.2rem]'>통합 매니저</span>

      <button className='body-md-13-2 mb-[0.4rem] flex w-full items-center justify-between rounded-[8px] bg-gray-800 py-[0.6rem] pl-[1rem] text-white'>
        수취인명
        <IcArrowDown />
      </button>

      <div className='flex w-full rounded-[8px] bg-gray-800 px-[1rem] py-[0.6rem]'>
        <IcSearch />
        <input
          type='text'
          placeholder='입력 후 검색하세요.'
          className='body-md-12 text-white placeholder:text-gray-300'
        />
      </div>
    </div>
  );
};

export default Profile;
