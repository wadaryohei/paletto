import styled from 'styled-components'
import IndexContainer from './container'
import {
  SectionVisionComponent,
  SectionWhyEmotionalBgComponent,
  SectionWhyEmotionalComponent,
  SectionSerivceComponent,
} from './doms'
import { BreakPoints, max } from '../../const/BreakPoints'
import { Padding } from '../../const/Padding'
import { Margin } from '../../const/Margin'
import { Colors } from '../../const/Colors'
import { FontWeight } from '../../const/FontWeight'
import { FontSize } from '../../const/FontSize'

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

export const SectionSerivceStyle = styled(SectionSerivceComponent)`
  > .cardWrapper {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    overflow: scroll;
    justify-content: flex-start;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding: 0 ${Padding.p16};

    > .card {
      position: relative;
      width: 640px;
      height: auto;
      padding: ${Padding.p160} ${Padding.p32};
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin-right: ${Margin.m16};
      border-radius: 10px;
      scroll-snap-align: center;
      background-size: cover;
      background-repeat: no-repeat;

      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 100%;
        width: ${Padding.p16};
        height: 1px;
      }

      @media ${max(BreakPoints.md)} {
        width: 95%;
        height: auto;
        padding: ${Padding.p112} ${Padding.p16};
        justify-content: flex-start;
      }

      > p,
      h1 {
        color: ${Colors.white};
      }

      > .cardNum {
        font-size: ${FontSize.xl};
        font-weight: ${FontWeight.bold};

        @media ${max(BreakPoints.lg)} {
          font-size: ${FontSize.lg};
        }
      }

      > .cardTitle {
        font-size: ${FontSize.md};
        font-weight: ${FontWeight.bold};
        margin-top: ${Margin.m72};

        @media ${max(BreakPoints.lg)} {
          font-size: ${FontSize.sm};
          margin-top: ${Margin.m40};
        }
      }

      > .cardCopy {
        font-size: ${FontSize.lg};
        font-weight: ${FontWeight.bold};
        margin-top: ${Margin.m16};
        line-height: 1.4;

        @media ${max(BreakPoints.lg)} {
          font-size: ${FontSize.md};
        }
      }

      > .cardLead {
        font-size: ${FontSize.xs};
        font-weight: ${FontWeight.bold};
        margin-top: ${Margin.m24};
        line-height: 3.2rem;
      }
    }
  }
`
