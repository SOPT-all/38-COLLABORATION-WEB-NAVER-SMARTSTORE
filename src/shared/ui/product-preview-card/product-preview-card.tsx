import { IcHeart } from '@shared/assets/icons';

interface ProductPreviewCardProps {
  productName: string;
  price: number;
  rating?: number;
  reviewCount?: number;
  imageUrl?: string;
}

const ProductPreviewCard = ({
  productName,
  price,
  rating = 0,
  reviewCount = 0,
  imageUrl,
}: ProductPreviewCardProps) => {
  return (
    <div className='h-[38.2rem] w-[28.4rem] bg-white p-[2rem]'>
      <div className='h-[24.4rem] w-[24.4rem] bg-gray-100'>
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`${productName} 이미지`}
            className='h-full w-full object-cover'
          />
        )}
      </div>

      <div className='flex w-full items-start justify-between'>
        <p className='body-md-14 mt-[1.2rem] mb-[0.2rem] line-clamp-2 min-h-[2rem] w-[19.5rem] text-black'>
          {productName}
        </p>
        <button
          type='button'
          aria-label='상품 찜하기'
          className='mt-[1.2rem] p-[0.5rem]'
        >
          <IcHeart />
        </button>
      </div>

      <div className='flex items-center text-black'>
        <p className='title-b-18'>{price.toLocaleString('ko-KR')}</p>
        <p className='title-sb-16-1_5'>원</p>
      </div>

      <div className='mt-[0.8rem] flex items-center'>
        <span className='text-red text-[1.4rem]'>★</span>

        <span className='body-md-13-2 text-black'>{rating.toFixed(1)}</span>

        <span className='m-[0.4rem] h-[0.4rem] w-[0.4rem] rounded-full bg-gray-200' />

        <span className='body-md-13-2 text-gray'>리뷰 {reviewCount}</span>
      </div>
    </div>
  );
};

export default ProductPreviewCard;
