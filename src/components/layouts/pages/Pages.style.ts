import styled from 'styled-components'
import { Index } from '@/components/layouts/pages/Pages'
import { FontSize } from '@/constants/FontSize'
import { BreakPoints, max } from '@/constants/BreakPoints'

//----------------------------------
// style
//----------------------------------
export const Style = styled(Index)`
  .pageHeaderBgWrapper {
    position: relative;
    width: 100%;
    height: 480px;
    max-height: 480px;

    figure {
      display: block;
      width: 100%;
    }

    .pageHeaderBgInner {
      position: fixed;
      top: 0;
      right: 0;
      z-index: -1;
      width: 60%;
      height: 100vh;
      max-height: 600px;

      @media ${max(BreakPoints.md)} {
        top: 0;
        width: 100%;
        right: -40px;
        max-height: 260px;
      }
    }

    .pageHeaderBg {
      width: 100%;
      height: 100vh;
      max-height: 600px;
      margin-left: auto;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;

      @media ${max(BreakPoints.md)} {
        max-height: 340px;
      }
    }
  }

  .pageHeaderWrapper {
    position: absolute;
    top: calc(48%);

    .pagename {
      width: 100%;
      line-height: 1.4;

      @media ${max(BreakPoints.md)} {
        font-size: ${FontSize.xl};
        width: 100%;
      }
    }

    .pageHeader {
      width: 60%;
      line-height: 1.4;

      @media ${max(BreakPoints.md)} {
        font-size: ${FontSize.md};
        width: 100%;
      }
    }
  }
`
