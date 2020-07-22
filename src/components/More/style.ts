import styled from 'styled-components'
import { MoreComponent } from './dom'
import { Colors } from '../../const/Colors'
import { FontSize } from '../../const/FontSize'
import { FontWeight } from '../../const/FontWeight'
import { Margin } from '../../const/Margin'

//----------------------------------
// styledComponent
//----------------------------------
export const MoreStyle = styled(MoreComponent)`
  position: relative;
  display: inline-block;
  background-color: ${Colors.white};
  margin-top: ${Margin.m16};

  a {
    position: relative;
    display: flex;
    justify-content: start;
    align-items: center;
    text-align: center;
    font-size: ${FontSize.sm};
    font-weight: ${FontWeight.bold};
    line-height: 1.4;
    letter-spacing: 0;
    color: ${Colors.black};
    overflow: hidden;

    span {
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
  }

  svg {
    display: block;
    width: 16px;
    height: auto;
    margin-left: ${Margin.m8};
    fill: currentcolor;
    color: ${Colors.primary};
  }
`
