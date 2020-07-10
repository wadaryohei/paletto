import styled from 'styled-components'
import { HeaderComponent } from './dom'
import { Colors } from '../../const/Colors'
import { FontSize } from '../../const/FontSize'
import { FontWeight } from '../../const/FontWeight'
import { FontFamily } from '../../const/FontFamily'

//----------------------------------
// styledComponent
//----------------------------------
export const HeaderStyle = styled(HeaderComponent)`
  max-width: 88%;
  width: 88%;
  display: flex;

  > .logo {
    margin-right: auto;
    a {
      font-family: ${FontFamily.baseFont};
      font-size: ${FontSize.md};
      font-weight: ${FontWeight.bold};
      color: ${Colors.primary};
    }
  }
`
