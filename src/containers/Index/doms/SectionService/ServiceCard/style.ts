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
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${Colors.white};
  color: ${Colors.white};

  .cardHeadingWrapper {
    position: relative;
    z-index: 1;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 264px;

    @media ${max(BreakPoints.lg)} {
      padding: ${Padding.p32} ${Padding.p16};
    }
  }

  .cardContentsWrapper {
    color: ${Colors.black};
    padding: ${Padding.p24} ${Padding.p24};

    @media ${max(BreakPoints.md)} {
      padding: ${Padding.p32} ${Padding.p16};
    }

    .cardContentsInner {
      position: relative;
      z-index: 1;

      .cardNum {
        font-size: ${FontSize.md};
        font-weight: ${FontWeight.normal};
        font-family: 'Gilroy-Bold', sans-serif;
        margin-bottom: ${Margin.m32};
        color: ${Colors.gray};
      }

      .cardTitle {
        font-size: ${FontSize.sm};
        font-weight: ${FontWeight.normal};
        font-family: 'Gilroy-Bold', sans-serif;
        color: ${Colors.gray};

        &:nth-of-type(2) {
          margin-bottom: ${Margin.m16};
        }

        @media ${max(BreakPoints.lg)} {
          font-size: ${FontSize.sm};
        }
      }

      .cardLead {
        margin-top: ${Margin.m24};
      }
    }
  }
`
