import styled from 'styled-components'
import { ServiceCardComponent } from './dom'
import { BreakPoints, max } from '../../const/BreakPoints'
import { Margin } from '../../const/Margin'
import { Padding } from '../../const/Padding'
import { Colors } from '../../const/Colors'
import { FontWeight } from '../../const/FontWeight'
import { FontSize } from '../../const/FontSize'

export const ServiceCardStyle = styled(ServiceCardComponent)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${Colors.white};
  color: ${Colors.white};
  border-radius: 10px;
  box-shadow: 0px 3px 33px -6px rgba(0, 0, 0, 0.15);

  .cardHeadingWrapper {
    position: relative;
    z-index: 1;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 10px 10px 0 0;
    padding: ${Padding.p72} ${Padding.p24};

    @media ${max(BreakPoints.lg)} {
      padding: ${Padding.p32} ${Padding.p16};
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      border-radius: 10px 10px 0 0;
      background-color: ${Colors.black};
      opacity: 0.4;
    }

    .cardHeadingInner {
      position: relative;
      z-index: 1;
    }

    .cardNum {
      font-size: ${FontSize.xl};
      font-weight: ${FontWeight.bold};
      font-family: 'Renner*', sans-serif;
      margin-bottom: ${Margin.m32};
      color: ${Colors.white};
    }

    .cardTitle {
      font-size: ${FontSize.md};
      font-weight: ${FontWeight.bold};
      color: ${Colors.white};

      &:nth-of-type(2) {
        margin-bottom: ${Margin.m16};
      }

      @media ${max(BreakPoints.lg)} {
        font-size: ${FontSize.sm};
      }
    }
  }

  .cardContentsWrapper {
    color: ${Colors.black};
    padding: ${Padding.p72} ${Padding.p24};

    @media ${max(BreakPoints.md)} {
      padding: ${Padding.p32} ${Padding.p16};
    }

    .cardCopy {
      font-size: ${FontSize.lg};
      font-weight: ${FontWeight.bold};
      margin-top: ${Margin.m16};
      line-height: 1.4;

      @media ${max(BreakPoints.lg)} {
        font-size: ${FontSize.md};
      }
    }

    .cardLead {
      font-size: ${FontSize.xs};
      margin-top: ${Margin.m24};
      line-height: 3.2rem;
    }
  }
`
