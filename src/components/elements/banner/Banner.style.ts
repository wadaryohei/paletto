import styled from 'styled-components'
import { Index } from '@/components/elements/banner/Banner'
import { BreakPoints, max } from '@/constants/BreakPoints'
import { Colors } from '@/constants/Colors'
import { Padding } from '@/constants/Padding'

//----------------------------------
// style
//----------------------------------
export const Style = styled(Index)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  border-radius: 8px;
  border: solid 4px ${Colors.black};
  width: 100%;
  height: 320px;
  padding: ${Padding.p16};
  text-align: center;

  @media ${max(BreakPoints.md)} {
    height: 220px;
  }
`
