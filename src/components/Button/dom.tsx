import React from 'react'
import { Link } from '../Link/'
import { LinkComponentProps } from '../Link/dom'

//----------------------------------
// props
//----------------------------------
export interface ButtonProps {
  className?: string
  children?: React.ReactNode
  color?: 'primary'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  onClick: (event: React.FormEvent<HTMLFormElement>) => void
}

export interface LinkButtonProps
  extends Pick<LinkComponentProps, 'href' | 'target' | 'routeMatch'> {
  className?: string
  children?: React.ReactNode
  color?: 'primary'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

//----------------------------------
// component
//----------------------------------
export const ButtonComponent = (props: ButtonProps) => (
  <button
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
    <button
      className={`${props.color} ${props.size}`}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  </Link>
)
