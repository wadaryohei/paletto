import styled from 'styled-components'
import { Index } from '@/features/content/components/ContentSolution/ContentSolution'
import { BreakPoints, max } from '@/constants/BreakPoints'
import { Margin } from '@/constants/Margin'
import { Padding } from '@/constants/Padding'
import { Colors } from '@/constants/Colors'
import { FontSize } from '@/constants/FontSize'

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

  .servicesDesignSolutionList {
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

      &:last-child {
        border: none;
      }

      @media ${max(BreakPoints.md)} {
        flex-direction: column;
      }

      .servicesDesignSolutionListNum {
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

      .servicesDesignSolutionListWrapper {
        width: 90%;

        @media ${max(BreakPoints.md)} {
          width: 100%;
        }

        .servicesDesignSolutionListHeading {
          width: auto;
        }

        .servicesDesignSolutionListLead {
          margin-top: ${Margin.m16};
        }

        .servicesDesignSolutionListDescription {
          position: relative;
          display: inline-block;
          margin-top: ${Margin.m32};
          padding-left: ${Padding.p32};

          &::before {
            content: '';
            display: inline-block;
            background-color: ${Colors.gray};
            width: 22px;
            height: 2px;
            position: absolute;
            top: 50%;
            left: 0;
            transform: rotate(180deg);
          }
        }

        .servicesDesignSolutionListNotes {
          margin-top: ${Margin.m8};

          @media ${max(BreakPoints.md)} {
            font-size: ${FontSize.xs};
          }
        }
      }
    }
  }
`
