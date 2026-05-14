import { Button } from "@shared/ui/button";

const StoreHome = () => {
  return (
    <main className="min-h-screen p-[3.2rem]">
      <div className="flex flex-col gap-[2.4rem]">
        <section className="flex flex-wrap items-center gap-[0.8rem]">
          <Button color="white" size="default">
            설정함
          </Button>
          <Button color="green" size="default">
            설정안함
          </Button>
          <Button color="gray" size="default">
            설정안함
          </Button>
        </section>

        <section className="flex flex-wrap items-center gap-[0.8rem]">
          <Button color="gray" size="large">
            검색 SEO 가이드
          </Button>
          <Button color="green" size="large">
            그룹상품이 노출에 강한 이유
          </Button>
        </section>

        <section className="flex flex-wrap items-center gap-[0.8rem]">
          <Button color="green" size="large">
            카테고리명 검색
          </Button>
          <Button color="white" size="large">
            카테고리명 선택
          </Button>
          <Button color="gray" size="large">
            카테고리 템플릿
          </Button>
        </section>

        <section className="flex flex-wrap items-center gap-[0.8rem]">
          <Button color="gray" size="large">
            임시저장
          </Button>
          <Button color="green" size="large">
            저장하기
          </Button>
          <Button color="white" size="large">
            취소
          </Button>
        </section>
      </div>
    </main>
  );
};

export default StoreHome;
