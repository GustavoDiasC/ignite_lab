import {Meta, StoryObj} from '@storybook/react'
import { Heading,HeadingProps } from './Heading'

export default { //criando componentes no storybook
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Lorem ipsum.',
        size: 'lg',
    },
    argTypes: { // coloca argumentos de tamanho
        size: {
            options: ['sm','md','lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<HeadingProps>

export const Default : StoryObj = {}

export const Small : StoryObj<HeadingProps> = {
    args:{
        size:'sm'
    }
}

export const Large : StoryObj<HeadingProps> = {
    args:{
        size: 'lg'
    }
}

export const CustomComponent : StoryObj<HeadingProps> = { // componente customizado por slot
    args:{
        asChild: true,
        children: (
            <h1>Testando</h1>
        )
    },
    argTypes:{
        children:{
            table:{
                disable: true,
            }
        },
        asChild: {
            table:{
                disable:true,
            }
        }
    }
}
