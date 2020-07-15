import styled from 'styled-components'
import { HeaderComponent } from './dom'
import { Colors } from '../../const/Colors'
import { FontSize } from '../../const/FontSize'
import { FontWeight } from '../../const/FontWeight'
import { max, BreakPoints } from '../../const/BreakPoints'

//----------------------------------
// styledComponent
//----------------------------------
export const HeaderStyle = styled(HeaderComponent)`
  display: flex;
  align-items: center;
  position: absolute;
  top: 2%;
  left: 6%;
  z-index: 1;
  max-width: 88%;
  width: 88%;

  @media ${max(BreakPoints.md)} {
    left: 10%;
  }

  .logo {
    margin-right: auto;
    a {
      font-weight: ${FontWeight.bold};
      font-size: ${FontSize.md};
      font-family: 'Renner*', sans-serif;
      color: ${Colors.primary};
    }
  }
`
