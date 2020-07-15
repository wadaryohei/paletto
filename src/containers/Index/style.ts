import styled from 'styled-components'
import IndexContainer from './container'
import {
  SectionVisionComponent,
  SectionAnnounceComponent,
  SectionServiceComponent,
  SectionPartnerShipComponent,
} from './doms'
import { BreakPoints, max } from '../../const/BreakPoints'
import { Padding } from '../../const/Padding'
import { Colors } from '../../const/Colors'
import { Margin } from '../../const/Margin'
import { FontSize } from '../../const/FontSize'

//----------------------------------
// styledComponent
//----------------------------------
export const IndexContainerStyle = styled(IndexContainer)`
  position: relative;
  > .header {
    position: absolute;
    top: 2%;
    left: 6%;
    z-index: 1;
    display: flex;
    align-items: center;

    @media ${max(BreakPoints.md)} {
      left: 10%;
    }
  }
`

export const SectionVisionStyle = styled(SectionVisionComponent)`
  padding: ${Padding.p160} ${Padding.p16} 0;

  .visionWrapper {
    padding: ${Padding.p112} ${Padding.p72} 0;
    margin: ${Margin.m72} ${Margin.m32};
    position: relative;

    @media ${max(BreakPoints.md)} {
      padding: ${Padding.p32} ${Padding.p24};
      margin: ${Margin.m72} 0;
    }

    &::before {
      content: '';
      display: block;
      width: 1px;
      height: 140%;
      background-color: ${Colors.black};
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      transform: rotate(180deg);

      @media ${max(BreakPoints.md)} {
        height: 100%;
      }
    }
  }
`

export const SectionAnnounceStyle = styled(SectionAnnounceComponent)`
  position: relative;
  background-color: ${Colors.primary};
  width: 100%;
  padding: ${Padding.p112} ${Padding.p72};

  @media ${max(BreakPoints.md)} {
    padding: ${Padding.p112} ${Padding.p24};
  }

  > .announceWrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    .announceHeading {
      border: solid 8px ${Colors.white};
      padding: ${Padding.p112};
      font-size: ${FontSize.xl};
      font-family: 'Renner*', sans-serif;
      text-align: center;

      @media ${max(BreakPoints.xl)} {
        font-size: ${FontSize.xl};
        text-indent: -10px;
      }

      @media ${max(BreakPoints.md)} {
        font-size: ${FontSize.lg};
        text-indent: -32px;
      }
    }

    .announceLead {
      color: ${Colors.white};
    }
  }
`

export const SectionServiceStyle = styled(SectionServiceComponent)`
  padding: ${Padding.p160} ${Padding.p16};
  > .cardWrapper {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    overflow: scroll;
    justify-content: flex-start;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding: ${Padding.p32} ${Padding.p16};

    &::after {
      content: '';
      display: block;
      width: 1px;
      height: ${Padding.p32};
    }
  }
`

export const SectionPartnerShipStyle = styled(SectionPartnerShipComponent)`
  padding: ${Padding.p160} ${Padding.p16};
`
