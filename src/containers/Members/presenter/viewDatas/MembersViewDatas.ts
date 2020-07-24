import { Social } from '../../../../datas/_shared/SocialDatas'

export interface MembersViewDatas {
  name: string
  imgPathname: string
  socials?: Social[]
  introduce: string[]
}
