import styled from 'styled-components'
import ServicesDesignContainer from './container'
import { Colors } from '../../../const/Colors'
import { Margin } from '../../../const/Margin'

//--------------------------------------
// Services/Designページ全体のスタイル
//--------------------------------------
export const ServicesDesignStyle = styled(ServicesDesignContainer)`
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
