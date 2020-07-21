import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import LanguageIcon from '@material-ui/icons/Language'

//----------------------------------
// props
//----------------------------------
export interface IconProps {
  icon: string
}

//----------------------------------
// component
//----------------------------------
export const IconComponent = (props: IconProps) => {
  switch (props.icon) {
    case 'twitter':
      return <TwitterIcon />
    case 'facebook':
      return <FacebookIcon />
    case 'website':
      return <LanguageIcon />
    default:
      return <LanguageIcon />
  }
}
