import styled from 'styled-components'
import ServicesContainer from './container'
import { Padding } from '../../const/Padding'
import { Margin } from '../../const/Margin'
import { Colors } from '../../const/Colors'
import { BreakPoints, max } from '../../const/BreakPoints'

//--------------------------------------
// Servicesページ全体のスタイル
//--------------------------------------
export const ServicesContainerStyle = styled(ServicesContainer)`
  position: relative;

  .l-services {
    padding: ${Padding.p160} 0;
    background-color: ${Colors.white};
  }

  .servicesContainer {
    align-items: center;
  }

  .servicesGrid {
    width: 100%;
    margin: 0 auto;
  }

  .servicesIntroImage {
    width: 80%;
    height: 80%;
    background-size: cover;
    margin: 0 auto;

    @media ${max(BreakPoints.md)} {
      width: 90%;
      height: 90%;
      margin-top: ${Margin.m32};
    }

    &::before {
      content: '';
      display: block;
      padding-top: 100%;
    }
  }

  .servicesLeadWrapper {
    margin-top: ${Margin.m32};
  }

  .servicesCardWrapper {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding: ${Padding.p32} ${Padding.p16} ${Padding.p160};
    background-color: ${Colors.white};
  }

  .serviceCard {
    height: 100%;
  }
`
