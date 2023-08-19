import styled from 'styled-components'
import { Index } from '@/components/layouts/service/Service'
import { Margin } from '@/constants/Margin'
import { Padding } from '@/constants/Padding'
import { Colors } from '@/constants/Colors'
import { BreakPoints, max } from '@/constants/BreakPoints'

//----------------------------------
// style
//----------------------------------
export const Style = styled(Index)`
  position: relative;
  padding-top: calc(${Margin.m160} * 2);
  background-color: ${Colors.smokeGray};

  @media ${max(BreakPoints.md)} {
    padding-top: calc(${Padding.p160} + 80px);
  }

  .pageHeaderWrapper {
    position: relative;
    width: 100%;
    margin-bottom: ${Margin.m64};
  }

  .pageHeaderBg {
    width: 100%;
    padding-top: 32.5%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    @media ${max(BreakPoints.md)} {
      padding-top: 54.25%;
    }
  }
`
