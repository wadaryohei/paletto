import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

//----------------------------------
// props
//----------------------------------
export interface IconProps {
  icon: 'menu' | 'close'
}

export interface MenuIconProps extends IconProps {
  className?: string
  callback: () => void
}

//----------------------------------
// component
//----------------------------------
export const MenuIconComponent = (props: MenuIconProps) => (
  <div className={props.className}>
    {props.icon === 'menu' && (
      <MenuIcon className={props.icon} onClick={() => props.callback()} />
    )}
    {props.icon === 'close' && (
      <CloseIcon className={props.icon} onClick={() => props.callback()} />
    )}
  </div>
)
