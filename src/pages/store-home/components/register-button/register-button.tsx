import { routePath } from '@routes/path';
import { IcMakeItem } from '@shared/assets/icons';
import { useNavigate } from 'react-router-dom';

const RegisterButton = () => {
  const navigate = useNavigate();

  return (
    <button
      type='button'
      onClick={() => {
        navigate(routePath.REGISTER);
      }}
      className={
        'bg-green title-sb-16-1_5 hover:bg-green-hovered active:bg-green-pressed flex h-[4.8rem] w-full items-center justify-center gap-[0.4rem] text-white transition-colors duration-300 ease-out'
      }
    >
      <IcMakeItem aria-hidden='true' />
      상품등록
    </button>
  );
};

export default RegisterButton;
