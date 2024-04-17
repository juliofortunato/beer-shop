import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "outline" | "icon";
}

export default function Button({ children, variant, ...rest }: ButtonProps) {
  const classes = clsx("rounded-xl", {
    "p-4 bg-primary text-white font-medium w-full h-full":
      variant === "primary",
    "p-4 bg-white border border-primary text-primary": variant === "outline",
    "p-2 bg-white rounded-xl": variant === "icon",
  });

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
