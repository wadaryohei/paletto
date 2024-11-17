import styled from 'styled-components'
import { Index } from '@/components/layouts/footer/Footer'
import { Colors } from '@/constants/Colors'
import { Padding } from '@/constants/Padding'
import { Margin } from '@/constants/Margin'
import { BreakPoints, max } from '@/constants/BreakPoints'
import { hover } from '@/constants/Transition'

//----------------------------------
// style
//----------------------------------
export const Style = styled(Index)`
  width: 100%;
  background-color: ${Colors.black};
  padding: ${Padding.p64};

  @media ${max(BreakPoints.md)} {
    padding: ${Padding.p64} 0;
  }

  .footerContactLink {
    > a {
      position: relative;
      display: block;
      background-color: ${Colors.white};
      color: ${Colors.black};
      text-align: center;
      padding: ${Padding.p64} ${Padding.p32};
      transition: ${hover(400)};
      overflow: hidden;

      @media ${max(BreakPoints.md)} {
        padding: ${Padding.p64} ${Padding.p16};
      }
    }

    .footerContactWrapper {
      position: relative;
      z-index: 1;

      .footerContactLead {
        margin-top: ${Margin.m16};
        line-height: 1.6;
        span {
          display: block;
        }
      }
    }
  }

  .footerCopyWrapper {
    display: block;
    width: 100%;
    margin-top: ${Margin.m24};
  }
`
