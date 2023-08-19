import styled from 'styled-components'
import { Index } from '@/features/card/components/ServiceCard/ServiceCard'
import { BreakPoints, max } from '@/constants/BreakPoints'
import { Margin } from '@/constants/Margin'
import { Padding } from '@/constants/Padding'
import { FontSize } from '@/constants/FontSize'

//----------------------------------
// style
//----------------------------------
export const Style = styled(Index)`
  display: flex;
  background-color: transparent;

  .cardHeadingWrapper {
    position: relative;
    z-index: 1;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    padding-top: 54.25%;
    border-radius: 8px;
  }

  .cardContentsWrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    padding: ${Padding.p24} 0;

    @media ${max(BreakPoints.md)} {
      padding: ${Padding.p32} 0 ${Padding.p8};
    }

    .cardContentsInner {
      position: relative;
      z-index: 1;

      .cardCopyEn {
        @media ${max(BreakPoints.md)} {
          font-size: ${FontSize.md};
        }
      }

      .cardCopyJp {
        margin-top: ${Margin.m8};

        @media ${max(BreakPoints.lg)} {
          font-size: ${FontSize.sm};
        }
      }

      .cardLead {
        margin-top: ${Margin.m24};
      }
    }

    .cardViewMore {
      margin-top: ${Margin.m16};
    }
  }
`
