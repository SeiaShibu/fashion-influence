import { cn } from '../../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outlined' | 'glass';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hoverEffect?: boolean;
}

const Card = ({
  className,
  variant = 'default',
  padding = 'md',
  hoverEffect = true,
  children,
  ...props
}: CardProps) => {
  const baseStyles = 'rounded-xl overflow-hidden transition-all duration-300';
  
  const variantStyles = {
    default: 'bg-white shadow-md',
    outlined: 'bg-white border border-gray-200',
    glass: 'bg-white/70 backdrop-blur-lg shadow-sm',
  };
  
  const paddingStyles = {
    none: '',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-7',
  };
  
  const hoverStyles = hoverEffect 
    ? 'hover:shadow-lg transform hover:-translate-y-1'
    : '';
  
  return (
    <div
      className={cn(
        baseStyles,
        variantStyles[variant],
        paddingStyles[padding],
        hoverStyles,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;