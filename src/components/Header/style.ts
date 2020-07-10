import styled from 'styled-components'
import { HeaderComponent } from './dom'
import { Colors } from '../../const/Colors'
import { FontSize } from '../../const/FontSize'

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
      font-family: Helvetica Neue;
      color: ${Colors.primary};
      font-weight: 800;
      font-size: ${FontSize.md};
    }
  }
`
