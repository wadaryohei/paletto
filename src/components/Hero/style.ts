import styled from 'styled-components'
import { HeroComponent } from './dom'
import { Colors } from '../../const/Colors'
import { BreakPoints, max } from '../../const/BreakPoints'
import { FontSize } from '../../const/FontSize'
import { FontWeight } from '../../const/FontWeight'
import { Padding } from '../../const/Padding'
import { Margin } from '../../const/Margin'

//----------------------------------
// styledComponent
//----------------------------------
export const HeroStyle = styled(HeroComponent)`
  background-color: ${Colors.white};
  position: relative;
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;

  .heroCanvasWrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100vh;
  }

  .heroCanvasInArea {
    position: relative;
    width: 100%;
    height: 100vh;
  }

  .heroWrapper {
    display: flex;
    position: relative;
    max-width: calc(100% - 200px);
    height: 100vh;
    min-height: 100vh;
    max-height: 100vh;
    margin: 0 auto;
    padding-bottom: ${Padding.p64};

    @media ${max(BreakPoints.lg)} {
      width: 100%;
      max-width: 100%;
      padding: 0 ${Padding.p16};
    }

    .hero {
      position: relative;
      width: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;

      &::before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 420px;
        height: 100vh;
        background-image: url('./top/hero.jpg');
        background-size: cover;

        @media ${max(BreakPoints.md)} {
          width: 90%;
          height: 60vh;
        }
      }

      @media ${max(BreakPoints.lg)} {
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
      }

      .heroCopyWrapper {
        position: relative;

        .heroCopy {
          display: block;
          color: ${Colors.black};
          margin: 0;
          line-height: 1.2;

          &.top {
            font-family: 'Helvetica neue', sans-serif;
            font-weight: ${FontWeight.thin};
            font-size: ${FontSize.xxl};
            @media ${max(BreakPoints.lg)} {
              font-size: ${FontSize.lg};
            }
          }

          &.bottom {
            font-family: 'Gilroy-Bold', sans-serif;
            font-size: ${FontSize.xxxl};

            @media ${max(BreakPoints.lg)} {
              font-size: ${FontSize.xl};
            }
          }
        }
      }

      .heroDescWrapper {
        padding-bottom: ${Padding.p24};
        @media ${max(BreakPoints.md)} {
          margin-top: ${Margin.m16};
        }

        .desc {
          font-size: ${FontSize.xs};
          font-weight: ${FontWeight.light};
          color: ${Colors.black};
          line-height: 1.8;
          /* margin-top: 0; */

          &:nth-of-type(2) {
            font-size: calc(${FontSize.sm} - 2px);
          }

          @media ${max(BreakPoints.md)} {
            font-size: ${FontSize.xs};
          }
        }
      }
    }
  }
`
