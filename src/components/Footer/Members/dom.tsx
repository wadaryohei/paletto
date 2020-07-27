import React from 'react'
import { SocialIcon } from '../../Icon/Social'
import { Link } from '../../Link'
import { Member } from '../../../datas/_shared/MemberDatas'
import { Social } from '../../../datas/_shared/SocialDatas'

//----------------------------------
// props
//----------------------------------
export interface MembersProps {
  memberData: Member
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const MembersComponent = (props: MembersProps) => (
  <div className={props.className}>
    {props.memberData.name}
    <ul className={'membersSocialsList'}>
      {props.memberData.socials?.map((social: Social, index: number) => {
        return (
          <li key={index}>
            <Link target={true} href={social.path}>
              <SocialIcon icon={social.name} />
            </Link>
          </li>
        )
      })}
    </ul>
  </div>
)
