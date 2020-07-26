import styled from 'styled-components'
import { SectionVisionComponent } from './dom'
import { Padding } from '../../../../const/Padding'
import { Colors } from '../../../../const/Colors'
import { BreakPoints, max } from '../../../../const/BreakPoints'
import { Margin } from '../../../../const/Margin'

//----------------------------------
// styledComponent
//----------------------------------
export const SectionVisionStyle = styled(SectionVisionComponent)`
  .visionWrapper {
    max-width: calc(100% - 120px);
    width: calc(100% - 120px);
    padding: ${Padding.p80};
    margin-left: ${Margin.m56};
    overflow: hidden;

    .heading,
    .subheading,
    .lead,
    .copy {
      color: ${Colors.white};
    }

    @media ${max(BreakPoints.lg)} {
      max-width: calc(100% - 40px);
      width: calc(100% - 40px);
      margin-left: ${Margin.m32};
      padding: ${Padding.p80} ${Padding.p16};
    }

    figure {
      max-width: calc(100% - 100px);
      width: calc(100% - 100px);
      height: 100vh;
      max-height: 100vh;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: -2;

      div {
        width: 100%;
        height: 100vh;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        will-change: transform;
        -webkit-will-change: transform;
      }

      @media ${max(BreakPoints.lg)} {
        max-width: calc(100% - 30px);
        width: calc(100% - 30px);
      }
    }

    .visionLeadWrapper {
      position: relative;
      padding: ${Padding.p96} 0 0;
    }

    .visionButtonWrapper {
      margin-top: ${Margin.m32};
    }
  }
`
