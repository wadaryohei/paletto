import { MembersViewDatas } from './viewDatas/MembersViewDatas'
import { useStringProcessing } from '../../../../hooks/useStringProcessing'
import { Member } from '../../../../datas/_shared/MemberDatas'

//----------------------------------
// presenter
//----------------------------------
export interface MembersPresenter {
  membersViewDatas: () => MembersViewDatas[]
}

//----------------------------------
// cutom hooks
//----------------------------------
export const useMembersPresenter = (
  memberDatas: Member[],
): MembersPresenter => {
  //----------------------------------
  // hooks
  //----------------------------------
  const stringProcessing = useStringProcessing()

  //----------------------------------
  // MembersViewDatas
  //----------------------------------
  /**
   * Membersに使用するViewDatas
   */
  const membersViewDatas = (): MembersViewDatas[] => {
    return memberDatas.map((memberData: Member) => {
      return {
        name: memberData.name,
        imgPathname: memberData.imgPathname,
        socials: memberData.socials,
        introduce: stringProcessing.strToSplit(memberData.introduce),
      }
    })
  }

  return { membersViewDatas }
}
