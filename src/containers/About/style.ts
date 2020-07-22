import styled from 'styled-components'
import AboutContainer from './container'
import { Padding } from '../../const/Padding'
import { Margin } from '../../const/Margin'
import { Colors } from '../../const/Colors'
import { FontSize } from '../../const/FontSize'
import { max, BreakPoints } from '../../const/BreakPoints'

//--------------------------------------
// Aboutページ全体のスタイル
//--------------------------------------
export const AboutContainerStyle = styled(AboutContainer)`
  position: relative;

  .l-about {
    padding: ${Padding.p160} 0;
    background-color: ${Colors.white};

    .aboutWrapper {
      padding: ${Padding.p112};
      border: solid 4px ${Colors.black};
      background-color: ${Colors.white};

      @media ${max(BreakPoints.md)} {
        padding: ${Padding.p112} ${Padding.p16};
      }
    }

    .aboutHeaderWrapper {
      margin-bottom: ${Margin.m64};
    }

    .aboutSubHeadingWrapper {
      margin-top: ${Margin.m64};
    }

    .aboutLeadWrapper {
      margin-top: ${Margin.m32};
    }

    .aboutLinkWrapper {
      margin-top: ${Margin.m104};

      @media ${max(BreakPoints.md)} {
        margin-top: ${Margin.m64};
      }

      a {
        display: block;
        text-align: center;
        background-color: ${Colors.black};
        color: ${Colors.white};
        padding: ${Padding.p32};
        font-size: ${FontSize.xl};
        font-family: 'Gilroy-Bold', sans-serif;
        letter-spacing: 16px;
        text-indent: 16px;

        @media ${max(BreakPoints.md)} {
          font-size: ${FontSize.sm};
        }
      }
    }
  }
`
