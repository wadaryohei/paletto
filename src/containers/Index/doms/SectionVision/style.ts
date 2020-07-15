import styled from 'styled-components'
import { SectionVisionComponent } from './dom'
import { Padding } from '../../../../const/Padding'
import { Margin } from '../../../../const/Margin'
import { Colors } from '../../../../const/Colors'
import { BreakPoints, max } from '../../../../const/BreakPoints'

//----------------------------------
// styledComponent
//----------------------------------
export const SectionVisionStyle = styled(SectionVisionComponent)`
  .visionLeadWrapper {
    position: relative;
    padding: ${Padding.p112} ${Padding.p72} 0;
    margin: ${Margin.m72} ${Margin.m32};

    @media ${max(BreakPoints.md)} {
      padding: ${Padding.p32} ${Padding.p16};
      margin: ${Margin.m72} 0;
    }

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      transform: rotate(180deg);
      z-index: 1;
      width: 1px;
      height: 140%;
      background-color: ${Colors.black};

      @media ${max(BreakPoints.md)} {
        height: 140%;
      }
    }
  }
`
