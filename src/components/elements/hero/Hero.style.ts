import styled from 'styled-components'
import { Index } from '@/components/elements/hero/Hero'
import { Colors } from '@/constants/Colors'
import { BreakPoints, max } from '@/constants/BreakPoints'
import { FontSize } from '@/constants/FontSize'
import { Padding } from '@/constants/Padding'
import { Margin } from '@/constants/Margin'

//----------------------------------
// style
//----------------------------------
export const Style = styled(Index)`
  background-color: ${Colors.white};
  position: relative;
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;

  .heroWrapper {
    @media ${max(BreakPoints.lg)} {
      width: 100%;
      max-width: 100%;
      padding: 0 ${Padding.p16};
    }

    .hero {
      position: relative;
      width: 100%;
      height: 90vhvh;
      padding-bottom: ${Padding.p64};

      .heroImageWrapper {
        position: relative;
        width: 100%;
        height: 90vh;

        .heroImageInner {
          width: 100vw;
          height: 90vh;
          position: absolute;
          z-index: 0;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

          .heroImage {
            width: 420px;
            height: 86vh;
            margin: 0 auto;
            background-position: center left;
            background-repeat: no-repeat;
            background-size: cover;

            @media ${max(BreakPoints.md)} {
              width: 86vw;
              height: 86vh;
            }
          }
        }
      }

      .heroContentWrapper {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 1;
        transform: translate(-50%, -50%);
        max-width: calc(100% - 180px);
        padding-bottom: ${Padding.p80};
        width: 100%;
        height: 100%;

        @media ${max(BreakPoints.lg)} {
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          max-width: 100%;
          padding-top: ${Padding.p88};
          padding-bottom: 0;
        }

        @media ${max(BreakPoints.md)} {
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          max-width: 100%;
        }
      }

      .heroCopyWrapper {
        position: relative;
        width: 100%;

        .heroCopy {
          display: block;
          margin: 0;
          line-height: 1.2;

          &.top {
            font-family: 'Helvetica neue', sans-serif;

            @media ${max(BreakPoints.lg)} {
              font-size: ${FontSize.xxl};
            }

            @media ${max(BreakPoints.md)} {
              font-size: ${FontSize.xl};
            }
          }

          &.bottom {
            font-size: 104px;
            @media ${max(BreakPoints.lg)} {
              font-size: 88px;
            }

            @media ${max(BreakPoints.md)} {
              font-size: 56px;
            }
          }
        }
      }

      .heroDescWrapper {
        width: 100%;
        text-align: right;
        padding-bottom: ${Padding.p24};

        @media ${max(BreakPoints.lg)} {
          margin-top: ${Margin.m16};
          text-align: left;
        }

        .heroDesc {
          line-height: 1.8;

          &:nth-of-type(2) {
            font-size: calc(${FontSize.sm} - 2px);
            margin-top: 0;
          }

          @media ${max(BreakPoints.md)} {
            font-size: ${FontSize.xs};
          }
        }
      }
    }
  }
`
