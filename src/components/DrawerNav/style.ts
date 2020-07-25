import styled from 'styled-components'
import { DrawerNavComponent } from './dom'
import { Colors } from '../../const/Colors'
import { FontSize } from '../../const/FontSize'
import { Padding } from '../../const/Padding'
import { Margin } from '../../const/Margin'

//----------------------------------
// styledComponent
//----------------------------------
export const DrawerNavStyle = styled(DrawerNavComponent)`
  position: relative;

  .drawerNav {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: ${Padding.p16};
    width: 80vw;
    height: 100%;

    ul {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      width: 100%;
      height: 100%;
      margin-bottom: ${Margin.m32};

      li {
        width: 100%;

        a {
          display: block;
          color: ${Colors.black};
          font-size: ${FontSize.md};
          font-family: 'Gilroy-Bold', sans-serif;
          padding: ${Padding.p16} 0;
        }
      }
    }

    .close {
      position: absolute;
      top: 24px;
      right: 10px;
    }
  }
`
