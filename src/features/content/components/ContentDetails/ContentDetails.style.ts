import styled from 'styled-components'
import { Index } from '@/features/content/components/ContentDetails/ContentDetails'
import { Margin } from '@/constants/Margin'

//----------------------------------
// style
//----------------------------------
export const Style = styled(Index)`
  .detailsSolution {
    margin-bottom: ${Margin.m32};

    > p {
      margin-top: ${Margin.m16};
    }
  }
`
