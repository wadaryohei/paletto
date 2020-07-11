import styled from 'styled-components'
import { HeroComponent } from './dom'
import { Colors } from '../../const/Colors'
import { Margin } from '../../const/Margin'
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
      top: 60%;
      transform: translateY(-50%);
      left: 6%;
      z-index: 1;
      @media ${max(BreakPoints.md)} {
        left: 10%;
      }

      > .copy {
        &.copyEn {
          font-size: ${CopyFontSize.copyEn};
          font-weight: ${FontWeight.bold};
          color: ${Colors.primary};
          line-height: 1.3;

          @media ${max(BreakPoints.lg)} {
            font-size: ${FontSize.xl};
            margin-top: ${Margin.m24};
          }
        }

        &.copyJp {
          font-size: ${CopyFontSize.copyJp};
          font-weight: ${FontWeight.bold};
          color: ${Colors.primary};
          margin-bottom: ${Margin.m24};

          @media ${max(BreakPoints.lg)} {
            font-size: ${FontSize.md};
          }
        }
      }
    }
  }
`
