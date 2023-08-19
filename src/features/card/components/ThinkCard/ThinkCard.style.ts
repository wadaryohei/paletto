import styled from 'styled-components'
import { Index } from '@/features/card/components/ThinkCard/ThinkCard'
import { BreakPoints, max } from '@/constants/BreakPoints'
import { Margin } from '@/constants/Margin'
import { Padding } from '@/constants/Padding'
import { Colors } from '@/constants/Colors'
import { FontSize } from '@/constants/FontSize'

//----------------------------------
// style
//----------------------------------
export const Style = styled(Index)`
  background-color: ${Colors.white};

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
      margin-top: ${Margin.m24};
      margin-bottom: ${Margin.m24};
    }

    .cardCopy {
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
