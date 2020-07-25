import styled from 'styled-components'
import { SectionServicesComponent } from './dom'
import { Margin } from '../../../../../const/Margin'
import { Padding } from '../../../../../const/Padding'
import { Colors } from '../../../../../const/Colors'

//----------------------------------
// styledComponent
//----------------------------------
export const SectionServicesStyle = styled(SectionServicesComponent)`
  .servicesCardWrapper {
    width: 100%;
    position: relative;
    padding: ${Padding.p160} 0;

    &::before {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 72.5%;
      background-color: ${Colors.smokeGray};
    }
  }

  .servicesCardGrid {
    width: 100%;
    margin: ${Margin.m24} auto 0;
  }

  .serviceCard {
    height: 100%;
  }
`
