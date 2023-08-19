import styled from 'styled-components'
import { Index } from '@/components/elements/modal/Modal'
import { Margin } from '@/constants/Margin'
import { Padding } from '@/constants/Padding'
import { BreakPoints, max } from '@/constants/BreakPoints'

//----------------------------------
// style
//----------------------------------
export const Style = styled(Index)`
  .modalWrapper {
    padding: ${Padding.p64} ${Padding.p32};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 720px;

    @media ${max(BreakPoints.md)} {
      padding: ${Padding.p64} ${Padding.p16};
    }
  }

  .modalContentsWrapper {
    ul {
      max-width: 720px;
      margin-top: ${Margin.m32};

      li {
        margin-bottom: ${Margin.m40};

        span {
          display: block;
          line-height: 1.6;
        }

        p {
          word-break: break-word;
          margin-top: ${Margin.m8};
        }
      }
    }
  }

  .modalFooterWrapepr {
    width: 100%;
    text-align: center;

    @media ${max(BreakPoints.md)} {
      text-align: center;
    }

    button {
      margin: 0 ${Margin.m8};
    }

    button:nth-of-type(2) {
      margin-top: ${Margin.m16};
    }

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      padding-bottom: ${Padding.p40};
    }
  }
`
