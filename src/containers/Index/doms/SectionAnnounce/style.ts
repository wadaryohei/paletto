import styled from 'styled-components'
import { SectionAnnounceComponent } from './dom'
import { Padding } from '../../../../const/Padding'
import { Margin } from '../../../../const/Margin'
import { Colors } from '../../../../const/Colors'
import { FontSize } from '../../../../const/FontSize'
import { BreakPoints, max } from '../../../../const/BreakPoints'

//----------------------------------
// styledComponent
//----------------------------------
export const SectionAnnounceStyle = styled(SectionAnnounceComponent)`
  .announceWrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    .announceHeading {
      position: relative;
      z-index: 1;
      color: #FF3198;
      padding: ${Padding.p112};
      font-size: ${FontSize.xl};
      font-family: 'Renner*', sans-serif;
      text-align: center;

      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 40%;
        left: 52%;
        z-index: -1;
        transform: translate(-50%, -50%);
        padding: ${Padding.p112};
        border: solid 12px #FF3198;
        background-color: ${Colors.primary};
        width: 100%;
      }

      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: 48%;
        z-index: -1;
        transform: translate(-50%, -50%);
        padding: ${Padding.p112};
        border: solid 12px #FF3198;
        background-color: ${Colors.primary};
        width: 100%;
      }

      @media ${max(BreakPoints.xl)} {
        font-size: ${FontSize.xl};
        text-indent: -10px;
      }

      @media ${max(BreakPoints.md)} {
        font-size: ${FontSize.lg};
        text-indent: -32px;
      }
    }

    .annouceLeadWrapper {
      margin-top: ${Margin.m32};
    }

    .announceLead {
      color: ${Colors.white};
    }
  }
`
