import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@ignite-dordox/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {
    placeholder: 'Text input placeholder',
    prefix: '',
    sizes: 'md',
    disabled: false,
  },
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {}

export const PrimaryPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: '.test.ts/',
  },
}
