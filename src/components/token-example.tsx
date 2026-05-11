import { cn } from "@/utils/cn";

const statusItems = [
  { label: "판매중", className: "bg-green text-text-white" },
  { label: "검수필요", className: "bg-blue-100 text-blue-600" },
  { label: "반려", className: "bg-red text-text-white" },
];

function TokenExample() {
  return (
    <main className={cn("min-h-screen bg-gray-50 px-8 py-10")}>
      <section
        className={cn(
          "mx-auto flex max-w-[36rem] flex-col gap-6",
          "rounded-[1.2rem] bg-white p-6 shadow-sm",
        )}
      >
        <div className={cn("flex flex-col gap-2")}>
          <h1 className={cn("title-b-18 text-text-black")}>스토어 상품 카드</h1>
          <p className={cn("body-md-13-0 text-text-gray")}>
            디자인 토큰으로 색상과 타이포그래피를 적용한 예시입니다.
          </p>
        </div>

        <div
          className={cn(
            "flex flex-col gap-3 rounded-[0.8rem] p-4",
            "border border-gray-100 bg-gray-50",
          )}
        >
          <strong className={cn("title-sb-16-2 text-gray-800")}>프리미엄 데일리 백팩</strong>
          <span className={cn("body-md-14 text-text-black")}>42,000원</span>

          <div className={cn("flex gap-2")}>
            {statusItems.map((item) => (
              <span
                key={item.label}
                className={cn("body-md-12 rounded-[10rem] px-3 py-1", item.className)}
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>

        <button
          className={cn(
            "body-md-14 rounded-[0.8rem] bg-green px-5 py-4 text-text-white",
            "hover:bg-green-hovered active:bg-green-pressed",
          )}
          type="button"
        >
          상품 등록하기
        </button>
      </section>
    </main>
  );
}

export default TokenExample;
