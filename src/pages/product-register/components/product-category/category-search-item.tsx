import { cn } from '@shared/utils/cn';

interface CategorySearchItemProps {
  text: string;
  highlight: string;
  isHovered?: boolean;
  onMouseEnter: () => void;
  onClick: () => void;
}

const CategorySearchItem = ({
  text,
  highlight,
  isHovered = false,
  onMouseEnter,
  onClick,
}: CategorySearchItemProps) => {
  const index = text.indexOf(highlight);

  return (
    <div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className={cn(
        'group flex h-[3.4rem] w-full cursor-pointer items-center px-[1.2rem] py-[0.4rem] hover:bg-gray-100',
        isHovered && 'bg-gray-100',
      )}
    >
      <span
        className={cn(
          'body-md-12 group-hover:text-green',
          isHovered && 'text-green',
        )}
      >
        {index !== -1 ? (
          <>
            <span className='bg-yellow-searched'>
              {text.slice(0, index + highlight.length)}
            </span>
            {text.slice(index + highlight.length)}
          </>
        ) : (
          text
        )}
      </span>
    </div>
  );
};
export default CategorySearchItem;
