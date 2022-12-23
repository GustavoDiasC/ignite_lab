import { Slot } from '@radix-ui/react-slot';
import { ReactNode  } from 'react';
import {clsx} from 'clsx';

export interface TextProps{
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean; // feito para utilizar o slot como um parametro ternario
    className?: string;
}

export function Text({size = 'md',children, asChild, className}: TextProps){
    const Comp = asChild? Slot : 'span'; //utilizando slot
    return(
       <Comp className={clsx(
            'text-gray-100 font-sans',
            {
                'text-xs': size === 'sm',
                'text-sm': size === 'md',
                'text-md': size === 'lg',
            },
            className,
       )}>
        {children}
        </Comp>
    )
}