import styled from 'styled-components'
import { SectionApproachComponent } from './dom'
import { Padding } from '../../../../const/Padding'
import { Margin } from '../../../../const/Margin'
import { Colors } from '../../../../const/Colors'
import { FontSize } from '../../../../const/FontSize'
import { BreakPoints, max } from '../../../../const/BreakPoints'

//----------------------------------
// styledComponent
//----------------------------------
export const SectionApproachStyle = styled(SectionApproachComponent)`
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
