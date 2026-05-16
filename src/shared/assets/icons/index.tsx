import type { SVGProps } from 'react';

import IcAlarmSvg from './ic_alarm.svg?react';
import IcArrowDownSvg from './ic_arrow_down.svg?react';
import IcArrowRightSvg from './ic_arrow_right.svg?react';
import IcArrowUpSvg from './ic_arrow_up.svg?react';
import IcArrowUp1Svg from './ic_arrow_up-1.svg?react';
import IcHeartSvg from './ic_heart.svg?react';
import IcHelpSvg from './ic_help.svg?react';
import IcMakeItemSvg from './ic_makeItem.svg?react';
import IcProhibitSvg from './ic_prohibit.svg?react';
import IcQuestionSvg from './ic_question.svg?react';
import IcSearchSvg from './ic_search.svg?react';
import IcSearch2Svg from './ic_search2.svg?react';
import IcSolutionSvg from './ic_solution.svg?react';
import IcTalktalkSvg from './ic_talktalk.svg?react';
import IcTodoSvg from './ic_todo.svg?react';
import IcTooltipSvg from './ic_tooltip.svg?react';
import IconUpSvg from './icon_up.svg?react';

type SvgProps = SVGProps<SVGSVGElement>;

// 멀티컬러
export const IcAlarm = (props: SvgProps) => <IcAlarmSvg {...props} />;
export const IcHelp = (props: SvgProps) => <IcHelpSvg {...props} />;
export const IcSolution = (props: SvgProps) => <IcSolutionSvg {...props} />;
export const IcTalktalk = (props: SvgProps) => <IcTalktalkSvg {...props} />;
export const IcTodo = (props: SvgProps) => <IcTodoSvg {...props} />;

// 단색
export const IcArrowDown = ({
  className = 'text-gray',
  ...props
}: SvgProps) => <IcArrowDownSvg className={className} {...props} />;
export const IcHeart = ({ className = 'text-gray', ...props }: SvgProps) => (
  <IcHeartSvg className={className} {...props} />
);

export const IcArrowRight = ({
  className = 'text-gray',
  ...props
}: SvgProps) => <IcArrowRightSvg className={className} {...props} />;
export const IcArrowUp = ({ className = 'text-gray', ...props }: SvgProps) => (
  <IcArrowUpSvg className={className} {...props} />
);
export const IcArrowUp1 = ({
  className = 'text-white',
  ...props
}: SvgProps) => <IcArrowUp1Svg className={className} {...props} />;
export const IcProhibit = ({ className = 'text-red', ...props }: SvgProps) => (
  <IcProhibitSvg className={className} {...props} />
);
export const IcQuestion = ({
  className = 'text-green',
  ...props
}: SvgProps) => <IcQuestionSvg className={className} {...props} />;
export const IcSearch = ({
  className = 'text-text-gray',
  ...props
}: SvgProps) => <IcSearchSvg className={className} {...props} />;
export const IcSearch2 = ({
  className = 'text-gray-300',
  ...props
}: SvgProps) => <IcSearch2Svg className={className} {...props} />;
export const IcTooltip = ({
  className = 'text-[#BFBFBF]',
  ...props
}: SvgProps) => <IcTooltipSvg className={className} {...props} />;
export const IconUp = ({ className = 'text-white', ...props }: SvgProps) => (
  <IconUpSvg className={className} {...props} />
);
export const IcMakeItem = ({
  className = 'text-white',
  ...props
}: SvgProps) => <IcMakeItemSvg className={className} {...props} />;
