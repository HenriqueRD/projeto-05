import { styled } from '../../styles'
import { Text } from '../Text'

export const MultiStepContainer = styled('div', {})

export const Label = styled(Text, {
  color: '$gray200',
})

export const Steps = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
  gap: '$2',
  marginTop: '$1',
})

export const Step = styled('div', {
  backgroundColor: '$gray500',
  width: '100%',
  height: '$1',
  borderRadius: '$px',
  transition: 'all 150ms',
  variants: {
    active: {
      true: {
        backgroundColor: '$gray200',
      },
    },
  },
})
