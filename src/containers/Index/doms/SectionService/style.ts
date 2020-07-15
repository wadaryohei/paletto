import styled from 'styled-components'
import { SectionServiceComponent } from './dom'
import { Padding } from '../../../../const/Padding'
import { Margin } from '../../../../const/Margin'

//----------------------------------
// styledComponent
//----------------------------------
export const SectionServiceStyle = styled(SectionServiceComponent)`
  .serviceLeadWrapper {
    margin-top: ${Margin.m72};
  }

  .serviceCardWrapper {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    overflow: scroll;
    justify-content: flex-start;
    padding: ${Padding.p32} ${Padding.p16};
    margin-top: ${Margin.m56};

    .serviceCard {
      height: 100%;
    }

    &::after {
      content: '';
      display: block;
      width: 1px;
      height: ${Padding.p32};
    }
  }
`
