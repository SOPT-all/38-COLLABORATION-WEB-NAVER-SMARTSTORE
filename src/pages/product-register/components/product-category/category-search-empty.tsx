interface CategorySearchEmptyProps {
  highlight: string;
}

const CategorySearchEmpty = ({ highlight }: CategorySearchEmptyProps) => {
  const text = `${highlight} 카테고리가 없습니다.`;
  const index = text.indexOf(highlight);

  return (
    <div className='flex flex-col border border-gray-200'>
      <div className='flex h-[3.4rem] flex-col items-start justify-center gap-[0.4rem] bg-gray-100 px-[1.2rem] py-[0.4rem]'>
        <div className='flex items-start gap-[0.4rem]'>
          <span className='body-md-12 text-green'>
            <span className='bg-yellow-searched'>
              {text.slice(0, index + highlight.length)}
            </span>
            {text.slice(index + highlight.length)}
          </span>
        </div>
      </div>

      <div className='flex flex-col items-start justify-center gap-[0.8rem] p-[1.2rem]'>
        <p className='body-md-12 text-gray'>
          • 단어의 철자가 정확한지 확인해 보세요.
        </p>
        <p className='body-md-12 text-gray'>
          • 한글을 영어 혹은 영어를 한글로 입력했는지 확인해 보세요.
        </p>
        <p className='body-md-12 text-gray'>
          • 카테고리명 선택으로 변경해서 정확한 카테고리를 찾아보세요.
        </p>
      </div>
    </div>
  );
};
export default CategorySearchEmpty;
