import styled from 'styled-components'
import { SectionSubscriptionComponent } from './dom'
import { Margin } from '../../../../../const/Margin'
import { Colors } from '../../../../../const/Colors'
import { Padding } from '../../../../../const/Padding'

//----------------------------------
// styledComponent
//----------------------------------
export const SectionSubscriptionStyle = styled(SectionSubscriptionComponent)`
  .subscriptionHeaderWrapper {
    text-align: center;
    border-bottom: solid 2px ${Colors.smokeGray};
    padding: ${Padding.p32};
  }

  .subscriptionLeadWrapper {
    margin-top: ${Margin.m32};
  }
`
