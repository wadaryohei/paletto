import styled from 'styled-components'
import { FooterComponent } from './dom'
import { Colors } from '../../const/Colors'
import { Padding } from '../../const/Padding'
import { FontSize } from '../../const/FontSize'
import { FontWeight } from '../../const/FontWeight'
import { Margin } from '../../const/Margin'
import { BreakPoints, max } from '../../const/BreakPoints'
import { hover, unHover } from '../../const/Transition'

//----------------------------------
// styledComponent
//----------------------------------
export const FooterStyle = styled(FooterComponent)`
  width: 100%;
  background-color: ${Colors.primary};
  padding: ${Padding.p64};

  @media ${max(BreakPoints.md)} {
    padding: ${Padding.p64} ${Padding.p16};
  }

  .footerContactLink {
    position: relative;
    display: block;
    background-color: ${Colors.white};
    color: ${Colors.primary};
    padding: ${Padding.p64} ${Padding.p32};
    text-align: center;
    border-radius: 10px;
    transition: ${hover(400)};
    overflow: hidden;

    @media ${max(BreakPoints.md)} {
      padding: ${Padding.p64} ${Padding.p16};
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      transition: ${unHover(400)};
      transform: translateY(100%);
      width: 100%;
      height: 100%;
      background-color: ${Colors.secondary};
    }

    &:hover {
      color: ${Colors.white};

      &::after {
        transition: ${hover(120)};
        transform: translateY(0);
      }
    }

    .footerContactWrapper {
      position: relative;
      z-index: 1;
      .footerContactHeading {
        font-size: ${FontSize.lg};
        font-weight: ${FontWeight.bold};
      }

      .footerContactLead {
        margin-top: ${Margin.m16};
        font-size: ${FontSize.sm};
        font-weight: ${FontWeight.bold};
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
      width: 100%;

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
    font-family: 'Renner*', sans-serif;
    text-align: center;
    color: ${Colors.white};
  }
`
