import styled from 'styled-components'
import { Index } from '@/components/elements/typography/Typography'
import { Colors } from '@/constants/Colors'
import { Margin } from '@/constants/Margin'
import { FontSize } from '@/constants/FontSize'
import { FontWeight } from '@/constants/FontWeight'
import { BreakPoints, max } from '@/constants/BreakPoints'

//----------------------------------
// style
//----------------------------------
export const Style = styled(Index)`
  /**
   * //----------------------------------
   * variant
   * //----------------------------------
   */
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

  /**
   * //----------------------------------
   * colors
   * //----------------------------------
   */
  &.primary {
    color: ${Colors.primary};
  }

  &.gray {
    color: ${Colors.gray};
  }

  &.white {
    color: ${Colors.white};
  }

  &.black {
    color: ${Colors.black};
  }

  /**
   * //----------------------------------
   * weight
   * //----------------------------------
   */
  &.thin {
    font-weight: ${FontWeight.thin};
  }

  &.light {
    font-weight: ${FontWeight.light};
  }

  &.normal {
    font-weight: ${FontWeight.normal};
  }

  &.bold {
    font-weight: ${FontWeight.bold};
  }

  /**
   * //----------------------------------
   * size
   * //----------------------------------
   */
  &.xs {
    font-size: ${FontSize.xs};
  }

  &.sm {
    font-size: ${FontSize.sm};
  }

  &.md {
    font-size: ${FontSize.md};
  }

  &.lg {
    font-size: ${FontSize.lg};
  }

  &.xl {
    font-size: ${FontSize.xl};
  }

  &.xxl {
    font-size: ${FontSize.xxl};
  }

  &.xxxl {
    font-size: ${FontSize.xxxl};
  }

  /**
   * //----------------------------------
   * family
   * //----------------------------------
   */
  &.en {
    &.light {
      font-family: 'Gilroy-Light', sans-serif;
    }

    &.normal {
      font-family: 'Gilroy-Medium', sans-serif;
    }

    &.bold {
      font-family: 'Gilroy-Bold', sans-serif;
    }
  }

  &.jp {
    font-family: '游ゴシック', YuGothic, sans-serif;

    &.thin {
      font-weight: ${FontWeight.thin};
    }

    &.light {
      font-weight: ${FontWeight.light};
    }

    &.normal {
      font-weight: ${FontWeight.normal};
    }

    &.bold {
      font-weight: ${FontWeight.bold};
    }
  }
`
