import React, { createContext, useContext, useState, useEffect } from 'react';
import { cn } from '../../utils/cn';

type TabsContextValue = {
  value: string;
  onValueChange: (value: string) => void;
};

const TabsContext = createContext<TabsContextValue | undefined>(undefined);

export const Tabs = ({
  defaultValue,
  value,
  onValueChange,
  children,
  className,
  ...props
}: {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}) => {
  const [tabValue, setTabValue] = useState(value || defaultValue || '');
  
  useEffect(() => {
    if (value !== undefined) {
      setTabValue(value);
    }
  }, [value]);
  
  const handleValueChange = (newValue: string) => {
    setTabValue(newValue);
    onValueChange?.(newValue);
  };
  
  return (
    <TabsContext.Provider value={{ value: tabValue, onValueChange: handleValueChange }}>
      <div className={cn('w-full', className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

export const TabsList = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div 
      className={cn(
        'inline-flex items-center justify-center rounded-lg bg-gray-100 p-1', 
        className
      )} 
      role="tablist" 
      {...props}
    >
      {children}
    </div>
  );
};

export const TabsTrigger = ({
  value,
  children,
  className,
  disabled,
  ...props
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}) => {
  const context = useContext(TabsContext);
  
  if (!context) {
    throw new Error('TabsTrigger must be used within a Tabs component');
  }
  
  const isActive = context.value === value;
  
  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      disabled={disabled}
      className={cn(
        'inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium transition-all',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
        isActive 
          ? 'bg-white shadow text-gray-900' 
          : 'text-gray-600 hover:text-gray-900',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      onClick={() => context.onValueChange(value)}
      {...props}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({
  value,
  children,
  className,
  ...props
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const context = useContext(TabsContext);
  
  if (!context) {
    throw new Error('TabsContent must be used within a Tabs component');
  }
  
  const isActive = context.value === value;
  
  if (!isActive) return null;
  
  return (
    <div 
      role="tabpanel"
      className={cn('mt-2 ring-offset-white focus:outline-none', className)}
      {...props}
    >
      {children}
    </div>
  );
};