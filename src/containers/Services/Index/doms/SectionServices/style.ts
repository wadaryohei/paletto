import styled from 'styled-components'
import { SectionServicesComponent } from './dom'
import { Margin } from '../../../../../const/Margin'

//----------------------------------
// styledComponent
//----------------------------------
export const SectionServicesStyle = styled(SectionServicesComponent)`
  .servicesCardGrid {
    width: 100%;
    margin: ${Margin.m24} auto 0;
  }

  .serviceCard {
    height: 100%;
  }
`
