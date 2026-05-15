interface ProductNameInputProps {
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
}

const ProductNameInput = ({
  value,
  onChange,
  maxLength = 100,
}: ProductNameInputProps) => {
  return (
    <div className='flex h-[3.4rem] items-center'>
      <input
        type='text'
        value={value}
        onChange={(e) => {
          const trimmed = e.target.value.slice(0, maxLength);
          onChange(trimmed);
        }}
        maxLength={maxLength}
        aria-label='상품명 입력'
        aria-describedby='product-name-notice'
        className='body-md-12 focus:border-green h-[3.4rem] w-[37rem] shrink-0 truncate border border-gray-200 bg-gray-50 p-[0.8rem] outline-none focus:bg-white focus-visible:outline-none'
      />
      <div
        aria-live='polite'
        aria-atomic='true'
        className='flex h-[3.4rem] w-[5.2rem] shrink-0 items-center justify-center border border-gray-200 bg-gray-50 p-[0.4rem]'
      >
        <span className='sr-only'>현재 {value.length}자 입력됨</span>
        <span aria-hidden='true' className='body-md-12 text-green'>
          {value.length}
        </span>
        <span aria-hidden='true' className='body-md-12 text-black'>
          /{maxLength}
        </span>
      </div>
    </div>
  );
};

export default ProductNameInput;
