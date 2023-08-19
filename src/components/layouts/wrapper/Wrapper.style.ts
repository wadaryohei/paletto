import styled from 'styled-components'
import { Index } from '@/components/layouts/wrapper/Wrapper'
import { Padding } from '@/constants/Padding'
import { Colors } from '@/constants/Colors'
import { BreakPoints, max } from '@/constants/BreakPoints'

//----------------------------------
// style
//----------------------------------
export const Style = styled(Index)`
  max-width: 72%;
  width: 72%;
  margin-left: auto;
  padding: ${Padding.p160} ${Padding.p32};
  background-color: ${Colors.white};

  @media ${max(BreakPoints.md)} {
    max-width: 100%;
    width: 100%;
    padding: ${Padding.p160} ${Padding.p16};
  }
`
