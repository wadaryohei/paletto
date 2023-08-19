import styled from 'styled-components'
import { Index } from '@/features/content/components/ContentApproach/ContentApproach'
import { Padding } from '@/constants/Padding'
import { Margin } from '@/constants/Margin'
import { Colors } from '@/constants/Colors'
import { FontSize } from '@/constants/FontSize'
import { BreakPoints, max } from '@/constants/BreakPoints'

//----------------------------------
// style
//----------------------------------
export const Style = styled(Index)`
  .approachWrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    .approachHeading {
      position: relative;
      z-index: 1;
      padding: ${Padding.p96};
      border: solid 1px ${Colors.white};

      @media ${max(BreakPoints.md)} {
        padding: ${Padding.p96} 0;
        font-size: ${FontSize.lg};
      }
    }

    .approachCopy {
      background-color: ${Colors.white};
      padding: ${Padding.p16};

      @media ${max(BreakPoints.md)} {
        font-size: ${FontSize.md};
      }
    }

    .approachLeadWrapper {
      margin-top: ${Margin.m32};
    }
  }
`
