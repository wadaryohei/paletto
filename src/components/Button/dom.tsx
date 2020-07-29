import React from 'react'
import { Link } from '../Link/'
import { LinkComponentProps } from '../Link/dom'

//----------------------------------
// props
//----------------------------------
export interface ButtonBaseProps {
  className?: string
  children?: React.ReactNode
  color?: 'primary' | 'border'
  size?: 'sm' | 'md' | 'lg'
}

export interface ButtonProps extends ButtonBaseProps {
  type?: 'submit'
  disabled?: boolean
}

export interface LinkButtonProps
  extends ButtonBaseProps,
    Pick<LinkComponentProps, 'href' | 'target' | 'routeMatch'> {}

//----------------------------------
// component
//----------------------------------
export const ButtonComponent = (props: ButtonProps) => (
  <button
    type={props.type}
    className={`${props.className} ${props.color} ${props.size}`}
    disabled={props.disabled}
  >
    {props.children}
  </button>
)

export const LinkButtonComponent = (props: LinkButtonProps) => (
  <Link
    className={props.className}
    href={props.href}
    target={props.target}
    routeMatch={false}
  >
    <button className={`${props.color} ${props.size}`}>{props.children}</button>
  </Link>
)
