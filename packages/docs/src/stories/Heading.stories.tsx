import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-dordox/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Hello Heading!',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
export const Custom: StoryObj<HeadingProps> = {
  args: {
    children: 'h1 Heading!',
    as: 'h1',
  },
}
