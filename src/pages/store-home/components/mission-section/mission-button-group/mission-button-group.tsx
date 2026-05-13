import MissionButton from './mission-button';

const STEPS = [
  { step: 1, label: '첫 상품 등록하기' },
  { step: 2, label: '스토어 꾸미기' },
  { step: 3, label: '고객 문의 응대하기' },
  { step: 4, label: '마케팅 설정하기' },
];

const MissionButtonGroup = () => {
  const SELECTED_STEP = 1; 

  return (
    <div className='flex flex-col border border-gray-200 bg-gray-50 px-[2.4rem] py-[3.6rem] gap-[0.7rem]'>
      {STEPS.map(({ step, label }, index) => (
        <div
          key={step}
          className='relative'
        >
          <MissionButton
            step={step}
            label={label}
            isSelected={ SELECTED_STEP === step}
            disabled={step !== 1}
          />
          {index < STEPS.length - 1 && (
            <div className='absolute top-[4rem] bottom-[-1.5rem] left-[3.1rem] w-[0.2rem] bg-gray-200' />
          )}
        </div>
      ))}
    </div>
  );
};

export default MissionButtonGroup;
