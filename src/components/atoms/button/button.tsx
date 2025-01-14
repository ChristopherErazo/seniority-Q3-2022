import { FC, useEffect, useRef } from 'react'

export type ButtonColor = 'complementary' | 'destructive' | 'primary' | 'secondary' | 'tertiary'

export type IconType = '--outlined' | '--round' | '--sharp' | '--two-tone'

export type ButtonSize = 'extra-large' | 'large' | 'medium' | 'small'

export interface ButtonProps {
  color?: ButtonColor
  disabled?: boolean
  href?: string
  iconName?: string
  iconNameRight?: string
  iconType?: IconType
  idelement?: string
  loading?: boolean
  onlyIcon?: boolean
  size?: ButtonSize
  tabIndexNumber?: number
  onClick?: () => void
  children?: React.ReactNode
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const buttonRef = useRef<any>()
  useEffect(() => {
    //buttonRef.current?.addEventListener('clickbutton', props.onClick)
    return () => buttonRef.current.removeEventListener('clickbutton', props.onClick)
  })

  return (
    <button ref={buttonRef} color={props.color} disabled={props.disabled} onClick={props.onClick}>
      {props.children}
    </button>
  )
}
