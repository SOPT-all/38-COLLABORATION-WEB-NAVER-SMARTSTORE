import { Button } from '@shared/ui/button';

interface CategoryButtonsProps {
  mode: 'search' | 'select';
  onSearchClick: () => void;
  onSelectClick: () => void;
}

const CategoryButtons = ({
  mode,
  onSearchClick,
  onSelectClick,
}: CategoryButtonsProps) => {
  return (
    <div className='flex items-center gap-[0.8rem]'>
      <div className='flex items-center'>
        <Button
          color={mode === 'search' ? 'green' : 'white'}
          onClick={onSearchClick}
        >
          카테고리명 검색
        </Button>
        <Button
          color={mode === 'select' ? 'green' : 'white'}
          onClick={onSelectClick}
        >
          카테고리명 선택
        </Button>
      </div>
      <div className='flex items-center gap-[1.2rem]'>
        <Button color='gray'>카테고리 템플릿</Button>
        <div className='flex items-center gap-[0.7rem]'>
          <div className='h-[2rem] w-[2rem] border border-gray-100' />
          <span className='body-md-13-2 text-gray'>템플릿 추가</span>
        </div>
      </div>
    </div>
  );
};

export default CategoryButtons;
