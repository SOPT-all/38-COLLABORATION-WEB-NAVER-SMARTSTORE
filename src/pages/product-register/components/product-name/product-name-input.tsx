import { cn } from '@shared/utils/cn';

interface ProductNameInputProps {
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
  className?: string;
}

const ProductNameInput = ({
  value,
  onChange,
  maxLength = 100,
  className,
}: ProductNameInputProps) => {
  return (
    <div className={cn('flex h-[3.4rem] w-[42.2rem] items-center', className)}>
      <input
        type='text'
        value={value}
        onChange={(e) => {
          const trimmed = e.target.value.slice(0, maxLength);
          onChange(trimmed);
        }}
        maxLength={maxLength}
        className='body-md-12 h-[3.4rem] w-[37rem] flex-shrink-0 truncate border border-gray-200 bg-gray-50 p-[0.8rem] outline-none'
      />
      <div className='flex h-[3.4rem] w-[5.2rem] flex-shrink-0 items-center justify-center border border-gray-200 bg-gray-50 p-[0.4rem]'>
        <span className='body-md-12 text-green'>{value.length}</span>
        <span className='body-md-12 text-black'>/{maxLength}</span>
      </div>
    </div>
  );
};

export default ProductNameInput;
