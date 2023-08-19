import styled from 'styled-components'
import { Index } from '@/components/layouts/footer/Footer'
import { Colors } from '@/constants/Colors'
import { Padding } from '@/constants/Padding'
import { FontSize } from '@/constants/FontSize'
import { Margin } from '@/constants/Margin'
import { BreakPoints, max } from '@/constants/BreakPoints'
import { hover } from '@/constants/Transition'

//----------------------------------
// style
//----------------------------------
export const Style = styled(Index)`
  width: 100%;
  background-color: ${Colors.black};
  padding: ${Padding.p64};

  @media ${max(BreakPoints.md)} {
    padding: ${Padding.p64} 0;
  }

  .footerContactLink {
    > a {
      position: relative;
      display: block;
      background-color: ${Colors.white};
      color: ${Colors.black};
      text-align: center;
      padding: ${Padding.p64} ${Padding.p32};
      transition: ${hover(400)};
      overflow: hidden;

      @media ${max(BreakPoints.md)} {
        padding: ${Padding.p64} ${Padding.p16};
      }
    }

    .footerContactWrapper {
      position: relative;
      z-index: 1;

      .footerContactLead {
        margin-top: ${Margin.m16};
        line-height: 1.6;
        span {
          display: block;
        }
      }
    }
  }

  /** @memo 一旦SNSは非表示にしておく */
  /* .footerSocialWrapper {
    .footerSocials {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: auto;
      font-family: 'Gilroy-Bold', sans-serif;

      hr {
        width: 100%;
        margin: 0 ${Padding.p16};
        display: block;
        height: 1px;
      }

      span {
        color: ${Colors.white};

        &.footerSocialsHeading {
          font-size: ${FontSize.md};
        }
      }

      .footerSocialIconsWrapper {
        width: 20%;
        text-align: right;
        display: flex;

        @media ${max(BreakPoints.lg)} {
          width: auto;
        }
      }

      .footerSocialsIcon {
        width: 32px;
        height: 32px;
        margin-left: ${Margin.m8};
      }
    }
  } */

  .footerMembersWrapper {
    .footerMembersHeading {
      letter-spacing: 4px;
    }

    .footerMembers {
      position: relative;
      padding: ${Padding.p32} 0;
      display: inline-block;

      &::before {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: ${Colors.white};
        margin-bottom: ${Margin.m32};
      }

      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: ${Colors.white};
        margin-top: ${Margin.m32};
      }
    }
  }

  .footerCopyWrapper {
    display: block;
    width: 100%;
    margin-top: ${Margin.m24};
  }
`
