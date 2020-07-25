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
    font-size: ${FontSize.xl};
    text-align: center;
    margin-bottom: ${Margin.m64};
    @media ${max(BreakPoints.md)} {
      font-size: ${FontSize.md};
    }
  }
`
