import styled from 'styled-components'
import { SectionWrapperComponent } from './dom'
import { Padding } from '../../../../const/Padding'
import { Colors } from '../../../../const/Colors'
import { BreakPoints, max } from '../../../../const/BreakPoints'

//----------------------------------
// styledComponent
//----------------------------------
export const SectionWrapperStyle = styled(SectionWrapperComponent)`
  max-width: 72%;
  width: 72%;
  margin-left: auto;
  padding: ${Padding.p160} ${Padding.p32};
  background-color: ${Colors.white};

  @media ${max(BreakPoints.md)} {
    max-width: 100%;
    width: 100%;
    padding: ${Padding.p160} ${Padding.p16};
  }
`
