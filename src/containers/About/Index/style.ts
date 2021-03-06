import styled from 'styled-components'
import AboutContainer from './container'
import { Padding } from '../../../const/Padding'
import { Colors } from '../../../const/Colors'
import { max, BreakPoints } from '../../../const/BreakPoints'
import { Margin } from '../../../const/Margin'

//--------------------------------------
// Aboutページ全体のスタイル
//--------------------------------------
export const AboutContainerStyle = styled(AboutContainer)`
  .l-about {
    padding: ${Padding.p160} 0;
    background-color: ${Colors.white};

    @media ${max(BreakPoints.md)} {
      padding: 0 0 ${Padding.p24};
    }
  }

  .l-about-footer {
    margin-top: ${Margin.m104};

    @media ${max(BreakPoints.md)} {
      margin: ${Margin.m64} 0;
    }
  }
`
