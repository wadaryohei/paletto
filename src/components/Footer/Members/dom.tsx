import React from 'react'
import Link from 'next/link'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import LanguageIcon from '@material-ui/icons/Language'
import { Member } from '../../../datas/_shared/MemberDatas'

//----------------------------------
// props
//----------------------------------
export interface MembersProps {
  MemberData: Member
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const MembersComponent = (props: MembersProps) => (
  <p className={props.className}>
    {props.MemberData.name}
    <span className={'footerMembersSocialsIconWrapper'}>
      {props.MemberData.twitterPath !== undefined && (
        <Link href={{ pathname: props.MemberData.twitterPath }}>
          <a target="_blank">
            <TwitterIcon className={'footerMembersSocialsIcon'} />
          </a>
        </Link>
      )}
      {props.MemberData.facebookPath !== undefined && (
        <Link href={{ pathname: props.MemberData.facebookPath }}>
          <a target="_blank" className={'footerMembersSocialsIcon'}>
            <FacebookIcon />
          </a>
        </Link>
      )}
      {props.MemberData.webSitePath !== undefined && (
        <Link href={{ pathname: props.MemberData.webSitePath }}>
          <a target="_blank" className={'footerMembersSocialsIcon'}>
            <LanguageIcon />
          </a>
        </Link>
      )}
    </span>
  </p>
)
