import styled from 'styled-components'
import IndexContainer from './container'
import {
  SectionVisionComponent,
  SectionAnnounceComponent,
  SectionServiceComponent,
  SectionPlansComponent,
} from './doms'
import { BreakPoints, max } from '../../const/BreakPoints'
import { Padding } from '../../const/Padding'
import { Colors } from '../../const/Colors'
import { Margin } from '../../const/Margin'
import { FontSize } from '../../const/FontSize'
import { FontWeight } from '../../const/FontWeight'

//--------------------------------------
// Indexページ全体のスタイル
//--------------------------------------
export const IndexContainerStyle = styled(IndexContainer)`
  position: relative;
  > .header {
    position: absolute;
    top: 2%;
    left: 6%;
    z-index: 1;
    display: flex;
    align-items: center;

    @media ${max(BreakPoints.md)} {
      left: 10%;
    }
  }
`

//--------------------------------------
// IndexページのVisionセクションのスタイル
//--------------------------------------
export const SectionVisionStyle = styled(SectionVisionComponent)`
  padding: ${Padding.p160} 0 0;

  @media ${max(BreakPoints.md)} {
    padding-bottom: 0;
  }

  .visionWrapper {
    padding: ${Padding.p112} ${Padding.p72} 0;
    margin: ${Margin.m72} ${Margin.m32};
    position: relative;

    @media ${max(BreakPoints.md)} {
      padding: ${Padding.p32} ${Padding.p16};
      margin: ${Margin.m72} 0;
    }

    &::before {
      content: '';
      display: block;
      width: 1px;
      height: 140%;
      background-color: ${Colors.black};
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      transform: rotate(180deg);

      @media ${max(BreakPoints.md)} {
        height: 140%;
      }
    }
  }
`

//--------------------------------------
// IndexページのAnnounceセクションのスタイル
//--------------------------------------
export const SectionAnnounceStyle = styled(SectionAnnounceComponent)`
  position: relative;
  background-color: ${Colors.primary};
  width: 100%;
  padding: ${Padding.p112} ${Padding.p72};

  @media ${max(BreakPoints.md)} {
    padding: ${Padding.p112} ${Padding.p16};
  }

  > .announceWrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    .announceHeading {
      position: relative;
      z-index: 1;
      color: #FF3198;
      padding: ${Padding.p112};
      font-size: ${FontSize.xl};
      font-family: 'Renner*', sans-serif;
      text-align: center;

      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 40%;
        left: 52%;
        z-index: -1;
        transform: translate(-50%, -50%);
        padding: ${Padding.p112};
        border: solid 12px #FF3198;
        background-color: ${Colors.primary};
        width: 100%;
      }

      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: 48%;
        z-index: -1;
        transform: translate(-50%, -50%);
        padding: ${Padding.p112};
        border: solid 12px #FF3198;
        background-color: ${Colors.primary};
        width: 100%;
      }

      @media ${max(BreakPoints.xl)} {
        font-size: ${FontSize.xl};
        text-indent: -10px;
      }

      @media ${max(BreakPoints.md)} {
        font-size: ${FontSize.lg};
        text-indent: -32px;
      }
    }

    .announceLead {
      color: ${Colors.white};
    }
  }
`

//--------------------------------------
// IndexページのServicesセクションのスタイル
//--------------------------------------
export const SectionServiceStyle = styled(SectionServiceComponent)`
  margin-top: ${Margin.m160};
  > .cardWrapper {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    overflow: scroll;
    justify-content: flex-start;
    padding: ${Padding.p32} ${Padding.p16};

    .card {
      height: 100%;
    }

    &::after {
      content: '';
      display: block;
      width: 1px;
      height: ${Padding.p32};
    }
  }
`

//--------------------------------------
// IndexページのPlansセクションのスタイル
//--------------------------------------
export const SectionPlansStyle = styled(SectionPlansComponent)`
  padding: ${Padding.p160} ${Padding.p16};

  .cardWrapper {
    .card {
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
