interface ProductNameInputProps {
  value: string;
  onChange: (value: string) => void;
}

const ProductNameInput = ({ value, onChange }: ProductNameInputProps) => {
  return (
    <div className='flex h-[3.4rem] bg-gray-50'>
      <input
        type='text'
        value={value}
        onChange={(e) => {
          const trimmed = e.target.value.slice(0, 100);
          onChange(trimmed);
        }}
        maxLength={100}
        aria-label='상품명 입력'
        aria-describedby='product-name-notice'
        className='body-md-12 focus:border-green w-[37rem] border border-gray-200 p-[0.8rem] focus:bg-white'
      />
      <div
        aria-live='polite'
        aria-atomic='true'
        className='body-md-12 flex w-[5.2rem] items-center justify-center border border-gray-200 p-[0.4rem]'
      >
        <span className='sr-only'>현재 {value.length}자 입력됨</span>
        <span aria-hidden='true' className='text-green'>
          {value.length}
        </span>
        <span aria-hidden='true' className='text-black'>
          /{100}
        </span>
      </div>
    </div>
  );
};

export default ProductNameInput;
