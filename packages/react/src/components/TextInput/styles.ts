import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  borderRadius: '$sm',
  backgroundColor: '$gray900',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  border: '2px solid $gray900',

  '&:has(input:focus)': {
    borderColor: '$green300',
  },
  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      sm: {
        padding: '$2 $3',
      },
      md: {
        padding: '$3 $4',
      },
    },
  },

  defaultVariants: {
    variant: 'md',
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: '$regular',
})

export const Input = styled('input', {
  all: 'unset',
  width: '100%',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  color: '$white',
  '&:disabled': {
    cursor: 'not-allowed',
  },
  '&::placeholder': {
    color: '$gray400',
  },
})
