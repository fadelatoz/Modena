import React, { ReactNode, ComponentProps } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export interface CardProps extends ComponentProps<"div"> {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card = ({
  children,
  className,
  hoverEffect = true,
  ...props
}: CardProps) => {
  return (
    <div
      {...props}
      className={twMerge(
        "group relative overflow-hidden rounded-large bg-background border border-border/50 shadow-medium p-8 transition-all duration-300",
        hoverEffect &&
          "hover:shadow-large hover:-translate-y-2 hover:scale-[1.02] transition-hover",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
