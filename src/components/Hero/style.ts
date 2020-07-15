import styled from 'styled-components'
import { HeroComponent } from './dom'
import { Colors } from '../../const/Colors'
import { BreakPoints, max } from '../../const/BreakPoints'
import { FontSize } from '../../const/FontSize'
import { FontWeight } from '../../const/FontWeight'
import { Margin } from '../../const/Margin'

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

    @media ${max(BreakPoints.md)} {
      background-position: 50% 50%;
    }

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

      > .siteName {
        font-size: ${FontSize.xxxl};
        font-family: 'Renner*', sans-serif;
        font-weight: 700;
        color: ${Colors.primary};

        @media ${max(BreakPoints.md)} {
          font-size: ${FontSize.xl};
        }
      }

      > .copy {
        &.copyEn {
          font-size: ${FontSize.lg};
          font-family: 'Renner*', sans-serif;
          font-weight: ${FontWeight.bold};
          color: ${Colors.primary};
          line-height: 1.3;
          letter-spacing: 12px;

          @media ${max(BreakPoints.lg)} {
            font-size: ${FontSize.md};
            margin: ${Margin.m32} 0;
          }
        }

        &.copyJp {
          font-size: ${FontSize.md};
          font-weight: ${FontWeight.bold};
          color: ${Colors.primary};
          letter-spacing: 8px;
          margin-top: ${Margin.m16};

          @media ${max(BreakPoints.lg)} {
            font-size: ${FontSize.sm};
            margin-top: 0;
          }
        }
      }
    }
  }
`
