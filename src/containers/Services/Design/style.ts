import styled from 'styled-components'
import ServicesDesignContainer from './container'
import { Padding } from '../../../const/Padding'
import { Colors } from '../../../const/Colors'
import { BreakPoints, max } from '../../../const/BreakPoints'
import { FontSize } from '../../../const/FontSize'
import { Margin } from '../../../const/Margin'
import { FontWeight } from '../../../const/FontWeight'

//--------------------------------------
// Servicesページ全体のスタイル
//--------------------------------------
export const ServicesDesignContainerStyle = styled(ServicesDesignContainer)`
  position: relative;
  background-color: ${Colors.smokeGray};

  .servicesDesignWrapper {
    max-width: 72%;
    width: 72%;
    margin-left: auto;
    padding: ${Padding.p160} ${Padding.p32};
    background-color: ${Colors.white};

    @media ${max(BreakPoints.md)} {
      max-width: 100%;
      width: 100%;
      padding: ${Padding.p160} ${Padding.p16};
    }

    .servicesDesignHeader {
      font-size: ${FontSize.xl};
      text-align: center;
      margin-bottom: ${Margin.m64};
      @media ${max(BreakPoints.md)} {
        font-size: ${FontSize.md};
      }
    }

    .servicesDesignEssence {
      margin-top: ${Margin.m160};
      .servicesDesignEssenceHeading {
        font-size: ${FontSize.xxl};
        text-align: left;
        line-height: 1;
        color: ${Colors.primary};

        @media ${max(BreakPoints.md)} {
          font-size: ${FontSize.lg};
        }
      }

      .servicesDesignEssenceList {
        width: 100%;
        margin-top: ${Margin.m64};

        > li {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-wrap: wrap;
          vertical-align: middle;
          width: 100%;
          margin-bottom: ${Margin.m48};
          padding-bottom: ${Padding.p48};
          border-bottom: solid 1px ${Colors.midGray};

          &:last-child {
            border: none;
          }

          @media ${max(BreakPoints.md)} {
            flex-direction: column;
          }

          .servicesDesignEssenceListNum {
            color: ${Colors.primary};
            font-size: ${FontSize.lg};
            font-family: 'Gilroy-Bold', sans-serif;
            line-height: 1.6;
            margin-right: auto;
            width: 10%;
            max-width: 10%;

            @media ${max(BreakPoints.md)} {
              font-size: ${FontSize.sm};
            }
          }

          .servicesDesignEssenceListWrapper {
            width: 90%;
            @media ${max(BreakPoints.md)} {
              width: 100%;
            }
            .servicesDesignEssenceListHeading {
              width: auto;
              font-size: ${FontSize.lg};
            }

            .servicesDesignEssenceListSubHeading {
              font-weight: ${FontWeight.bold};
            }

            .servicesDesignEssenceListLead {
              margin-top: ${Margin.m16};
              font-weight: ${FontWeight.bold};
            }

            .servicesDesignEssenceListDescription {
              position: relative;
              display: inline-block;
              margin-top: ${Margin.m32};
              padding-left: ${Padding.p32};
              color: ${Colors.gray};
              font-weight: ${FontWeight.bold};
              font-size: ${FontSize.md};
              font-family: 'Gilroy-Bold', sans-serif;

              &::before {
                content: '';
                display: inline-block;
                background-color: ${Colors.gray};
                width: 22px;
                height: 2px;
                position: absolute;
                top: 50%;
                left: 0;
                transform: rotate(180deg);
              }
            }

            .servicesDesignEssenceListNotes {
              margin-top: ${Margin.m8};
              font-size: ${FontSize.sm};
              color: ${Colors.black};

              @media ${max(BreakPoints.md)} {
                font-size: ${FontSize.xs};
              }
            }
          }
        }
      }
    }

    .servicesDesignDetails {
      > p {
        margin-top: ${Margin.m16};
      }
    }

    .servicesDesignLinkWrapper {
      margin-top: ${Margin.m64};
      font-family: 'Gilroy-Bold', sans-serif;

      .servicesLinkCopy {
        display: block;
        width: 100%;
        color: ${Colors.white};
        margin: ${Margin.m8} 0;
        font-weight: ${FontWeight.bold};
        font-size: ${FontSize.md};
        @media ${max(BreakPoints.md)} {
          font-size: ${FontSize.sm};
        }
      }

      .servicesLinkHeading {
        font-size: ${FontSize.xl};
        letter-spacing: 16px;
        color: ${Colors.white};

        @media ${max(BreakPoints.md)} {
          font-size: ${FontSize.md};
        }
      }
    }
  }
`
