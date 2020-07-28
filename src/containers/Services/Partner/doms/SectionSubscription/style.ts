import styled from 'styled-components'
import { SectionSubscriptionComponent } from './dom'
import { Margin } from '../../../../../const/Margin'
import { Colors } from '../../../../../const/Colors'
import { Padding } from '../../../../../const/Padding'
import { FontSize } from '../../../../../const/FontSize'
import { BreakPoints, max } from '../../../../../const/BreakPoints'

//----------------------------------
// styledComponent
//----------------------------------
export const SectionSubscriptionStyle = styled(SectionSubscriptionComponent)`
  .subscriptionHeaderWrapper {
    text-align: center;
    border-bottom: solid 2px ${Colors.smokeGray};
    padding: ${Padding.p32};

    .subscriptionHeader {
      font-size: ${FontSize.xl};

      @media ${max(BreakPoints.md)} {
        font-size: ${FontSize.md};
      }
    }

    .subscriptionSubheading {
      font-size: ${FontSize.sm};
    }
  }

  .subscriptionLeadWrapper {
    margin-top: ${Margin.m32};
  }

  .subscriptionSubheadingWrapper {
    margin-top: ${Margin.m64};
    margin-bottom: ${Margin.m16};
  }

  .subscriptionButtonWrapper {
    margin-top: ${Margin.m64};
    text-align: center;
  }
`
