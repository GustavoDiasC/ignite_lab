import {Meta, StoryObj} from '@storybook/react'
import { Text,TextProps } from './text'

export default { //criando componentes no storybook
    title: 'Components/Text',
    component: Text,
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
} as Meta<TextProps>

export const Default : StoryObj = {}

export const Small : StoryObj<TextProps> = {
    args:{
        size:'sm'
    }
}

export const Large : StoryObj<TextProps> = {
    args:{
        size: 'lg'
    }
}

export const CustomComponent : StoryObj<TextProps> = { // componente customizado por slot
    args:{
        asChild: true,
        children:(
            <p>Testando com p</p>
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
