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
  .heroWrapper {
    position: relative;
    height: calc(100vh - 20px);
  }

  figure {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    margin: 10px auto;
    width: calc(100% - ${Margin.m48});
    padding-top: 62.5%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    @media ${max(BreakPoints.md)} {
      width: calc(100% - ${Margin.m24});
      height: calc(100vh - 136px);
      background-position: 10% 50%;
    }
  }

  .hero {
    position: absolute;
    top: 40%;
    left: 124px;
    z-index: 1;

    @media ${max(BreakPoints.lg)} {
      bottom: 20%;
    }

    @media ${max(BreakPoints.md)} {
      bottom: 18%;
      left: 40px;
    }

    .copyWrapper {
      .copy {
        font-size: ${FontSize.s72};
        font-family: 'Helvetica Neue', sans-serif;
        font-weight: ${FontWeight.thin};
        color: ${Colors.white};
        line-height: 1.2;
        letter-spacing: 8px;

        @media ${max(BreakPoints.md)} {
          font-size: ${FontSize.lg};
        }

        &:nth-of-type(1) {
          font-weight: 100;
        }

        &:nth-of-type(2) {
          font-weight: 100;
        }

        &:nth-of-type(3) {
          font-weight: ${FontWeight.bold};
        }
      }
    }

    .descWrapper {
      margin-top: ${Margin.m16};
      .desc {
        font-size: ${FontSize.s24};
        font-weight: ${FontWeight.bold};
        color: ${Colors.white};
        line-height: 1.8;
        letter-spacing: 1px;

        @media ${max(BreakPoints.md)} {
          font-size: ${FontSize.sm};
        }
      }
    }
  }
`
