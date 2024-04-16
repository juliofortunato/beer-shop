import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button className="p-2 bg-white rounded-xl" {...rest}>
      {children}
    </button>
  );
}
