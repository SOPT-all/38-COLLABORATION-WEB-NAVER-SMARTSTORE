import { cn } from "@shared/utils/cn";

type ButtonColor = "white" | "green" | "gray";
type ButtonSize = "default" | "large";

interface ButtonProps {
  color?: ButtonColor;
  size?: ButtonSize;
  children: string;
  onClick?: () => void;
}

const BUTTON_COLOR_CLASS = {
  white: cn(
    "border-gray-200 bg-white text-gray",
    "hover:bg-gray-50",
    "active:bg-gray-200",
  ),
  green: cn(
    "border-green bg-green text-white",
    "hover:border-green-hovered hover:bg-green-hovered",
    "active:border-green-pressed active:bg-green-pressed",
  ),
  gray: cn(
    "border-gray-400 bg-gray-400 text-white",
    "hover:bg-gray-hovered",
    "active:bg-gray-pressed",
  ),
};

const BUTTON_SIZE_CLASS = {
  default: "h-[3.4rem] w-[11.6rem]",
  large: "h-[3.4rem] w-[15rem]",
};

const Button = ({
  color = "green",
  size = "default",
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "inline-flex shrink-0 items-center justify-center",
        "body-md-12 border whitespace-nowrap",
        "transition-colors duration-100 ease-out",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500",
        BUTTON_COLOR_CLASS[color],
        BUTTON_SIZE_CLASS[size],
      )}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
