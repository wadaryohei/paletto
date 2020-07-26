import styled from 'styled-components'
import { SectionDetailsComponent } from './dom'
import { Margin } from '../../../../../const/Margin'

//----------------------------------
// styledComponent
//----------------------------------
export const SectionDetailsStyle = styled(SectionDetailsComponent)`
  .detailsSolution {
    margin-bottom: ${Margin.m32};

    > p {
      margin-top: ${Margin.m16};
    }
  }
`
