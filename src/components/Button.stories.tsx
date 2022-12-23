import {Meta, StoryObj} from '@storybook/react'
import { Button,ButtonProps } from './Button'

export default { //criando componentes no storybook
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Create account',
        size: 'lg',
    },
    argTypes: { // coloca argumentos de tamanho
    
    }
} as Meta<ButtonProps>

export const Default : StoryObj<ButtonProps> = {}

