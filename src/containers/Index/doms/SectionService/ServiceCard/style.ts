import styled from 'styled-components'
import { ServiceCardComponent } from './dom'
import { BreakPoints, max } from '../../../../../const/BreakPoints'
import { Margin } from '../../../../../const/Margin'
import { Padding } from '../../../../../const/Padding'
import { Colors } from '../../../../../const/Colors'
import { FontWeight } from '../../../../../const/FontWeight'
import { FontSize } from '../../../../../const/FontSize'

export const ServiceCardStyle = styled(ServiceCardComponent)`
  display: flex;
  color: ${Colors.white};
  background-color: transparent;

  .cardHeadingWrapper {
    position: relative;
    z-index: 1;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    padding-top: 54.25%;
    border-radius: 8px;
  }

  .cardContentsWrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    color: ${Colors.black};
    padding: ${Padding.p24} 0;

    @media ${max(BreakPoints.md)} {
      padding: ${Padding.p32} 0 ${Padding.p8};
    }

    .cardContentsInner {
      position: relative;
      z-index: 1;

      .cardCopyEn {
        font-size: ${FontSize.lg};
        font-family: 'Gilroy-Bold', sans-serif;
        color: ${Colors.primary};
        @media ${max(BreakPoints.md)} {
          font-size: ${FontSize.md};
        }
      }

      .cardCopyJp {
        font-size: ${FontSize.xs};
        font-weight: ${FontWeight.bold};
        color: ${Colors.gray};
        margin-top: ${Margin.m8};

        @media ${max(BreakPoints.lg)} {
          font-size: ${FontSize.sm};
        }
      }

      .cardLead {
        font-size: ${FontSize.xs};
        margin-top: ${Margin.m24};
      }
    }

    .cardViewMore {
      margin-top: ${Margin.m16};
    }
  }
`
