import styled from 'styled-components'
import { ModalComponent } from './dom'
import { Margin } from '../../const/Margin'
import { Padding } from '../../const/Padding'
import { FontSize } from '../../const/FontSize'
import { FontWeight } from '../../const/FontWeight'
import { BreakPoints, max } from '../../const/BreakPoints'

//----------------------------------
// styledComponent
//----------------------------------
export const ModalStyle = styled(ModalComponent)`
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

  .modalHeaderWrapper {
    .modalHeader {
      font-size: ${FontSize.sm};
      font-weight: ${FontWeight.bold};
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
          font-size: ${FontSize.sm};
          font-weight: ${FontWeight.bold};
          margin-bottom: ${Margin.m8};
        }

        p {
          line-height: 1.6;
          word-break: break-word;
          font-size: ${FontSize.sm};
        }
      }
    }
  }

  .modalFooterWrapepr {
    width: 100%;

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
