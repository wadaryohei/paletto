import styled from 'styled-components'
import { HeaderComponent } from './dom'
import { Colors } from '../../const/Colors'
import { FontSize } from '../../const/FontSize'
import { FontWeight } from '../../const/FontWeight'
import { Padding } from '../../const/Padding'
import { BreakPoints, max } from '../../const/BreakPoints'

//----------------------------------
// styledComponent
//----------------------------------
export const HeaderStyle = styled(HeaderComponent)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  max-width: 100%;
  width: 100%;
  background-color: ${Colors.white};
  padding: ${Padding.p16};

  .headerInner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 100%;
    width: 100%;
    padding: ${Padding.p16};

    @media ${max(BreakPoints.md)} {
      padding-right: 0;
      padding-left: 0;
    }
  }

  .logo {
    margin-right: auto;
    a {
      font-weight: ${FontWeight.bold};
      font-size: ${FontSize.md};
      font-family: 'Renner*', sans-serif;
      color: ${Colors.black};
    }
  }
`
