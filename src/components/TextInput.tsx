import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes } from 'react';
import { ReactNode } from 'react';





export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps){
    return(
        <div className='flex items-center gap-3 py-4 px-3 h-12 rounded bg-gray-800  w-full  focus-within:ring-2 ring-cyan-300'>
            {props.children}
        </div>
    )
}

export interface TextinputIconProps {
    children: ReactNode;
}

function TextInputIcon(props: TextinputIconProps){
    return (
        <Slot className=' w-6 h-6 text-gray-400'>
            {props.children}
        </Slot>
    )
}


TextInputIcon.displayName = 'TextInputIcon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{}
function TextInputInput(props: TextInputInputProps){
    return(
        <input className= "bg-transparent flex-1 text-gray-100 text-xs outline-none placeholder:text-gray-400"
                {...props}
        />
        
    )
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}