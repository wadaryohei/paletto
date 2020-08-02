import { ThinkLeadDatas, ThinkLeadViewDatas } from './datas'
import { useStringProcessing } from '../../../../hooks/useStringProcessing'

//----------------------------------
// presenter
//----------------------------------
export interface PresenterType {
  viewDatas: () => ThinkLeadViewDatas
}

//----------------------------------
// cutom hooks
//----------------------------------
export const Presenter = (): PresenterType => {
  const stringProcessing = useStringProcessing()

  const viewDatas = (): ThinkLeadViewDatas => {
    return {
      leads: stringProcessing.strToSplit(ThinkLeadDatas.lead),
    }
  }

  return { viewDatas }
}
