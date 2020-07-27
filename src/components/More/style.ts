import styled from 'styled-components'
import { MoreComponent } from './dom'
import { Colors } from '../../const/Colors'
import { Margin } from '../../const/Margin'
import { FontSize } from '../../const/FontSize'

//----------------------------------
// styledComponent
//----------------------------------
export const MoreStyle = styled(MoreComponent)`
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    font-size: ${FontSize.sm};
    font-family: 'Gilroy-Medium', sans-serif;
    line-height: 1.4;
    letter-spacing: 0;
    color: ${Colors.white};
    overflow: hidden;
    position: relative;

    &::after {
      position: absolute;
      top: 0;
      right: -12px;
      display: block;
      content: '';
      background-color: ${Colors.white};
      width: 10px;
      height: 100%;
    }
  }

  svg {
    display: block;
    width: 16px;
    height: auto;
    margin-left: ${Margin.m8};
    fill: currentcolor;
    color: ${Colors.white};
  }
`
