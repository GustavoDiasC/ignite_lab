import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import {clsx} from 'clsx';


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    asChild?: boolean; // feito para utilizar o slot como um parametro ternario
}

export function Button({children, className, asChild, ...props}: ButtonProps){
    const Comp = asChild ? Slot : 'button'; //utilizando slot
    return(
       <Comp className={clsx(
            'py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300 focus:ring-2 ring-white',
            className,
       )}
       {...props}
       >
        {children}
        </Comp>
    )
}