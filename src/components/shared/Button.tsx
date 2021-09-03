import Link from "next/link";
import { CSSProperties, FC } from "react";

interface IButtonProps {
  bgColor: "primary" | "secondary" | "secondary-light" | "highlight";
  style?: CSSProperties;
  link?: string;
  customDim?: string;
  customTwClass?: string;
}

const btnStyles = {
  bgColor: {
    primary: "bg-primary",
    secondary: "bg-secondary",
    highlight: "bg-highlight",
    "secondary-light": "bg-gray-900",
  },
  hoverColor: {
    primary: "bg-highlight",
    secondary: "bg-highlight",
    highlight: "bg-secondary",
    "secondary-light": "bg-gray-800",
  },
};

export const Button: FC<IButtonProps> = ({
  children,
  bgColor,
  style,
  link,
  customDim = "w-52 h-12",
  customTwClass = "",
}) => {
  return link ? (
    <Link href={link}>
      <button
        className={`outline-none border-none ${btnStyles.bgColor[bgColor]} rounded-sm hover:${btnStyles.hoverColor[bgColor]} transition-colors duration-300 ${customDim} ${customTwClass}`}
        style={style}
      >
        {children}
      </button>
    </Link>
  ) : (
    <button
      className={`outline-none border-none w-52 h-12 ${btnStyles.bgColor[bgColor]} rounded-sm hover:${btnStyles.hoverColor[bgColor]} transition-colors duration-300 ${customDim} ${customTwClass}`}
      style={style}
    >
      {children}
    </button>
  );
};
