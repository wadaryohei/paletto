import styled from 'styled-components'
import { SectionThinkComponent } from './dom'
import { Margin } from '../../../../const/Margin'
import { Colors } from '../../../../const/Colors'
import { BreakPoints, max } from '../../../../const/BreakPoints'
import { Padding } from '../../../../const/Padding'
import { FontSize } from '../../../../const/FontSize'

//----------------------------------
// styledComponent
//----------------------------------
export const SectionThinkStyle = styled(SectionThinkComponent)`
  .thinkHeading {
    color: ${Colors.white} !important;
  }

  .thinkCopyWrapper {
    margin-top: ${Margin.m72};

    .thinkCopy {
      color: ${Colors.black};
      background-color: ${Colors.white};
      padding: ${Padding.p16} ${Padding.p8};
      font-size: ${FontSize.lg};

      @media ${max(BreakPoints.md)} {
        font-size: ${FontSize.md};
      }
    }
  }

  .thinkLeadWrapper {
    margin-top: ${Margin.m32};

    p {
      color: ${Colors.white};
    }
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
