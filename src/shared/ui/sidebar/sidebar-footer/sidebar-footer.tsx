import ExternalLink from './external-link';

const FOOTER_SECTIONS = [
  {
    title: '교육 프로그램 바로가기',
    links: ['온라인 교육', '쇼핑 라이브 교육'],
  },
  {
    title: '마이비즈',
    links: ['정책자원금', '빠른정산', '사업자 대출', '사업자 보험'],
  },
  {
    title: '공식 블로그 바로가기',
    links: ['네이버쇼핑 파트너', '쇼핑윈도'],
  },
];

const SidebarFooter = () => {
  return (
    <div className='grid gap-[2rem] bg-gray-600 px-[2rem] py-[4.4rem]'>
      {FOOTER_SECTIONS.map(({ title, links }) => (
        <div key={title}>
          <div className='body-md-12 text-gray mb-[0.8rem]'>{title}</div>
          <div className='flex flex-col gap-[0.4rem]'>
            {links.map((link) => (
              <ExternalLink key={link} text={link} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SidebarFooter;
