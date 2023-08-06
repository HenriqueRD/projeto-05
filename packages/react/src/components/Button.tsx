import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$md',
  fontSize: '$sm',
  fontWeight: '$medium',
  textAlign: 'center',
  fontFamily: '$default',

  minWidth: 120,
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$1 $4',
  gap: '$2',
  cursor: 'pointer',
  transition: 'all 150ms',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  svg: {
    width: '$4',
    height: '$4',
  },

  variants: {
    size: {
      sm: {
        height: 38,
      },
      md: {
        height: 46,
      },
    },
    variants: {
      primary: {
        color: '$white',
        backgroundColor: '$green500',

        '&:not(:disabled):hover': {
          backgroundColor: '$green300',
        },
        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },
      secondary: {
        color: '$green300',
        border: '2px solid $green500',

        '&:not(:disabled):hover': {
          backgroundColor: '$green500',
          color: '$white',
        },
        '&:disabled': {
          backgroundColor: '$gray200',
          borderColor: '$gray200',

          color: '$white',
        },
      },
      tertiary: {
        color: '$white',
        '&:not(:disabled):hover': {
          color: '$gray100',
        },
        '&:disabled': {
          color: '$gray600',
        },
      },
      warn: {
        backgroundColor: '$red500',
        color: '$white',

        '&:not(:disabled):hover': {
          backgroundColor: '$red300',
        },
        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },
    },
  },

  defaultVariants: {
    variants: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}
