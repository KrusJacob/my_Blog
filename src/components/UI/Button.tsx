import React, { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import { IconType } from "react-icons";

interface IButtonProps {
  Icon?: IconType;
  rounded?: "default" | "left" | "right";
  children: ReactNode;
  color?: "default" | "red";
}
type TypeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & IButtonProps;

const Button = forwardRef<HTMLButtonElement, TypeButtonProps>(
  ({ Icon, children, rounded, color, ...rest }, ref) => {
    const bgColor = !color || color === "default" ? "bg-[var(--purpleColor)]" : "bg-red-700";
    const hoverColor = !color || color === "default" ? "hover:bg-purple-600" : "hover:bg-red-600";
    const roundedType = !rounded ? "" : rounded === "left" ? "rounded-bl-3xl" : "rounded-br-3xl";

    return (
      <button
        ref={ref}
        {...rest}
        className={`${bgColor} rounded ${roundedType} text-2xl w-max text-white px-6 py-2 cursor-pointer group ${hoverColor} duration-150 disabled:bg-opacity-40`}
      >
        <div className="flex gap-3 items-center group-hover:-translate-x-3 duration-300">
          {Icon && <Icon />}
          <span className="text-base md:text-xl">{children}</span>
        </div>
      </button>
    );
  }
);

export default Button;
