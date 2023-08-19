import styled from 'styled-components'
import { Index } from '@/features/content/components/ContentPartner/ContentPartner'
import { Padding } from '@/constants/Padding'
import { Margin } from '@/constants/Margin'
import { Colors } from '@/constants/Colors'
import { FontSize } from '@/constants/FontSize'
import { BreakPoints, max } from '@/constants/BreakPoints'

//----------------------------------
// style
//----------------------------------
export const Style = styled(Index)`
  .servicesDesignPartnerHeading {
    line-height: 1;

    @media ${max(BreakPoints.md)} {
      font-size: ${FontSize.lg};
    }
  }

  .servicesDesignPartnerList {
    width: 100%;
    margin-top: ${Margin.m64};

    li {
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
        display: block;
        line-height: 1.6;
        margin-right: auto;
        width: 10%;
        max-width: 10%;

        @media ${max(BreakPoints.md)} {
          display: block;
          width: 100%;
          max-width: 100%;
          margin: auto;
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
        }

        .servicesDesignPartnerListLead {
          margin-top: ${Margin.m16};
        }
      }
    }
  }
`
