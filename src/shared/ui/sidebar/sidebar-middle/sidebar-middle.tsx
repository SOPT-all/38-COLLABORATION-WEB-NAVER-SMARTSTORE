import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SidebarItem from './sidebar-item';
import SidebarMenu from './sidebar-menu';
import SidebarSubTitle from './sidebar-sub-title';

const GROUP_PRODUCT_ITEMS = [
  '그룹상품 소개',
  '그룹상품 등록',
  '그룹상품 조회/수정',
  '그룹상품 리뷰이동',
  '그룹상품 노출 관리',
];

const PRODUCT_ITEMS: { label: string; to?: string }[] = [
  { label: '상품 조회/수정', to: '/preview' },
  { label: '상품 등록', to: '/register' },
  { label: '상품 일괄등록' },
  { label: '카탈로그 가격관리' },
  { label: '연관상품 관리' },
  { label: '사진 보관함' },
  { label: '배송정보 관리' },
  { label: '템플릿 관리' },
  { label: '공지사항 관리' },
  { label: '구독 관리' },
];

const STATIC_MENUS: { label: string; badge?: 'npay' | 'n' }[] = [
  { label: '판매관리', badge: 'npay' },
  { label: '정산관리', badge: 'npay' },
  { label: '문의/리뷰관리' },
  { label: '스토어관리' },
  { label: '혜택/마케팅' },
  { label: 'N배송 관리', badge: 'n' },
  { label: '커머스솔루션' },
  { label: '데이터분석' },
  { label: '광고관리', badge: 'n' },
  { label: '프로모션 관리' },
  { label: '쇼핑 커넥트' },
  { label: '판매자 정보' },
];

const Middle = () => {
  const navigate = useNavigate();
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>();

  const handleItemClick = (label: string, to?: string) => {
    if (!to) return;
    setSelectedItem(label);
    navigate(to);
  };

  return (
    <div className='border-t-gray-600 bg-gray-600 pt-[1.8rem]'>
      <SidebarMenu
        text='상품관리'
        isOpen={isProductOpen}
        onToggle={() => setIsProductOpen((prev) => !prev)}
      >
        <SidebarSubTitle text='그룹상품 관리' />
        {GROUP_PRODUCT_ITEMS.map((item) => (
          <SidebarItem
            key={item}
            label={item}
            isSelected={selectedItem === item}
          />
        ))}

        <SidebarSubTitle text='상품 관리' />
        {PRODUCT_ITEMS.map(({ label, to }) => (
          <SidebarItem
            key={label}
            label={label}
            isSelected={selectedItem === label}
            onClick={() => handleItemClick(label, to)}
          />
        ))}
      </SidebarMenu>

      {STATIC_MENUS.map(({ label, badge }) => (
        <SidebarMenu key={label} text={label} badge={badge} />
      ))}
    </div>
  );
};

export default Middle;
