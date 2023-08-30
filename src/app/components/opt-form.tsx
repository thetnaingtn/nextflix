import { ButtonProps, DivProps, InputProps, ParagraphProps } from '@/types';
import { twMerge as tm } from 'tailwind-merge';

function OptForm({ children, className, ...restProps }: DivProps) {
  return (
    <div
      className={tm('flex justify-center h-full mt-5 flex-wrap', className)}
      {...restProps}
    >
      {children}
    </div>
  );
}

function Input({ className, ...restProps }: InputProps) {
  return (
    <input
      className={tm(
        'max-w-[450px] w-full border-0 p-[10px] h-[70px] box-border',
        className
      )}
      {...restProps}
    />
  );
}

function Break({ children, className, ...restProps }: DivProps) {
  return (
    <div className={tm('basis-full h-0', className)} {...restProps}>
      {children}
    </div>
  );
}

function Button({ children, className, ...restProps }: ButtonProps) {
  return (
    <button
      className={tm(
        'flex items-center h-[70px] bg-[#e50914] text-white uppercase py-0 px-8 font-[26px] cursor-pointer border-0 hover:bg-[#f40612]',
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
}

function Text({ children, className, ...restProps }: ParagraphProps) {
  return (
    <p
      className={tm(
        'text-[19.2px] text-white text-center my-[19.2px]',
        className
      )}
      {...restProps}
    >
      {children}
    </p>
  );
}

export default Object.assign(OptForm, { Input, Break, Button, Text });
