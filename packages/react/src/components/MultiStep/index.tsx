/* eslint-disable @typescript-eslint/no-empty-interface */
import { ComponentProps } from 'react'
import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps {
  size: number
  curentStep: number
}
export function MultiStep({ size = 1, curentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label size="xs">
        Passo {curentStep} de {size}
      </Label>
      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={curentStep >= step} />
        })}
      </Steps>
    </MultiStepContainer>
  )
}
