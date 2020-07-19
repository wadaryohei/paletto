import styled from 'styled-components'
import { SectionThinkComponent } from './dom'
import { Margin } from '../../../../const/Margin'
import { Colors } from '../../../../const/Colors'
import { BreakPoints, max } from '../../../../const/BreakPoints'

//----------------------------------
// styledComponent
//----------------------------------
export const SectionThinkStyle = styled(SectionThinkComponent)`
  .heading {
    color: ${Colors.white};
  }

  .copy {
    margin-top: ${Margin.m72};

    p {
      color: ${Colors.white};
    }
  }

  .lead {
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
    .thinkCard {
    }
  }
`
