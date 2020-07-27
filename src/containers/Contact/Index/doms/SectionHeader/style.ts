import styled from 'styled-components'
import { SectionHeaderComponent } from './dom'
import { FontSize } from '../../../../../const/FontSize'

//----------------------------------
// styledComponent
//----------------------------------
export const SectionHeaderStyle = styled(SectionHeaderComponent)`
  text-align: center;
  .contactHeader {
    font-size: ${FontSize.md};
  }
`
