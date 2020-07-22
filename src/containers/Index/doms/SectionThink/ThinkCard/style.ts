import styled from 'styled-components'
import { ThinkCardComponent } from './dom'
import { BreakPoints, max } from '../../../../../const/BreakPoints'
import { Margin } from '../../../../../const/Margin'
import { Padding } from '../../../../../const/Padding'
import { Colors } from '../../../../../const/Colors'
import { FontWeight } from '../../../../../const/FontWeight'
import { FontSize } from '../../../../../const/FontSize'

export const ThinkCardStyle = styled(ThinkCardComponent)`
  background-color: ${Colors.white};
  color: ${Colors.white};

  .cardContentsWrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${Padding.p72} ${Padding.p24};

    @media ${max(BreakPoints.md)} {
      padding: ${Padding.p40} ${Padding.p16};
    }

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 8px;
      background-color: ${Colors.gray};
    }

    .cardNum {
      font-size: ${FontSize.xl};
      font-family: 'Gilroy-Bold', sans-serif;
      margin-bottom: ${Margin.m32};
      color: ${Colors.gray};
    }

    .cardTitle {
      font-size: ${FontSize.sm};
      font-family: 'Gilroy-Bold', sans-serif;
      color: ${Colors.gray};

      @media ${max(BreakPoints.lg)} {
        font-size: ${FontSize.sm};
      }
    }

    .cardImg {
      text-align: center;
      img {
        width: 200px;
        height: 200px;
      }
    }
  }
`
