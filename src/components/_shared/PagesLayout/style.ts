import styled from 'styled-components'
import { PagesLayoutComponent } from './dom'
import { Colors } from '../../../const/Colors'
import { FontSize } from '../../../const/FontSize'
import { BreakPoints, max } from '../../../const/BreakPoints'

//----------------------------------
// styledComponent
//----------------------------------
export const PagesLayoutStyle = styled(PagesLayoutComponent)`
  position: relative;

  .pageHeaderBgWrapper {
    position: relative;
    width: 100%;
    height: 540px;
    max-height: 540px;

    .pageHeaderBg {
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100vh;
      max-height: 100vh;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;

      &::after {
        content: '';
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100vh;
        max-height: 100vh;
        background-color: ${Colors.black};
        opacity: 0.9;
      }
    }

    .pageHeaderWrapper {
      position: absolute;
      top: calc(50% + 40px);
      .pageHeader {
        color: ${Colors.white};
        font-size: ${FontSize.xl};
        font-family: 'Gilroy-Bold', sans-serif;
        text-transform: uppercase;
        letter-spacing: 16px;

        @media ${max(BreakPoints.md)} {
          font-size: ${FontSize.lg};
        }
      }
    }
  }
`
