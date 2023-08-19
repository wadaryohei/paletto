import styled from 'styled-components'
import { Index } from '@/components/elements/nav/Nav'
import { FontSize } from '@/constants/FontSize'
import { Colors } from '@/constants/Colors'
import { Margin } from '@/constants/Margin'
import { BreakPoints, max } from '@/constants/BreakPoints'

//----------------------------------
// style
//----------------------------------
export const Style = styled(Index)`
  > ul {
    display: flex;
    flex-wrap: wrap;
    margin-right: -${Margin.m16};

    @media ${max(BreakPoints.md)} {
      display: none;
    }

    > li {
      a {
        font-size: ${FontSize.sm};
        color: ${Colors.black};
        margin-right: ${Margin.m16};
      }
    }
  }
`
