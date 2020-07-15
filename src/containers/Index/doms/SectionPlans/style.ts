import styled from 'styled-components'
import { SectionPlansComponent } from './dom'
import { Padding } from '../../../../const/Padding'
import { Margin } from '../../../../const/Margin'
import { Colors } from '../../../../const/Colors'
import { FontSize } from '../../../../const/FontSize'
import { FontWeight } from '../../../../const/FontWeight'
import { BreakPoints, max } from '../../../../const/BreakPoints'

//----------------------------------
// styledComponent
//----------------------------------
export const SectionPlansStyle = styled(SectionPlansComponent)`
  .plansSubHeadingWrapper {
    margin-top: ${Margin.m72};
  }

  .plansLeadWrapper {
    margin-top: ${Margin.m32};
  }

  .plansCardWrapper {
    margin-top: ${Margin.m72};

    .plansCard {
      height: 100%;
      padding: ${Padding.p56} ${Padding.p24};

      .planContract {
        text-align: center;
        display: inline-block;
        span {
          color: ${Colors.white};
          font-weight: ${FontWeight.bold};
          background-color: ${Colors.primary};
          padding: ${Padding.p8} ${Padding.p24};
        }
      }

      .planName {
        margin-top: ${Margin.m32};
        color: ${Colors.primary};
        font-weight: ${FontWeight.bold};
        font-size: ${FontSize.lg};
        text-align: center;

        @media ${max(BreakPoints.md)} {
          font-size: ${FontSize.md};
        }
      }

      .planRecommended {
        text-align: center;
        margin-top: ${Margin.m32};
      }

      .planRecommendedCopy {
        text-align: center;
        font-weight: ${FontWeight.bold};
        font-size: ${FontSize.sm};
        margin-top: ${Margin.m32};
        line-height: 1.4;
      }

      .planContentWrapper {
        margin-top: ${Margin.m32};

        .planSubscription {
          text-align: center;
        }

        .planNum {
          font-weight: ${FontWeight.bold};
          font-size: ${FontSize.xl};
          font-family: 'Renner*', sans-serif;
        }

        .planMultiplication {
          margin: 0 ${Margin.m8};
          font-size: ${FontSize.lg};
        }

        .planMonth,
        .planFee {
          font-size: ${FontSize.sm};
        }

        .planDetailWrapper {
          margin: ${Margin.m32} auto 0;

          .planDetailList {
            text-align: center;
            line-height: 3;
            font-size: ${FontSize.sm};

            .planDetailListIcon {
              margin-right: ${Margin.m8};
              color: ${Colors.primary};
            }
          }
        }
      }
    }
  }
`
