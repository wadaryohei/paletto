import styled from 'styled-components'
import { HeroComponent } from './dom'
import { Colors } from '../../const/Colors'
import { BreakPoints, max } from '../../const/BreakPoints'
import { FontSize } from '../../const/FontSize'
import { FontWeight } from '../../const/FontWeight'
import { Margin } from '../../const/Margin'

//----------------------------------
// styledComponent
//----------------------------------
export const HeroStyle = styled(HeroComponent)`
  figure {
    margin: ${Margin.m104} auto 0;
    width: calc(100% - ${Margin.m48});
    height: calc(100vh - ${Margin.m48});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;

    @media ${max(BreakPoints.md)} {
      background-position: 50% 50%;
    }

    .hero {
      position: absolute;
      bottom: 10%;
      left: 6%;
      z-index: 1;

      @media ${max(BreakPoints.md)} {
        left: 10%;
      }

      .copy {
        font-size: ${FontSize.xl};
        font-family: 'Helvetica Neue', sans-serif;
        font-weight: ${FontWeight.thin};
        color: ${Colors.white};
        line-height: 1.3;
        letter-spacing: 4px;

        @media ${max(BreakPoints.lg)} {
          font-size: ${FontSize.md};
          margin: ${Margin.m32} 0;
        }

        &:nth-of-type(3) {
          font-weight: ${FontWeight.bold};
        }
      }
    }
  }
`
