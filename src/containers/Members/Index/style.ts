import styled from 'styled-components'
import MembersContainer from './container'
import { Padding } from '../../../const/Padding'
import { Margin } from '../../../const/Margin'
import { FontSize } from '../../../const/FontSize'
import { Colors } from '../../../const/Colors'
import { BreakPoints, max } from '../../../const/BreakPoints'

//--------------------------------------
// Membersページ全体のスタイル
//--------------------------------------
export const MembersContainerStyle = styled(MembersContainer)`
  .l-members {
    background-color: ${Colors.white};
    padding: ${Padding.p160} 0;

    @media ${max(BreakPoints.md)} {
      padding: ${Padding.p80} 0;
    }

    .membersGrid {
      @media ${max(BreakPoints.md)} {
        margin-top: ${Margin.m64};
      }
    }

    .membersWrapepr {
      display: flex;
      align-items: center;
      justify-content: start;
      border-bottom: solid 1px ${Colors.smokeGray};
      padding-bottom: ${Padding.p32};

      @media ${max(BreakPoints.md)} {
        flex-direction: column;
      }
    }

    .membersImgWrapper {
      margin-right: ${Margin.m32};

      @media ${max(BreakPoints.md)} {
        margin-right: 0;
      }

      img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
      }
    }

    .membersSocialWrapper {
      figcaption {
        display: inline-block;
        font-size: ${FontSize.sm};
        font-family: 'Gilroy-Bold', sans-serif;
        background-color: ${Colors.black};
        padding: ${Padding.p8} ${Padding.p16};
        color: ${Colors.white};
        text-indent: 6px;
        text-align: left;
        letter-spacing: 8px;
        line-height: 2;

        @media ${max(BreakPoints.lg)} {
          text-indent: 0;
        }

        @media ${max(BreakPoints.md)} {
          margin-top: ${Margin.m32};
          text-align: center;
        }
      }
    }

    .membersSocialList {
      display: flex;
      align-items: center;
      justify-content: start;
      margin-top: ${Margin.m16};

      @media ${max(BreakPoints.md)} {
        justify-content: center;
      }

      li {
        margin-right: ${Margin.m8};
        @media ${max(BreakPoints.md)} {
          justify-content: center;
        }

        a {
          display: block;
          color: ${Colors.black};

          svg {
            width: 24px;
            height: 24px;
          }
        }
      }
    }

    .membersLeadWrapepr {
      margin-top: ${Margin.m32};
    }
  }
`
