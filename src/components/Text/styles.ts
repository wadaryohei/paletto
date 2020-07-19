import styled from 'styled-components'
import { TextComponent } from './doms'
import { Colors } from '../../const/Colors'
import { Margin } from '../../const/Margin'
import { BreakPoints, max, min } from '../../const/BreakPoints'
import { FontSize } from '../../const/FontSize'
import { FontWeight } from '../../const/FontWeight'

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
    font-weight: ${FontWeight.normal};
    font-family: 'Crimson Text', serif;
    color: ${Colors.black};

    @media ${max(BreakPoints.md)} {
      font-size: ${FontSize.lg};
    }
  }

  &.subheading {
    font-size: ${FontSize.md};
    font-weight: ${FontWeight.bold};
    font-family: 'EB Garamond', serif;
    color: ${Colors.gray};

    @media ${max(BreakPoints.md)} {
      font-size: ${FontSize.md};
    }
  }

  &.copy {
    display: block;
    font-size: ${FontSize.xl};
    font-weight: ${FontWeight.bold};
    font-family: 'EB Garamond', serif;
    color: ${Colors.black};
    margin-top: ${Margin.m8};

    @media ${max(BreakPoints.md)} {
      font-size: ${FontSize.md};
    }

    & + p {
      margin-top: ${Margin.m16};
    }
  }

  &.lead {
    font-size: ${FontSize.xs};
    color: ${Colors.black};
    line-height: 3.6rem;

    span {
      display: block;
    }
  }
`
