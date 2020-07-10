import styled from 'styled-components'
import { TextComponent } from './doms'
import { Colors } from '../../const/Colors'
// import { BreakPoints, max } from '../../const/BreakPoints'
import { FontSize } from '../../const/FontSize'
import { FontFamily } from '../../const/FontFamily'
import { FontWeight } from '../../const/FontWeight'

//----------------------------------
// styledComponent
//----------------------------------
// 英語の見出し文
export const TextStyle = styled(TextComponent)`
  &.heading {
    font-size: ${FontSize.lg};
    color: ${Colors.primary};
  }

  &.copy {
    font-size: ${FontSize.xl};
    color: ${Colors.black};
  }

  &.subheading {
    font-size: ${FontSize.md};
    color: ${Colors.gray};
    line-height: 2.4rem;
  }

  &.lead {
    font-size: ${FontSize.sm};
    color: ${Colors.black};
    line-height: 4rem;
  }

  font-weight: ${FontWeight.bold};
  font-family: ${FontFamily.baseFont};
`
