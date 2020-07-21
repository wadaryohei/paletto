import styled from 'styled-components'
import ServicesContainer from './container'
import { Padding } from '../../const/Padding'
import { Margin } from '../../const/Margin'

//--------------------------------------
// Servicesページ全体のスタイル
//--------------------------------------
export const ServicesContainerStyle = styled(ServicesContainer)`
  position: relative;

  .l-services {
    padding: ${Padding.p160} 0;
  }

  .servicesIntroImage {
    width: 100%;
    height: 100%;
    background-size: cover;
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
  }

  .serviceCard {
    height: 100%;
  }
`
