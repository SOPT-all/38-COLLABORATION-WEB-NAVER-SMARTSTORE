export type HomeNotice = {
  id: number;
  noticeType:
    | 'GENERAL'
    | 'SYSTEM'
    | 'SAFE_TRADE'
    | 'SELLING_TIP'
    | 'D_COMMERCE'
    | 'HAZARD_INFO'
    | 'MANUAL';
  title: string;
  createdAt: string;
};
