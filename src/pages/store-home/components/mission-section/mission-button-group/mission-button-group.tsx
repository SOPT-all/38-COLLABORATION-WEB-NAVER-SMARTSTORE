import { useState } from 'react';
import { cn } from '@shared/utils/cn';

import MissionButton from './mission-button';

const STEPS = [
  { step: 1, label: '첫 상품 등록하기' },
  { step: 2, label: '스토어 꾸미기' },
  { step: 3, label: '고객 문의 응대하기' },
  { step: 4, label: '마케팅 설정하기' },
];

const MissionButtonGroup = ({ className }: { className?: string }) => {
  const [selected, setSelected] = useState(1);

  return (
    <div
      className={cn(
        'relative flex flex-col items-start self-stretch',
        className,
      )}
    >
      {STEPS.map(({ step, label }, index) => (
        <div
          key={step}
          className='relative flex flex-col'
          style={{ marginBottom: index < STEPS.length - 1 ? '0.7rem' : 0 }}
        >
          <MissionButton
            step={step}
            label={label}
            isSelected={selected === step}
            disabled={step !== 1}
            onClick={() => setSelected(step)}
          />
          {index < STEPS.length - 1 && (
            <div className='absolute top-[4rem] bottom-[-1.5rem] left-[3.2rem] w-[0.2rem] bg-gray-200' />
          )}
        </div>
      ))}
    </div>
  );
};

export default MissionButtonGroup;
