import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-dordox/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Hello Text!',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxx',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const Custom: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
    size: 'sm',
  },
}
