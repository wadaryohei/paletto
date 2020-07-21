import styled from 'styled-components'
import { PagesLayoutComponent } from './dom'
import { Colors } from '../../../const/Colors'
import { FontSize } from '../../../const/FontSize'

//----------------------------------
// styledComponent
//----------------------------------
export const PagesLayoutStyle = styled(PagesLayoutComponent)`
  position: relative;

  .pageHeaderWrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 480px;
    max-height: 480px;
    padding-top: 480px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    .pageHeader {
      position: absolute;
      top: 50%;
      color: ${Colors.white};
      font-size: ${FontSize.xl};
      font-family: 'Gilroy-Bold', sans-serif;
    }
  }
`
