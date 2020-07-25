import styled from 'styled-components'
import { SectionPartnerComponent } from './dom'
import { Padding } from '../../../../../const/Padding'
import { Margin } from '../../../../../const/Margin'
import { Colors } from '../../../../../const/Colors'
import { FontSize } from '../../../../../const/FontSize'
import { BreakPoints, max } from '../../../../../const/BreakPoints'
import { FontWeight } from '../../../../../const/FontWeight'

//----------------------------------
// styledComponent
//----------------------------------
export const SectionPartnerStyle = styled(SectionPartnerComponent)`
  .servicesDesignPartnerHeading {
    font-size: ${FontSize.xxl};
    text-align: left;
    line-height: 1;
    color: ${Colors.primary};

    @media ${max(BreakPoints.md)} {
      font-size: ${FontSize.lg};
    }
  }

  .servicesDesignPartnerList {
    width: 100%;
    margin-top: ${Margin.m64};

    > li {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      vertical-align: middle;
      width: 100%;
      margin-bottom: ${Margin.m48};
      padding-bottom: ${Padding.p48};
      border-bottom: solid 1px ${Colors.midGray};

      @media ${max(BreakPoints.md)} {
        flex-direction: column;
      }

      &:last-child {
        border: none;
      }

      .servicesDesignPartnerListNum {
        color: ${Colors.primary};
        font-size: ${FontSize.lg};
        font-family: 'Gilroy-Bold', sans-serif;
        line-height: 1.6;
        margin-right: auto;
        width: 10%;
        max-width: 10%;

        @media ${max(BreakPoints.md)} {
          font-size: ${FontSize.sm};
        }
      }

      .servicesDesignPartnerListLeadWrapper {
        width: 90%;

        @media ${max(BreakPoints.md)} {
          width: 100%;
        }

        .servicesDesignPartnerListHeading {
          width: auto;
          font-size: ${FontSize.lg};
        }

        .servicesDesignPartnerListSubHeading {
          font-weight: ${FontWeight.bold};
        }

        .servicesDesignPartnerListLead {
          margin-top: ${Margin.m16};
          font-weight: ${FontWeight.bold};
        }
      }
    }
  }
`
