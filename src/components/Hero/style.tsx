/**
 * Style
 */
import styled from 'styled-components'
import { HeroComponent } from './dom'
import { Colors } from '../../const/Colors'
import { BreakPoints, max } from '../../const/BreakPoints'
import { FontSize, CopyFontSize } from '../../const/FontSize'

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

    > div {
      position: absolute;
      bottom: 6%;
      left: 6%;
      z-index: 1;

      > .copy {
        font-family: Helvetica Neue;
        letter-spacing: 0.1rem;
      }

      > .copyEn {
        font-size: ${CopyFontSize.copyEn};
        font-weight: 200;

        @media ${max(BreakPoints.md)} {
          font-size: ${FontSize.lg};
        }
      }

      > .copyEnHighlight {
        font-size: ${CopyFontSize.copyEnHighlight};
        color: ${Colors.primary};
        font-weight: 800;

        @media ${max(BreakPoints.md)} {
          font-size: ${FontSize.lg};
        }
      }

      > .copyJp {
        font-size: ${CopyFontSize.copyJp};
        color: ${Colors.primary};
        font-weight: 800;

        @media ${max(BreakPoints.md)} {
          font-size: ${FontSize.sm};
        }
      }
    }
  }
`
