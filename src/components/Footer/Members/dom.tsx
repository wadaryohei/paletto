import React from 'react'
import { SocialIcon } from '../../Icon/Social'
import { Link } from '../../Link'
import { Member } from '../../../datas/_shared/MemberDatas'
import { Social } from '../../../datas/_shared/SocialDatas'
import { Typography } from '../../Typography'

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
    <Typography
      component={'p'}
      variant={'lead'}
      colors={'white'}
      weight={'bold'}
      family={'en'}
    >
      {props.memberData.name}
    </Typography>
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
