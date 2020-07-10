import styled from 'styled-components'
import { HeroComponent } from './dom'
import { Colors } from '../../const/Colors'
import { BreakPoints, max } from '../../const/BreakPoints'
import { FontSize, CopyFontSize } from '../../const/FontSize'
import { FontWeight } from '../../const/FontWeight'

//----------------------------------
// styledComponent
//----------------------------------
export const HeroStyle = styled(HeroComponent)`
  > figure {
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      border: solid 10px ${Colors.primary};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    > .hero {
      position: absolute;
      bottom: 10%;
      left: 6%;
      z-index: 1;
      @media ${max(BreakPoints.md)} {
        left: 10%;
      }

      > .copy {
        font-family: 'HiraginoSans-W9';

        &.copyEn {
          font-size: ${CopyFontSize.copyEn};
          font-weight: ${FontWeight.thin};

          @media ${max(BreakPoints.md)} {
            font-size: ${FontSize.md};
          }
        }

        &.copyEnHighlight {
          font-size: ${CopyFontSize.copyEnHighlight};
          font-weight: ${FontWeight.bold};
          color: ${Colors.primary};
          line-height: 1.4;

          @media ${max(BreakPoints.md)} {
            font-size: ${FontSize.lg};
          }
        }

        &.copyJp {
          font-size: ${CopyFontSize.copyJp};
          font-weight: ${FontWeight.bold};
          color: ${Colors.primary};

          @media ${max(BreakPoints.md)} {
            font-size: ${FontSize.xs};
          }
        }
      }
    }
  }
`
