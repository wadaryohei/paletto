import styled from 'styled-components'
import { SectionServicesComponent } from './dom'
import { Margin } from '../../../../../const/Margin'
import { Padding } from '../../../../../const/Padding'
import { Colors } from '../../../../../const/Colors'
import { BreakPoints, max } from '../../../../../const/BreakPoints'

//----------------------------------
// styledComponent
//----------------------------------
export const SectionServicesStyle = styled(SectionServicesComponent)`
  .servicesCardWrapper {
    width: 100%;
    position: relative;
    padding: ${Padding.p160} 0;

    @media ${max(BreakPoints.md)} {
      padding: ${Padding.p160} ${Padding.p16};
    }

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

  .servicesButtonWrapper {
    position: relative;
    z-index: 1;
    text-align: center;

    @media ${max(BreakPoints.md)} {
      text-align: left;
    }
  }
`
