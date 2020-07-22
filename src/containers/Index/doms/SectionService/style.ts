import styled from 'styled-components'
import { SectionServiceComponent } from './dom'
import { Padding } from '../../../../const/Padding'
import { Colors } from '../../../../const/Colors'
import { Margin } from '../../../../const/Margin'

//----------------------------------
// styledComponent
//----------------------------------
export const SectionServiceStyle = styled(SectionServiceComponent)`
  .serviceLeadWrapper {
    padding: ${Padding.p96} 0;
  }

  .serviceCardWrapper {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding: ${Padding.p32} ${Padding.p16} ${Padding.p160};

    &::before {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 80%;
      background-color: ${Colors.smokeGray};
    }

    .serviceCardGrid {
      margin: ${Margin.m24} auto 0;
    }

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