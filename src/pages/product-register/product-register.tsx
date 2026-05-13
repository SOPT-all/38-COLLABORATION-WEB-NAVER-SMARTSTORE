import { SectionCard, SectionSubtitle } from './components/section-cards';

const ProductRegister = () => {
  return (
    <>
      {/* 예시 코드 */}
      <SectionCard title='카테고리' hasQuestion>
        {/* input */}
      </SectionCard>
      <br />
      <SectionCard title='카테고리' hasQuestion>
        {/* input */}
        <SectionSubtitle title='상품명' required />
      </SectionCard>
    </>
  );
};

export default ProductRegister;
