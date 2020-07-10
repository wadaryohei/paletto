import styled from 'styled-components'
import { SectionComponent } from './dom'
import { Padding } from '../../const/Padding'
import { BreakPoints, max } from '../../const/BreakPoints'

//----------------------------------
// styledComponent
//----------------------------------
export const SectionStyle = styled(SectionComponent)`
  padding: ${Padding.p112} 0;

  @media ${max(BreakPoints.md)} {
    padding: ${Padding.p40} 0;
  }
`
