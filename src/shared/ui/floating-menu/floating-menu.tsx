import {
  IcAlarm,
  IcHelp,
  IcSolution,
  IcTalktalk,
  IcTodo,
} from '@shared/assets/icons';

const MENU_ITEMS = [
  { icon: <IcAlarm />, label: '알림' },
  { icon: <IcTodo />, label: '할 일' },
  { icon: <IcSolution />, label: '솔루션' },
  { icon: <IcHelp />, label: '도움말' },
  { icon: <IcTalktalk />, label: '톡톡상담' },
];

const FloatingMenu = () => {
  return (
    <div className='sticky top-[6rem] flex h-[calc(100vh-6rem)] flex-col items-center gap-[1.4rem] border-l border-gray-100 bg-white px-[1.4rem] pt-[1.6rem]'>
      {MENU_ITEMS.map(({ icon, label }) => (
        <button
          key={label}
          type='button'
          className='flex flex-col items-center gap-[0.6rem]'
        >
          {icon}
          <p className='body-md-12 text-gray'>{label}</p>
        </button>
      ))}
    </div>
  );
};

export default FloatingMenu;
