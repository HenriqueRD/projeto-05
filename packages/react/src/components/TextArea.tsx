import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  padding: '$3',
  borderRadius: '$md',
  backgroundColor: '$gray900',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  color: '$white',
  border: '2px solid $gray900',
  resize: 'vertical',
  minHeight: 80,
  '&:focus': {
    outline: 0,
    borderColor: '$green300',
  },
  '&::placeholder': {
    color: '$gray400',
  },
  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {
  as?: ElementType
}
