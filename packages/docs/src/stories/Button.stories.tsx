import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-dordox/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send Test',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variants: {
      options: ['primary', 'secondary', 'tertiary', 'warn'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    disabled: false,
  },
}
export const PrimaryIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Send
        <ArrowRight weight="bold" />
      </>
    ),
  },
}
export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variants: 'secondary',
  },
}
export const Teecondary: StoryObj<ButtonProps> = {
  args: {
    variants: 'tertiary',
  },
}
export const Warn: StoryObj<ButtonProps> = {
  args: {
    variants: 'warn',
  },
}
