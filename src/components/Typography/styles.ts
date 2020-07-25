import styled from 'styled-components'
import { TypographyComponent } from './doms'
import { Colors } from '../../const/Colors'
import { Margin } from '../../const/Margin'
import { FontSize } from '../../const/FontSize'
import { FontWeight } from '../../const/FontWeight'
import { BreakPoints, max, min } from '../../const/BreakPoints'

//----------------------------------
// styledComponent
//----------------------------------
export const TypographyStyle = styled(TypographyComponent)`
  &.heading {
    font-size: ${FontSize.xxl};
    font-family: 'Gilroy-Bold', sans-serif;
    color: ${Colors.black};

    @media ${max(BreakPoints.md)} {
      font-size: ${FontSize.lg};
    }
  }

  &.subheading {
    font-size: ${FontSize.md};
    font-weight: ${FontWeight.bold};
    color: ${Colors.gray};

    @media ${max(BreakPoints.md)} {
      font-size: ${FontSize.sm};
    }
  }

  &.copy {
    display: inline-block;
    font-size: ${FontSize.xl};
    font-weight: ${FontWeight.bold};
    color: ${Colors.black};
    margin-top: ${Margin.m8};

    @media ${max(BreakPoints.lg)} {
      font-size: ${FontSize.md};
    }

    @media ${max(BreakPoints.md)} {
      font-size: ${FontSize.md};
    }

    & + p {
      margin-top: ${Margin.m48};
    }
  }

  &.lead {
    font-size: ${FontSize.sm};
    color: ${Colors.black};
    line-height: 3.2rem;

    @media ${max(BreakPoints.md)} {
      font-size: ${FontSize.xs};
      line-height: 2.8rem;
    }

    & + &.lead {
      margin-top: ${Margin.m24};
    }

    span {
      display: block;
    }
  }
`
