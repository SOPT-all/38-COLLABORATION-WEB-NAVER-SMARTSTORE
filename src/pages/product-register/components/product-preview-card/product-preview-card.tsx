import { cn } from '@shared/utils/cn';

interface ProductPreviewCardProps {
  productName: string;
  price: number;
  rating: number;
  reviewCount: number;
  imageUrl?: string;
  isLiked?: boolean;
}

const ProductPreviewCard = ({
  productName,
  price,
  rating,
  reviewCount,
  imageUrl,
  isLiked = false,
}: ProductPreviewCardProps) => {
  return (
    <article className='flex h-[38.2rem] w-[28.4rem] flex-col items-start gap-[1.2rem] border border-gray-200 bg-white p-[2rem]'>
      <div className='h-[24.4rem] w-[24.4rem] overflow-hidden bg-gray-100'>
        {imageUrl && (
          <img
            src={imageUrl}
            alt={productName}
            className='h-full w-full object-cover'
          />
        )}
      </div>

      <div className='flex w-[24.4rem] flex-col items-start gap-[0.8rem]'>
        <div className='flex w-full items-start justify-between'>
          <div className='flex w-[17.9rem] flex-col items-start gap-[0.2rem]'>
            <p className='body-md-14 line-clamp-2 h-[3.6rem] overflow-hidden text-black'>
              {productName}
            </p>

            <div className='flex items-end'>
              <strong className='title-b-18 text-black'>
                {price.toLocaleString()}
              </strong>

              <span className='title-sb-16-1_5 text-black'>원</span>
            </div>
          </div>

          <button
            type='button'
            aria-pressed={isLiked}
            aria-label='상품 찜하기'
            className={cn(
              'h-[1.5rem] w-[1.5rem] text-[1.5rem] leading-none',
              isLiked ? 'text-red' : 'text-gray-300',
            )}
          >
            {/* 하트아이콘 넘겨받기 전까지 임의의 하트 */} ♡
          </button>
        </div>

        <div className='flex items-center gap-[0.4rem]'>
          <span className='text-red text-[1.4rem] leading-none'>★</span>

          <span className='body-md-13-2 text-black'>{rating}</span>

          <span className='h-[0.4rem] w-[0.4rem] rounded-full bg-gray-200' />

          <span className={`body-md-13-2 text-gray`}>리뷰 {reviewCount}</span>
        </div>
      </div>
    </article>
  );
};

export default ProductPreviewCard;
