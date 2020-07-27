import styled from 'styled-components'
import { SectionHeaderComponent } from './dom'
import { FontSize } from '../../../../const/FontSize'
import { Margin } from '../../../../const/Margin'
import { Colors } from '../../../../const/Colors'

//----------------------------------
// styledComponent
//----------------------------------
export const SectionHeaderStyle = styled(SectionHeaderComponent)`
  text-align: center;

  .thanksHeader {
    font-size: ${FontSize.md};
  }

  .thanksNote {
    font-size: ${FontSize.xs};
    .thanksLink {
      display: inline-block;
      a {
        color: ${Colors.gray};
        text-decoration: underline;
      }
    }
  }

  .thanksButtonWrapper {
    display: block;
    margin-top: ${Margin.m32};
  }
`
