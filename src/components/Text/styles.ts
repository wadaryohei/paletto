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
    font-size: ${FontSize.md};
    font-weight: ${FontWeight.bold};
    color: ${Colors.primary};

    @media ${max(BreakPoints.md)} {
      font-size: ${FontSize.lg};
    }
  }

  &.copy {
    font-size: ${FontSize.xl};
    font-weight: ${FontWeight.bold};
    color: ${Colors.black};
    margin: ${Margin.m56} 0;

    @media ${max(BreakPoints.md)} {
      font-size: ${FontSize.md};
      margin: ${Margin.m32} 0;
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
    font-size: ${FontSize.xl};
    font-weight: ${FontWeight.bold};
    color: ${Colors.secondary};
    line-height: 2.4rem;

    @media ${max(BreakPoints.md)} {
      font-size: ${FontSize.md};
    }
  }

  &.lead {
    font-size: ${FontSize.sm};
    font-weight: ${FontWeight.bold};
    color: ${Colors.black};
    line-height: 4rem;

    @media ${max(BreakPoints.md)} {
      font-size: ${FontSize.xs};
      line-height: 3.2rem;
    }
  }
`
