import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
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
        <TwitterIcon className={'footerMembersSocialsIcon'} />
      )}
      {props.MemberData.facebookPath !== undefined && (
        <FacebookIcon className={'footerMembersSocialsIcon'} />
      )}
    </span>
  </p>
)
