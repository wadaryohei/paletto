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

  .heroWrapper {
    display: flex;
    position: relative;
    max-width: calc(100% - 200px);
    width: auto;
    height: calc(100vh - 180px);
    max-height: calc(100vh - 180px);
    margin: ${Margin.m120} auto 0;
    padding-bottom: ${Padding.p120};

    @media ${max(BreakPoints.lg)} {
      width: 100%;
      max-width: 100%;
      height: calc(100vh - 280px);
      max-height: calc(100vh - 280px);
      padding: 0 ${Padding.p16};
    }

    .hero {
      width: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      @media ${max(BreakPoints.lg)} {
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
      }

      .copyWrapper {
        .copy {
          font-size: ${FontSize.s72};
          color: ${Colors.black};
          line-height: 1.2;
          letter-spacing: 4px;

          @media ${max(BreakPoints.md)} {
            font-size: ${FontSize.lg};
          }

          &:nth-of-type(1) {
            font-family: 'Helvetica Neue', sans-serif;
            font-weight: 100;
            font-size: ${FontSize.s24};
            margin-bottom: ${Margin.m24};
          }

          &:nth-of-type(2) {
            font-family: 'Helvetica Neue', sans-serif;
            font-weight: 100;
          }

          &:nth-of-type(3) {
            font-family: 'Gilroy-Bold', sans-serif;
            font-weight: ${FontWeight.bold};
            margin-top: ${Margin.m8};
          }
        }
      }

      .descWrapper {
        @media ${max(BreakPoints.md)} {
          margin-top: ${Margin.m16};
        }
        .desc {
          font-size: ${FontSize.s14};
          color: ${Colors.gray};
          line-height: 1.8;

          @media ${max(BreakPoints.md)} {
            font-size: ${FontSize.sm};
          }
        }
      }
    }
  }
`
