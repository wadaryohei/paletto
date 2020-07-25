import styled from 'styled-components'
import { SectionMainComponent } from './dom'
import { FontSize } from '../../../../../const/FontSize'
import { FontWeight } from '../../../../../const/FontWeight'
import { Margin } from '../../../../../const/Margin'
import { Padding } from '../../../../../const/Padding'
import { BreakPoints, max } from '../../../../../const/BreakPoints'
import { Colors } from '../../../../../const/Colors'

//----------------------------------
// styledComponent
//----------------------------------
export const SectionMainStyle = styled(SectionMainComponent)`
  .aboutWrapper {
    .aboutGrid {
      margin-top: ${Margin.m64};
    }

    .aboutHeading {
      text-align: center;
      font-size: ${FontSize.xl};
      font-weight: ${FontWeight.bold};
      font-family: '游ゴシック', YuGothic, sans-serif;
      margin-bottom: ${Margin.m64};
      padding: ${Padding.p16};

      @media ${max(BreakPoints.md)} {
        font-size: ${FontSize.md};
      }
    }

    .aboutWrite {
      font-family: rollerscript-rough, sans-serif;
      font-size: ${FontSize.md};
      color: ${Colors.gray};
    }

    .aboutHeaderWrapper {
      .aboutCopy {
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
      text-align: center;

      img {
        width: 420px;
        height: 120px;

        @media ${max(BreakPoints.md)} {
          width: 100%;
          height: auto;
        }
      }
    }
  }
`
