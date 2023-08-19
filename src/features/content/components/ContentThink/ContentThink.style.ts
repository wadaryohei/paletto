import styled from 'styled-components'
import { Index } from '@/features/content/components/ContentThink/ContentThink'
import { Margin } from '@/constants/Margin'
import { Colors } from '@/constants/Colors'
import { BreakPoints, max } from '@/constants/BreakPoints'
import { Padding } from '@/constants/Padding'
import { FontSize } from '@/constants/FontSize'

//----------------------------------
// style
//----------------------------------
export const Style = styled(Index)`
  .thinkHeading {
    color: ${Colors.white} !important;
  }

  .thinkCopyWrapper {
    margin-top: ${Margin.m72};

    .thinkCopy {
      color: ${Colors.black};
      background-color: ${Colors.white};
      padding: ${Padding.p16} ${Padding.p8};

      @media ${max(BreakPoints.md)} {
        font-size: ${FontSize.md};
      }
    }
  }

  .thinkLeadWrapper {
    margin-top: ${Margin.m32};
  }

  .thinkCardWrapper {
    margin-top: ${Margin.m96};

    .thinkCardGrid {
      &:nth-of-type(2) {
        margin-top: ${Margin.m32};
      }

      &:nth-of-type(3) {
        margin-top: ${Margin.m64};

        @media ${max(BreakPoints.md)} {
          margin-top: ${Margin.m32};
        }
      }
    }
  }
`
