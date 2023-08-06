import { ComponentProps, ElementType } from 'react'
import { Check } from 'phosphor-react'
import { CheckBoxContainer, CheckBoxIndicator } from './styles'

export interface CheckBoxProps
  extends ComponentProps<typeof CheckBoxContainer> {
  as?: ElementType
}

export function CheckBox(props: CheckBoxProps) {
  return (
    <CheckBoxContainer {...props}>
      <CheckBoxIndicator asChild>
        <Check weight="bold" />
      </CheckBoxIndicator>
    </CheckBoxContainer>
  )
}
