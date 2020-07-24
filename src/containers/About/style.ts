import styled from 'styled-components'
import AboutContainer from './container'
import { Padding } from '../../const/Padding'
import { Margin } from '../../const/Margin'
import { Colors } from '../../const/Colors'
import { FontSize } from '../../const/FontSize'
import { max, BreakPoints } from '../../const/BreakPoints'
import { FontWeight } from '../../const/FontWeight'

//--------------------------------------
// Aboutページ全体のスタイル
//--------------------------------------
export const AboutContainerStyle = styled(AboutContainer)`
  position: relative;

  .l-about {
    padding: ${Padding.p160} 0;
    background-color: ${Colors.white};

    @media ${max(BreakPoints.md)} {
      padding: ${Padding.p80} 0;
    }

    .aboutWrapper {
      .aboutGrid {
        margin-top: ${Margin.m64};
      }

      .aboutHeading {
        text-align: center;
        font-size: ${FontSize.xl};
        font-weight: ${FontWeight.bold};
        margin-bottom: ${Margin.m64};
        padding: ${Padding.p16};

        @media ${max(BreakPoints.md)} {
          font-size: ${FontSize.md};
        }
      }

      .aboutWrite {
        font-family: rollerscript-rough, sans-serif;
        font-size: ${FontSize.md};
        color: ${Colors.gray};
      }

      .aboutHeaderWrapper {
        h2 {
          font-size: ${FontSize.md};
        }
      }

      .aboutLeadWrapper {
        margin-top: ${Margin.m32};
      }

      .aboutLeadInWrapper {
        margin-bottom: ${Margin.m48};
        & > span:first-child {
          margin-bottom: ${Margin.m16};
          font-weight: ${FontWeight.bold};
        }
      }

      .aboutHandWriteWrapper {
        text-align: center;

        img {
          width: 420px;
          height: 120px;

          @media ${max(BreakPoints.md)} {
            width: 100%;
            height: auto;
          }
        }
      }

      .aboutLinkWrapper {
        margin-top: ${Margin.m104};

        @media ${max(BreakPoints.md)} {
          margin-top: ${Margin.m64};
        }

        a {
          display: block;
          width: 100%;
          font-family: 'Gilroy-Bold', sans-serif;
          font-weight: ${FontWeight.bold};
          color: ${Colors.black};
        }

        .aboutLinkImage {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          background-image: url('pages/about/about_services_glows.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
          border-radius: 8px;
          border: solid 4px ${Colors.black};
          width: 100%;
          height: 320px;
          padding: ${Padding.p16};
          text-align: center;

          @media ${max(BreakPoints.md)} {
            height: 220px;
          }

          span {
            margin: ${Margin.m8} 0;
            display: block;
          }

          .aboutLinkCopy {
            font-size: ${FontSize.md};
            @media ${max(BreakPoints.md)} {
              font-size: ${FontSize.sm};
            }
          }

          .aboutLinkHeading {
            font-size: ${FontSize.xl};
            letter-spacing: 16px;

            @media ${max(BreakPoints.md)} {
              font-size: ${FontSize.md};
            }
          }

          .aboutLinkSubHeading {
            font-size: ${FontSize.xs};
            line-height: 1.6;
          }
        }
      }

      .aboutContactWrapper {
        margin-top: ${Margin.m104};
        text-align: center;

        p {
          font-size: ${FontSize.xs};
        }

        a {
          display: inline-block;
          margin-top: ${Margin.m32};
          font-size: ${FontSize.sm};
          font-weight: ${FontWeight.bold};
          color: ${Colors.black};
          text-decoration: underline;
        }
      }
    }
  }
`
