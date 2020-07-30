import styled from 'styled-components'
import { SectionFooterComponent } from './dom'
import { FontSize } from '../../../../../const/FontSize'
import { FontWeight } from '../../../../../const/FontWeight'
import { Margin } from '../../../../../const/Margin'
import { BreakPoints, max } from '../../../../../const/BreakPoints'
import { Colors } from '../../../../../const/Colors'

//----------------------------------
// styledComponent
//----------------------------------
export const SectionFooterStyle = styled(SectionFooterComponent)`
  .aboutLinkWrapper {
    a {
      display: block;
      width: 100%;
    }

    span {
      margin: ${Margin.m8} 0;
      display: block;
    }

    .aboutLinkCopy {
      font-size: ${FontSize.md};
      @media ${max(BreakPoints.md)} {
        font-size: ${FontSize.sm};
      }
    }

    .aboutLinkHeading {
      letter-spacing: 16px;

      @media ${max(BreakPoints.md)} {
        font-size: ${FontSize.md};
      }
    }
  }

  .aboutContactWrapper {
    margin-top: ${Margin.m104};
    text-align: center;

    a {
      display: inline-block;
      margin-top: ${Margin.m32};
      font-size: ${FontSize.sm};
      font-weight: ${FontWeight.bold};
      color: ${Colors.black};
      text-decoration: underline;
    }
  }
`
