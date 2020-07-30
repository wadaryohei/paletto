import styled from 'styled-components'
import { SectionIntroComponent } from './dom'
import { Margin } from '../../../../../const/Margin'
import { FontSize } from '../../../../../const/FontSize'
import { BreakPoints, max } from '../../../../../const/BreakPoints'

//----------------------------------
// styledComponent
//----------------------------------
export const SectionIntroStyle = styled(SectionIntroComponent)`
  .servicesIntroHeader {
    margin-bottom: ${Margin.m32};

    @media ${max(BreakPoints.md)} {
      font-size: ${FontSize.md};
    }
  }
`
