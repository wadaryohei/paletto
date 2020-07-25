import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import LanguageIcon from '@material-ui/icons/Language'

//----------------------------------
// props
//----------------------------------
export interface SocialIconProps {
  icon: string | undefined
}

//----------------------------------
// component
//----------------------------------
export const SocialIconComponent = (props: SocialIconProps) => {
  switch (props.icon) {
    case 'twitter':
      return <TwitterIcon />
    case 'facebook':
      return <FacebookIcon />
    case 'website':
      return <LanguageIcon />
    default:
      return <></>
  }
}
