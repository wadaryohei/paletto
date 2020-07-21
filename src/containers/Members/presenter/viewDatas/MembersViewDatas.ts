export interface MembersViewDatas {
  name: string
  imgPath: string
  socials?: [
    {
      name?: string
      path?: string
      icon?: string
    },
    {
      name?: string
      path?: string
      icon?: string
    },
    {
      name?: string
      path?: string
      icon?: string
    },
  ]
  introduce: string[]
}
