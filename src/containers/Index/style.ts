import styled from 'styled-components'
import IndexContainer from './container'
import {
  SectionVisionComponent,
  SectionWhyEmotionalBgComponent,
  SectionWhyEmotionalComponent,
  SectionServiceComponent,
  SectionPartnerShipComponent,
} from './doms'
import { BreakPoints, max } from '../../const/BreakPoints'
import { Padding } from '../../const/Padding'
import { Colors } from '../../const/Colors'
import { Margin } from '../../const/Margin'

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
  padding: ${Padding.p160} ${Padding.p16};

  .visionWrapper {
    padding: ${Padding.p112} ${Padding.p32};
    margin: ${Margin.m72} ${Margin.m32};
    position: relative;

    @media ${max(BreakPoints.md)} {
      padding: ${Padding.p32} ${Padding.p24};
      margin: 0;
    }

    &::before {
      content: '';
      display: block;
      width: 1px;
      height: 100%;
      background-color: ${Colors.black};
      position: absolute;
      top: 0;
      left: 0;
      transform: rotate(180deg);

      @media ${max(BreakPoints.md)} {
        height: 100%;
      }
    }
  }
`

export const SectionWhyEmotionalBgStyle = styled(
  SectionWhyEmotionalBgComponent,
)`
  width: 100%;

  > .box {
    margin-left: auto;
    position: relative;
    text-align: right;
    max-width: calc(100% - 100% / 4);
    background-color: ${Colors.primary};
    height: 320px;

    @media ${max(BreakPoints.md)} {
      height: 160px;
    }

    > h2 {
      position: absolute;
      bottom: -8px;
      right: 32px;
    }
  }
`

export const SectionWhyEmotionalStyle = styled(SectionWhyEmotionalComponent)`
  padding: ${Padding.p160} ${Padding.p16};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 90% 50%;

  @media ${max(BreakPoints.lg)} {
    background-position: 50% 20%;
    background-size: contain;
  }
`

export const SectionServiceStyle = styled(SectionServiceComponent)`
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
  text-align: center;
  padding: ${Padding.p160} ${Padding.p16};
`
