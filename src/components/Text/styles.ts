import styled from 'styled-components'
import { TextComponent } from './doms'
import { Colors } from '../../const/Colors'
import { Margin } from '../../const/Margin'
import { BreakPoints, max } from '../../const/BreakPoints'
import { FontSize } from '../../const/FontSize'
import { FontWeight } from '../../const/FontWeight'

//----------------------------------
// styledComponent
//----------------------------------
// 英語の見出し文
export const TextStyle = styled(TextComponent)`
  &.heading {
    font-size: ${FontSize.lg};
    font-weight: ${FontWeight.bold};
    color: ${Colors.primary};

    @media ${max(BreakPoints.md)} {
      font-size: ${FontSize.lg};
    }
  }

  &.copy {
    font-size: ${FontSize.xl};
    font-weight: ${FontWeight.bold};
    font-family: 'HiraginoSans-W9';
    text-indent: 4px;
    color: ${Colors.black};
    margin: ${Margin.m56};

    @media ${max(BreakPoints.md)} {
      font-size: ${FontSize.md};
      margin: ${Margin.m32};
    }
  }

  &.subheading {
    font-size: ${FontSize.md};
    font-weight: ${FontWeight.bold};
    color: ${Colors.gray};
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
