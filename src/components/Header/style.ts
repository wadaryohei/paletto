import styled from 'styled-components'
import { HeaderComponent } from './dom'
import { Colors } from '../../const/Colors'
import { FontSize } from '../../const/FontSize'
import { FontWeight } from '../../const/FontWeight'

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
      font-weight: ${FontWeight.bold};
      font-size: ${FontSize.md};
      color: ${Colors.primary};
    }
  }
`
