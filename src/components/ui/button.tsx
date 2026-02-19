import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-soft-sm hover:bg-primary/90 hover:shadow-soft-md active:scale-[0.98]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-soft-sm hover:bg-destructive/90",
        outline:
          "border border-border bg-background shadow-soft-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-soft-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // PMF Custom variants
        hero: "bg-primary text-primary-foreground shadow-soft-md hover:shadow-soft-lg hover:bg-primary/95 active:scale-[0.98] text-base px-6 py-3",
        "hero-secondary": "bg-transparent border-2 border-primary text-primary hover:bg-primary/5 active:scale-[0.98] text-base px-6 py-3",
        sage: "bg-sage text-sage-foreground shadow-soft-sm hover:bg-sage/90 hover:shadow-soft-md active:scale-[0.98]",
        "sage-outline": "border border-sage text-sage hover:bg-sage-light active:scale-[0.98]",
        nav: "text-muted-foreground hover:text-foreground hover:bg-accent/50 font-normal transition-colors",
        "nav-cta": "bg-primary text-primary-foreground hover:bg-primary/90 font-medium",
        "nav-cta-primary": "bg-primary text-primary-foreground hover:bg-primary/95 font-semibold shadow-md hover:shadow-lg px-5 py-2.5 rounded-lg transition-all duration-200",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
