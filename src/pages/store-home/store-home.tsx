import MissionSection from './components/mission-section/mission-section';

import HomeNoticeBar, { type HomeNotice } from "./components/home-notice-bar";

const notices: HomeNotice[] = [
  {
    id: 1,
    noticeType: "SYSTEM",
    title: "정산 일일 리포트 발송 일시 중단 안내",
    createdAt: "2026-05-09T14:30:00",
  },
  {
    id: 2,
    noticeType: "EVENT",
    title: "데탑 웹 1조 화이팅 ~~",
    createdAt: "2026-05-14T14:30:00",
  },
];

import GuideSection from './components/guide-section/guide-section';
import MissionSection from './components/mission-section/mission-section';

const StoreHome = () => {
  return <>
      <HomeNoticeBar notices={notices} />
      <MissionSection />
      <GuideSection />
  </>;
};

export default StoreHome;
