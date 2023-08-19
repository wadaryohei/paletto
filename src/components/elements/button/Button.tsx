import React from 'react'
import { Link } from '@/components/elements/link'
import { Props } from '@/components/elements/link/Link'

//----------------------------------
// props
//----------------------------------
export interface BaseProps {
  className?: string
  children?: React.ReactNode
  color?: 'primary' | 'border'
  size?: 'sm' | 'md' | 'lg'
}

export interface ButtonProps extends BaseProps {
  type?: 'submit'
  disabled?: boolean
}

export interface FormButtonProps extends BaseProps {
  type?: 'submit'
  disabled?: boolean
  onClick: () => void
}

export interface LinkButtonProps extends BaseProps, Pick<Props, 'href' | 'target' | 'routeMatch'> {}

//----------------------------------
// component
//----------------------------------
export const ButtonComponent = (props: ButtonProps) => (
  <button type={props.type} className={`${props.className} ${props.color} ${props.size}`} disabled={props.disabled}>
    {props.children}
  </button>
)

export const FormButtonComponent = (props: FormButtonProps) => (
  <button
    onClick={() => props.onClick()}
    type={props.type}
    className={`${props.className} ${props.color} ${props.size}`}
    disabled={props.disabled}
  >
    {props.children}
  </button>
)

export const LinkButtonComponent = (props: LinkButtonProps) => (
  <Link className={props.className} href={props.href} target={props.target} routeMatch={false}>
    <button className={`${props.color} ${props.size}`}>{props.children}</button>
  </Link>
)
