import styled from 'styled-components'
import { MembersComponent } from './dom'
import { FontSize } from '../../../const/FontSize'
import { FontWeight } from '../../../const/FontWeight'
import { Margin } from '../../../const/Margin'
import { Colors } from '../../../const/Colors'

//----------------------------------
// styledComponent
//----------------------------------
export const MembersStyle = styled(MembersComponent)`
  font-size: ${FontSize.xs};
  line-height: 1.6;
  font-weight: ${FontWeight.thin};
  letter-spacing: 4px;

  .footerMembersSocialsIconWrapper {
    vertical-align: middle;
    margin-left: ${Margin.m8};
    svg {
      width: 16px;
      height: 16px;
    }
  }

  .footerMembersSocialsIcon {
    line-height: 2;
    margin-left: ${Margin.m4};
    color: ${Colors.white};
  }
`
