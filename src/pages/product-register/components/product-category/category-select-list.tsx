import type { Category } from './types';

interface CategorySelectListProps {
  items: Category[];
  onSelect: (item: Category) => void;
}

const CategorySelectList = ({ items, onSelect }: CategorySelectListProps) => {
  return (
    <div className='flex flex-col items-start self-stretch border border-t-0 border-gray-200'>
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => onSelect(item)}
          className='group flex h-[3.4rem] w-full cursor-pointer flex-col items-start justify-center gap-[0.4rem] self-stretch px-[1.2rem] py-[0.4rem] hover:bg-gray-100'
        >
          <span className='body-md-12 group-hover:text-green text-black'>
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CategorySelectList;
