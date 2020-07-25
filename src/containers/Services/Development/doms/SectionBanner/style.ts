import styled from 'styled-components'
import { SectionBannerComponent } from './dom'
import { Margin } from '../../../../../const/Margin'
import { Colors } from '../../../../../const/Colors'
import { FontWeight } from '../../../../../const/FontWeight'
import { FontSize } from '../../../../../const/FontSize'
import { BreakPoints, max } from '../../../../../const/BreakPoints'

//----------------------------------
// styledComponent
//----------------------------------
export const SectionBannerStyle = styled(SectionBannerComponent)`
  font-family: 'Gilroy-Bold', sans-serif;

  .servicesBannerCopy {
    display: block;
    width: 100%;
    color: ${Colors.white};
    margin: ${Margin.m8} 0;
    font-weight: ${FontWeight.bold};
    font-size: ${FontSize.md};
    @media ${max(BreakPoints.md)} {
      font-size: ${FontSize.sm};
    }
  }

  .servicesBannerHeading {
    font-size: ${FontSize.xl};
    letter-spacing: 16px;
    color: ${Colors.white};

    @media ${max(BreakPoints.md)} {
      font-size: ${FontSize.md};
    }
  }
`
