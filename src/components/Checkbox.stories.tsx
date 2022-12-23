import {Meta, StoryObj} from '@storybook/react'
import { Checkbox,CheckboxProps } from './Checkbox'
import { Text } from './text';

export default { //criando componentes no storybook
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {
        children: 'Create account',
        size: 'lg',
    },
    argTypes: {},
    decorators: [
        /*(Story) ==> {
            return(
                <div clasName="Flex items-center gap-2">
                    {Story()}
                    <Text size="sm">Lembrar-me de mim por 30 dias</Text>
                </div>
                )
            }*/
         ],  
} as Meta<CheckboxProps>

export const Default : StoryObj<CheckboxProps> = {}

