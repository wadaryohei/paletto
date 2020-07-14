import styled from 'styled-components'
import { ServiceCardComponent } from './dom'
import { BreakPoints, max } from '../../const/BreakPoints'
import { Margin } from '../../const/Margin'
import { Padding } from '../../const/Padding'
import { Colors } from '../../const/Colors'
import { FontWeight } from '../../const/FontWeight'
import { FontSize } from '../../const/FontSize'

export const ServiceCardStyle = styled(ServiceCardComponent)`
  position: relative;
  width: 640px;
  height: auto;
  padding: ${Padding.p160} ${Padding.p32};
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: ${Margin.m16};
  border-radius: 10px;
  scroll-snap-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0px 3px 33px -6px rgba(0, 0, 0, 0.15);

  @media ${max(BreakPoints.md)} {
    width: 95%;
    height: auto;
    padding: ${Padding.p56} ${Padding.p16};
    justify-content: flex-start;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 100%;
    width: ${Padding.p16};
    height: 1px;
  }

  > .cardNum,
  .cardTitle,
  .cardCopy,
  .cardLead {
    color: ${Colors.white};
  }

  > .cardNum {
    font-size: ${FontSize.xl};
    font-weight: ${FontWeight.bold};
    color: ${Colors.white};

    @media ${max(BreakPoints.lg)} {
      font-size: ${FontSize.lg};
    }
  }

  > .cardTitle {
    font-size: ${FontSize.md};
    font-weight: ${FontWeight.bold};
    margin-top: ${Margin.m72};
    color: ${Colors.white};

    @media ${max(BreakPoints.lg)} {
      font-size: ${FontSize.sm};
      margin-top: ${Margin.m40};
    }
  }

  > .cardCopy {
    font-size: ${FontSize.lg};
    font-weight: ${FontWeight.bold};
    margin-top: ${Margin.m16};
    line-height: 1.4;

    @media ${max(BreakPoints.lg)} {
      font-size: ${FontSize.md};
    }
  }

  > .cardLead {
    font-size: ${FontSize.xs};
    font-weight: ${FontWeight.bold};
    margin-top: ${Margin.m24};
    line-height: 3.2rem;
  }
`
