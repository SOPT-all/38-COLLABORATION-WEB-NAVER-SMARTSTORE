import { useState } from 'react';
import { IcNaverCircle, IcNaverCircleRed } from '@shared/assets/icons';

import SidebarItem from './sidebar-item';
import SidebarMenu from './sidebar-menu';
import SidebarSubTitle from './sidebar-sub-title';

const PRODUCT_ITEMS = ['상품 조회/수정', '상품 등록', '공지사항 관리'];

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
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <div className='border-t-gray-600 bg-gray-600 pt-[1.8rem]'>
      <SidebarMenu
        text='상품관리'
        isOpen={isProductOpen}
        onToggle={() => setIsProductOpen((prev) => !prev)}
      >
        <SidebarSubTitle text='그룹상품 관리' />
        {PRODUCT_ITEMS.map((item) => (
          <SidebarItem
            key={item}
            label={item}
            isSelected={selectedItem === item}
            onClick={() => setSelectedItem(item)}
          />
        ))}
      </SidebarMenu>

      {STATIC_MENUS.map(({ label, badge }) => (
        <SidebarMenu
          key={label}
          text={
            <span className='flex items-center'>
              {label}
              {badge === 'npay' && <IcNaverCircle />}
              {badge === 'n' && <IcNaverCircleRed />}
            </span>
          }
        />
      ))}
    </div>
  );
};

export default Middle;
