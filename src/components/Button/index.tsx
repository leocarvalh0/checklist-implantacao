import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
  icon?: React.ReactNode
}

const Button = ({ children, variant = 'primary', icon, ...rest }: Props) => {
  return (
    <S.Button variant={variant} {...rest}>
      {icon && <span>{icon}</span>}
      {children}
    </S.Button>
  )
}

export default Button
