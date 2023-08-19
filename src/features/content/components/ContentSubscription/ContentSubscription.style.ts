import styled from 'styled-components'
import { Index } from '@/features/content/components/ContentSubscription/ContentSubscription'
import { Margin } from '@/constants/Margin'
import { Colors } from '@/constants/Colors'
import { Padding } from '@/constants/Padding'
import { FontSize } from '@/constants/FontSize'
import { BreakPoints, max } from '@/constants/BreakPoints'

//----------------------------------
// style
//----------------------------------
export const Style = styled(Index)`
  .subscriptionHeaderWrapper {
    text-align: center;
    border-bottom: solid 2px ${Colors.smokeGray};
    padding: ${Padding.p32};

    .subscriptionHeader {
      @media ${max(BreakPoints.md)} {
        font-size: ${FontSize.md};
      }
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
