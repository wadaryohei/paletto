import styled from 'styled-components'
import { TextComponent } from './doms'
import { Colors } from '../../const/Colors'
import { Margin } from '../../const/Margin'
import { BreakPoints, max, min } from '../../const/BreakPoints'
import { FontSize } from '../../const/FontSize'
import { FontWeight } from '../../const/FontWeight'
import { Padding } from '../../const/Padding'

//----------------------------------
// styledComponent
//----------------------------------
export const TextStyle = styled(TextComponent)`
  /**
   * 端末サイズの改行用クラス
   */
  & > span {
    display: block;

    &.sp {
      @media ${max(BreakPoints.md)} {
        display: block;
      }

      @media ${min(BreakPoints.md)} {
        display: inline;
      }
    }
  }

  &.heading {
    font-size: ${FontSize.xl};
    font-weight: ${FontWeight.bold};
    color: ${Colors.white};

    @media ${max(BreakPoints.md)} {
      font-size: ${FontSize.lg};
    }

    span {
      display: inline-block;
      background-color: ${Colors.black};
      padding: 0 ${Padding.p16};
    }
  }

  &.copy {
    display: block;
    font-size: ${FontSize.lg};
    font-weight: ${FontWeight.bold};
    color: ${Colors.white};
    margin-top: ${Margin.m16};

    @media ${max(BreakPoints.md)} {
      font-size: ${FontSize.md};
    }

    span {
      display: inline-block;
      background-color: ${Colors.black};
      padding: ${Padding.p16};

      @media ${max(BreakPoints.md)} {
        padding: ${Padding.p8} ${Padding.p16};
      }
    }
  }

  &.subheading {
    font-size: ${FontSize.md};
    font-weight: ${FontWeight.bold};
    color: ${Colors.gray};
    line-height: 3.2rem;

    @media ${max(BreakPoints.md)} {
      font-size: ${FontSize.md};
    }
  }

  &.accentheading {
    font-size: ${FontSize.lg};
    font-weight: ${FontWeight.bold};
    color: ${Colors.white};
    line-height: 2.4rem;

    @media ${max(BreakPoints.md)} {
      font-size: ${FontSize.md};
    }
  }

  &.lead {
    font-size: ${FontSize.sm};
    color: ${Colors.black};
    line-height: 4.4rem;

    @media ${max(BreakPoints.md)} {
      font-size: ${FontSize.xs};
      line-height: 3.2rem;
    }

    span {
      display: block;
    }
  }
`
