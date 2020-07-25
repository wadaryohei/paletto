import styled from 'styled-components'
import ServicesDevelopmentContainer from './container'
import { Colors } from '../../../const/Colors'
import { Margin } from '../../../const/Margin'

//--------------------------------------
// Services/Developmentページ全体のスタイル
//--------------------------------------
export const ServicesDevelopmentStyle = styled(ServicesDevelopmentContainer)`
  position: relative;
  background-color: ${Colors.smokeGray};

  .l-section-partner {
    margin-top: ${Margin.m160};
  }

  .l-section-solution {
    margin-top: ${Margin.m160};
  }

  .l-section-banner {
    margin-top: ${Margin.m64};
  }
`
