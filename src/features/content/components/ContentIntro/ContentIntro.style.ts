import styled from 'styled-components'
import { Index } from '@/features/content/components/ContentIntro/ContentIntro'
import { Margin } from '@/constants/Margin'
import { FontSize } from '@/constants/FontSize'
import { BreakPoints, max } from '@/constants/BreakPoints'

//----------------------------------
// style
//----------------------------------
export const Style = styled(Index)`
  .servicesIntroHeader {
    margin-bottom: ${Margin.m32};

    @media ${max(BreakPoints.md)} {
      font-size: ${FontSize.md};
    }
  }
`
