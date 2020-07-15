import styled from 'styled-components'
import { FooterComponent } from './dom'
import { Colors } from '../../const/Colors'
import { Padding } from '../../const/Padding'
import { FontSize } from '../../const/FontSize'
import { FontWeight } from '../../const/FontWeight'
import { Margin } from '../../const/Margin'
import { BreakPoints, max } from '../../const/BreakPoints'

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

  .footerContactWrapper {
    background-color: ${Colors.white};
    padding: ${Padding.p64} ${Padding.p32};
    text-align: center;
    border-radius: 10px;

    @media ${max(BreakPoints.md)} {
      padding: ${Padding.p64} ${Padding.p16};
    }

    .footerContactHeading {
      font-size: ${FontSize.lg};
      font-weight: ${FontWeight.bold};
      color: ${Colors.primary};
    }

    .footerContactLead {
      margin-top: ${Margin.m16};
      font-size: ${FontSize.sm};
      line-height: 1.6;
      span {
        display: block;
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

        @media ${max(BreakPoints.md)} {
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

      p {
        font-size: ${FontSize.xs};
        line-height: 1.6;
        font-weight: ${FontWeight.thin};
        letter-spacing: 4px;
      }
    }
  }
`
