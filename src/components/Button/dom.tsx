import React from 'react'
import { Link } from '../Link/'
import { LinkComponentProps } from '../Link/dom'

//----------------------------------
// props
//----------------------------------
export interface ButtonProps {
  className?: string
  children?: React.ReactNode
  color?: 'primary' | 'border'
  size?: 'sm' | 'md' | 'lg'
  type?: 'submit' | 'reset' | undefined
  disabled?: boolean
  callback: () => void
}

export interface LinkButtonProps
  extends Pick<LinkComponentProps, 'href' | 'target' | 'routeMatch'> {
  className?: string
  children?: React.ReactNode
  color?: 'primary'
  size?: 'sm' | 'md' | 'lg'
}

//----------------------------------
// component
//----------------------------------
export const ButtonComponent = (props: ButtonProps) => (
  <button
    onClick={() => props.callback()}
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
