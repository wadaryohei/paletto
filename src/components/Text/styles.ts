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
    font-size: ${FontSize.xxl};
    font-weight: ${FontWeight.normal};
    font-family: 'Gilroy-Bold', sans-serif;
    color: ${Colors.black};

    @media ${max(BreakPoints.md)} {
      font-size: ${FontSize.lg};
    }
  }

  &.subheading {
    font-size: ${FontSize.md};
    font-weight: ${FontWeight.bold};
    font-family: '游ゴシック体', 'Yu Gothic';
    text-indent: 6px;
    color: ${Colors.gray};

    @media ${max(BreakPoints.md)} {
      font-size: ${FontSize.sm};
    }
  }

  &.copy {
    display: inline-block;
    font-size: ${FontSize.xl};
    font-weight: ${FontWeight.bold};
    font-family: '游ゴシック体', 'Yu Gothic';
    color: ${Colors.white};
    text-indent: 14px;
    background-color: ${Colors.black};
    padding: ${Padding.p16};
    margin-top: ${Margin.m8};

    @media ${max(BreakPoints.md)} {
      font-size: ${FontSize.md};
    }

    & + p {
      margin-top: ${Margin.m48};
    }
  }

  &.lead {
    font-size: ${FontSize.sm};
    font-family: '游ゴシック体', 'Yu Gothic';
    color: ${Colors.black};
    line-height: 3.6rem;

    & + &.lead {
      margin-top: ${Margin.m24};
    }

    span {
      display: block;
    }
  }
`
