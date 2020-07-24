import styled from 'styled-components'
import { SectionFooterComponent } from './dom'
import { FontSize } from '../../../../const/FontSize'
import { FontWeight } from '../../../../const/FontWeight'
import { Margin } from '../../../../const/Margin'
import { BreakPoints, max } from '../../../../const/BreakPoints'
import { Colors } from '../../../../const/Colors'

//----------------------------------
// styledComponent
//----------------------------------
export const SectionFooterComponentStyle = styled(SectionFooterComponent)`
  .aboutLinkWrapper {
    a {
      display: block;
      width: 100%;
      font-family: 'Gilroy-Bold', sans-serif;
      font-weight: ${FontWeight.bold};
      color: ${Colors.black};
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
      font-size: ${FontSize.xl};
      letter-spacing: 16px;

      @media ${max(BreakPoints.md)} {
        font-size: ${FontSize.md};
      }
    }

    .aboutLinkSubHeading {
      font-size: ${FontSize.xs};
      line-height: 1.6;
    }
  }

  .aboutContactWrapper {
    margin-top: ${Margin.m104};
    text-align: center;

    p {
      font-size: ${FontSize.xs};
    }

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
