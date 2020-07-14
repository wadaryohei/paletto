import styled from 'styled-components'
import IndexContainer from './container'
import {
  SectionVisionComponent,
  SectionWhyEmotionalBgComponent,
  SectionWhyEmotionalComponent,
  SectionServiceComponent,
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
    top: 3%;
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
  text-align: center;
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
    padding: 0 ${Padding.p16};
    margin: ${Margin.m56} 0 0;
  }
`
