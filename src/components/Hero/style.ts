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
      width: 95%;
      height: 95%;
      border: solid 10px ${Colors.primary};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    > .hero {
      position: absolute;
      bottom: 6%;
      left: 6%;
      z-index: 1;
      @media ${max(BreakPoints.md)} {
        bottom: 8%;
        left: 10%;
      }

      > .copy {
        letter-spacing: 0.1rem;

        &.copyEn {
          font-size: ${CopyFontSize.copyEn};
          font-weight: ${FontWeight.thin};

          @media ${max(BreakPoints.md)} {
            font-size: ${FontSize.lg};
          }
        }

        &.copyEnHighlight {
          font-size: ${CopyFontSize.copyEnHighlight};
          font-weight: ${FontWeight.bold};
          color: ${Colors.primary};

          @media ${max(BreakPoints.md)} {
            font-size: ${FontSize.lg};
          }
        }

        &.copyJp {
          font-size: ${CopyFontSize.copyJp};
          font-weight: ${FontWeight.bold};
          color: ${Colors.primary};

          @media ${max(BreakPoints.md)} {
            font-size: ${FontSize.sm};
          }
        }
      }
    }
  }
`
