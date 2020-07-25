import styled from 'styled-components'
import { SectionIntroComponent } from './dom'
import { Margin } from '../../../../../const/Margin'
import { BreakPoints, max } from '../../../../../const/BreakPoints'

//----------------------------------
// styledComponent
//----------------------------------
export const SectionIntroStyle = styled(SectionIntroComponent)`
  .servicesContainer {
    align-items: center;
  }

  .servicesIntroGrid {
    width: 100%;
  }

  .servicesIntroImage {
    width: 80%;
    height: 80%;
    background-size: cover;
    margin: 0 auto;

    @media ${max(BreakPoints.md)} {
      width: 90%;
      height: 90%;
      margin-top: ${Margin.m32};
    }

    &::before {
      content: '';
      display: block;
      padding-top: 100%;
    }
  }

  .servicesLeadWrapper {
    margin-top: ${Margin.m32};
  }
`
