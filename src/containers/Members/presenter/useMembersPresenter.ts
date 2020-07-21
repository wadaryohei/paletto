import { MembersViewDatas } from './viewDatas/MembersViewDatas'
import { useStringProcessing } from '../../../hooks/useStringProcessing'
import { Member } from '../../../datas/_shared/MemberDatas'

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
   * Heroに使用するViewDatas
   */
  const membersViewDatas = (): MembersViewDatas[] => {
    return memberDatas.map((memberData: Member) => {
      return {
        name: memberData.name,
        imgPath: memberData.imgPath,
        socials: memberData.socials,
        introduce: stringProcessing.strToSplit(memberData.introduce),
      }
    })
  }

  return { membersViewDatas }
}
