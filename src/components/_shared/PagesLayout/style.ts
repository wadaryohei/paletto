import styled from 'styled-components'
import { PagesLayoutComponent } from './dom'
import { Colors } from '../../../const/Colors'
import { FontSize } from '../../../const/FontSize'
import { BreakPoints, max } from '../../../const/BreakPoints'

//----------------------------------
// styledComponent
//----------------------------------
export const PagesLayoutStyle = styled(PagesLayoutComponent)`
  .pageHeaderBgWrapper {
    position: relative;
    width: 100%;
    height: 480px;
    max-height: 480px;

    .pageHeaderBg {
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: -1;
      width: 60%;
      height: 100vh;
      max-height: 600px;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;

      @media ${max(BreakPoints.md)} {
        top: 0;
        width: 100%;
        right: -40px;
        max-height: 260px;
      }
    }
  }

  .pageHeaderWrapper {
    position: absolute;
    top: calc(48%);

    .pagename {
      color: ${Colors.black};
      font-size: ${FontSize.xxl};
      font-family: 'Gilroy-Bold', sans-serif;
      width: 100%;
      line-height: 1.4;

      @media ${max(BreakPoints.md)} {
        font-size: ${FontSize.xl};
        width: 100%;
      }
    }

    .pageHeader {
      color: ${Colors.black};
      font-size: ${FontSize.lg};
      font-family: 'Gilroy-Bold', sans-serif;
      width: 60%;
      line-height: 1.4;

      @media ${max(BreakPoints.md)} {
        font-size: ${FontSize.md};
        width: 100%;
      }
    }
  }
`
