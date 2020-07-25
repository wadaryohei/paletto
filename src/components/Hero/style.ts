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
    height: calc(100vh - 160px);
    max-height: calc(100vh - 160px);
    margin: ${Margin.m120} auto 0;
    padding-bottom: ${Padding.p120};

    @media ${max(BreakPoints.lg)} {
      width: 100%;
      max-width: 100%;
      height: calc(100vh - 248px);
      max-height: calc(100vh - 248px);
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

      .heroCopyWrapper {
        .copy {
          display: block;
          font-size: ${FontSize.xxl};
          color: ${Colors.black};
          line-height: 1.2;
          letter-spacing: 4px;

          @media ${max(BreakPoints.md)} {
            font-size: ${FontSize.lg};
          }

          &:nth-of-type(1) {
            font-family: 'Gilroy-normal', sans-serif;
            font-size: ${FontSize.md};
            margin-bottom: ${Margin.m8};
            letter-spacing: 0;

            @media ${max(BreakPoints.md)} {
              font-size: ${FontSize.sm};
            }
          }

          &:nth-of-type(2) {
            font-family: 'Gilroy-Bold', sans-serif;
          }

          &:nth-of-type(3) {
            font-family: 'Gilroy-Bold', sans-serif;
            margin-top: ${Margin.m8};
          }
        }
      }

      .heroDescWrapper {
        @media ${max(BreakPoints.md)} {
          margin-top: ${Margin.m16};
        }
        .desc {
          font-size: ${FontSize.xs};
          font-weight: ${FontWeight.light};
          color: ${Colors.gray};
          line-height: 1.8;

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
