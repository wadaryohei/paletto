import styled from 'styled-components'
import MembersContainer from './container'
import { Padding } from '../../../const/Padding'
import { Margin } from '../../../const/Margin'
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
      padding: 0 0 ${Padding.p80};
    }

    .membersGrid {
      @media ${max(BreakPoints.md)} {
        margin-bottom: ${Margin.m64};
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
      display: block;
      width: auto;
      max-width: 120px;
      height: 120px;
      margin: auto ${Margin.m32};

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
        background-color: ${Colors.black};
        padding: 8px ${Padding.p16} 6px;
        text-indent: 6px;
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
