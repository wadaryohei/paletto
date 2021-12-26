import React from 'react'
import { SocialIcon } from '../../Icon/Social'
import { Link } from '../../Link'
import { Typography } from '../../Typography'
import { MemberType } from '../../../datas/_shared/MemberDatas'
import { SocialType } from '../../../datas/_shared/SocialDatas'

//----------------------------------
// props
//----------------------------------
export interface MembersProps {
  memberData: MemberType
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const MembersComponent = (props: MembersProps) => (
  <div className={props.className}>
    <Typography component={'p'} variant={'lead'} colors={'white'} weight={'bold'} family={'en'}>
      {props.memberData.name}
    </Typography>
    <ul className={'membersSocialsList'}>
      {props.memberData.socials?.map((social: SocialType, index: number) => {
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
