import styled from 'styled-components'
import { MembersComponent } from './dom'
import { Margin } from '../../../const/Margin'
import { Colors } from '../../../const/Colors'

//----------------------------------
// styledComponent
//----------------------------------
export const MembersStyle = styled(MembersComponent)`
  display: flex;
  align-items: center;
  justify-content: start;
  letter-spacing: 4px;
  line-height: 1.6;

  .membersSocialsList {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: ${Margin.m8};

    > li {
      margin-right: ${Margin.m8};
      line-height: 1;

      a {
        color: ${Colors.white};

        svg {
          width: 16px;
          height: 16px;
        }
      }
    }
  }
`
