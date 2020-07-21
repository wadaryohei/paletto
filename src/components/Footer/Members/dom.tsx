import React from 'react'
import Link from 'next/link'
import { Icon } from '../../Icon/'
import { Member } from '../../../datas/_shared/MemberDatas'
import { SocialDatas } from '../../../datas/_shared/SocialDatas'

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
      {props.memberData.socials?.map((social: SocialDatas, index: number) => {
        return (
          <li key={index}>
            <Link href={{ pathname: social.path }}>
              <a target="_blank">
                <Icon icon={social.name} />
              </a>
            </Link>
          </li>
        )
      })}
    </ul>
  </div>
)
