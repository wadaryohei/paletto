import styled from 'styled-components'
import { PagesServicesLayoutComponent } from './dom'
import { Margin } from '../../../const/Margin'
import { Padding } from '../../../const/Padding';
import { Colors } from '../../../const/Colors'
import { BreakPoints, max } from '../../../const/BreakPoints';

//----------------------------------
// styledComponent
//----------------------------------
export const PagesServicesLayoutStyle = styled(PagesServicesLayoutComponent)`
  position: relative;
  padding-top: calc(${Margin.m160} * 2);
  background-color: ${Colors.smokeGray};

  @media ${max(BreakPoints.md)} {
    padding-top: ${Padding.p160};
  }

  .pageHeaderWrapper {
    position: relative;
    width: 100%;
    margin-bottom: ${Margin.m64};
  }

  .pageHeaderBg {
    width: 100%;
    padding-top: 32.5%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    @media ${max(BreakPoints.md)} {
      padding-top: 54.25%;
    }
  }
`
