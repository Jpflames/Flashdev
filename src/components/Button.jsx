import { forwardRef } from 'react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const Button = forwardRef(({ 
  className, 
  variant = 'primary', 
  size = 'default', 
  asChild = false,
  href,
  to,
  children,
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-brand-primary-alt hover:shadow-[0_0_20px_rgba(57,181,74,0.6)] hover:-translate-y-0.5 transform transition-all duration-300",
    secondary: "bg-brand-dark text-white hover:bg-brand-darker hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 transform transition-all duration-300",
    outline: "border border-brand-border bg-transparent hover:bg-brand-light text-brand-darker hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300",
    ghost: "hover:bg-brand-light text-brand-gray hover:text-brand-darker transition-all duration-300",
  };
  
  const sizes = {
    default: "h-12 px-6 py-2 text-base",
    sm: "h-9 px-4 text-sm",
    lg: "h-14 px-8 text-lg",
    icon: "h-12 w-12",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (to) {
    return (
      <Link to={to} className={classes} ref={ref} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} ref={ref} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} ref={ref} {...props}>
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
