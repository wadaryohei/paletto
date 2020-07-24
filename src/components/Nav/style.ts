import styled from 'styled-components'
import { NavComponent } from './dom'
import { FontSize } from '../../const/FontSize'
import { Colors } from '../../const/Colors'
import { Margin } from '../../const/Margin'
import { BreakPoints, max } from '../../const/BreakPoints'

//----------------------------------
// styledComponent
//----------------------------------
export const NavStyle = styled(NavComponent)`
  > ul {
    display: flex;
    flex-wrap: wrap;
    margin-right: -${Margin.m16};

    @media ${max(BreakPoints.md)} {
      display: none;
    }

    > li {
      > a {
        font-size: ${FontSize.sm};
        color: ${Colors.black};
        margin-right: ${Margin.m16};
      }
    }
  }
`
