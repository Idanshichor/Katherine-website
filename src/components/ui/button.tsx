import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold tracking-widest uppercase transition-all duration-500 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-[var(--color-brand-pink)] text-white hover:bg-[#E01E79] shadow-premium hover:-translate-y-1": variant === "primary",
            "bg-[var(--color-brand-purple)] text-white hover:bg-[#7244D4] shadow-premium hover:-translate-y-1": variant === "secondary",
            "bg-transparent text-[var(--color-brand-black)] border border-gray-300 hover:border-black": variant === "outline",
            "h-12 px-8": size === "default",
            "h-10 px-6 text-xs": size === "sm",
            "h-16 px-12 text-base": size === "lg",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
