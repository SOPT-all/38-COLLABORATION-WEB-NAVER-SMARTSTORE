import { SectionCard } from './components/section-cards';

const ProductRegister = () => {
  return (
    <>
      {/* 예시 코드 */}
      <SectionCard title='카테고리' required hasQuestion>
        {/* input */}
      </SectionCard>
      <br />
      <SectionCard title='카테고리' required hasQuestion>
        {/* input */}
        <button>확인</button>
      </SectionCard>
    </>
  );
};

export default ProductRegister;
