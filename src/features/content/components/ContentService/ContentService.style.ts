import styled from 'styled-components'
import { Index } from '@/features/content/components/ContentService/ContentService'
import { Padding } from '@/constants/Padding'
import { Colors } from '@/constants/Colors'
import { Margin } from '@/constants/Margin'
import { BreakPoints, max } from '@/constants/BreakPoints'

//----------------------------------
// style
//----------------------------------
export const Style = styled(Index)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .serviceLeadWrapper {
    padding: ${Padding.p96} 0;
  }

  .serviceLeadInWrapper {
    margin-top: ${Margin.m32};
  }

  .serviceCardWrapper {
    position: relative;
    width: 100%;
    padding: ${Padding.p32} ${Padding.p16} ${Padding.p160};

    @media ${max(BreakPoints.md)} {
      padding-right: 0;
      padding-left: 0;
    }

    &::before {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 72.5%;
      background-color: ${Colors.smokeGray};
    }

    &::after {
      content: '';
      display: block;
      width: 1px;
      height: ${Padding.p32};
    }

    .serviceCardGrid {
      margin: ${Margin.m24} auto 0;
    }

    .serviceCard {
      height: 100%;
    }

    .servicesButtonWrapper {
      position: relative;
      z-index: 1;
      text-align: center;

      @media ${max(BreakPoints.md)} {
        text-align: left;
        margin-top: ${Margin.m32};
      }
    }
  }
`
