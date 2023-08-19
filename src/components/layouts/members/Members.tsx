import React from 'react'
import { Link } from '@/components/elements/link'
import { Typography } from '@/components/elements/typography'
import { MemberType } from '@/datas/MemberDatas'
import { SocialType } from '@/datas/SocialDatas'

//----------------------------------
// props
//----------------------------------
export interface Props {
  memberData: MemberType
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const Index = (props: Props) => (
  <div className={props.className}>
    <Typography component={'p'} variant={'lead'} colors={'white'} weight={'bold'} family={'en'}>
      {props.memberData.name}
    </Typography>
    <ul className={'membersSocialsList'}>
      {props.memberData.socials?.map((social: SocialType, index: number) => {
        return (
          <li key={index}>
            <Link target={true} href={social.path}>
              {social.name}
            </Link>
          </li>
        )
      })}
    </ul>
  </div>
)
