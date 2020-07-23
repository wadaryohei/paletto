import styled from 'styled-components'
import { FooterComponent } from './dom'
import { Colors } from '../../const/Colors'
import { Padding } from '../../const/Padding'
import { FontSize } from '../../const/FontSize'
import { FontWeight } from '../../const/FontWeight'
import { Margin } from '../../const/Margin'
import { BreakPoints, max } from '../../const/BreakPoints'
import { hover } from '../../const/Transition'

//----------------------------------
// styledComponent
//----------------------------------
export const FooterStyle = styled(FooterComponent)`
  width: 100%;
  background-color: ${Colors.black};
  padding: ${Padding.p64};

  @media ${max(BreakPoints.md)} {
    padding: ${Padding.p64} ${Padding.p16};
  }

  .footerContactLink {
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

    .footerContactWrapper {
      position: relative;
      z-index: 1;
      .footerContactHeading {
        font-size: ${FontSize.lg};
        font-family: 'Gilroy-Bold', sans-serif;
      }

      .footerContactLead {
        margin-top: ${Margin.m16};
        font-size: ${FontSize.xs};
        line-height: 1.6;
        span {
          display: block;
        }
      }
    }
  }

  .footerSocialWrapper {
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
  }

  .footerMembersWrapper {
    color: ${Colors.white};
    margin-top: ${Margin.m32};

    .footerMembersHeading {
      font-size: ${FontSize.sm};
      font-weight: ${FontWeight.thin};
      font-family: 'Gilroy-Bold', sans-serif;
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
    font-size: ${FontSize.md};
    font-family: 'Gilroy-Bold', sans-serif;
    text-align: center;
    color: ${Colors.white};
  }
`
