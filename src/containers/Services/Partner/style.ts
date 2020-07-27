import styled from 'styled-components'
import ServicesPartnerContainer from './container'
import { Colors } from '../../../const/Colors'
import { Margin } from '../../../const/Margin'

//--------------------------------------
// Services/Designページ全体のスタイル
//--------------------------------------
export const ServicesPartnerStyle = styled(ServicesPartnerContainer)`
  background-color: ${Colors.smokeGray};

  .l-section-partner {
    margin-top: ${Margin.m160};
  }

  .l-section-solution {
    margin-top: ${Margin.m64};
  }

  .l-section-banner {
    margin-top: ${Margin.m64};
  }

  .l-section-subscription {
    margin-top: ${Margin.m112};
  }
`
