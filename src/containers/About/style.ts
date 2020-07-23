import styled from 'styled-components'
import AboutContainer from './container'
import { Padding } from '../../const/Padding'
import { Margin } from '../../const/Margin'
import { Colors } from '../../const/Colors'
import { FontSize } from '../../const/FontSize'
import { max, BreakPoints } from '../../const/BreakPoints'
import { FontWeight } from '../../const/FontWeight'

//--------------------------------------
// Aboutページ全体のスタイル
//--------------------------------------
export const AboutContainerStyle = styled(AboutContainer)`
  position: relative;

  .l-about {
    padding: ${Padding.p160} 0;
    background-color: ${Colors.white};

    @media ${max(BreakPoints.md)} {
      padding: ${Padding.p80} 0;
    }

    .aboutWrapper {
      position: relative;
      padding: ${Padding.p80} ${Padding.p32} ${Padding.p120};

      @media ${max(BreakPoints.md)} {
        padding: ${Padding.p112} ${Padding.p16};
      }

      .aboutGrid {
        margin-top: ${Margin.m64};
      }

      .aboutHeading {
        text-align: center;
        font-size: ${FontSize.xl};
        font-weight: ${FontWeight.bold};
        margin-bottom: ${Margin.m64};
        padding: ${Padding.p16};
      }

      .aboutWrite {
        font-family: rollerscript-rough, sans-serif;
        font-size: ${FontSize.md};
        color: ${Colors.gray};
      }

      .aboutHeaderWrapper {
        h2 {
          font-size: ${FontSize.md};
        }
      }

      .aboutLeadWrapper {
        margin-top: ${Margin.m32};
      }

      .aboutLeadInWrapper {
        margin-bottom: ${Margin.m48};
        & > span:first-child {
          margin-bottom: ${Margin.m16};
          font-weight: ${FontWeight.bold};
        }
      }

      .aboutHandWriteWrapper {
        position: absolute;
        bottom: -40px;
        left: 50%;
        transform: translateX(-50%);
        img {
          width: 420px;
          height: 120px;
        }
      }
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
