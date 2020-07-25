import styled from 'styled-components'
import ServicesContainer from './container'
import { Padding } from '../../../const/Padding'
import { Colors } from '../../../const/Colors'
import { BreakPoints, max } from '../../../const/BreakPoints'

//--------------------------------------
// Servicesページ全体のスタイル
//--------------------------------------
export const ServicesContainerStyle = styled(ServicesContainer)`
  .l-services-intro {
    padding: ${Padding.p160} 0;
    background-color: ${Colors.white};

    @media ${max(BreakPoints.md)} {
      padding: ${Padding.p80} 0;
    }
  }

  .l-services {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding: ${Padding.p32} ${Padding.p16} 0;
    background-color: ${Colors.white};
  }
`
