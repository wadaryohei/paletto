/**
 * Style
 */
import styled from 'styled-components'
import { HeroComponent } from './dom'

export const HeroStyle = styled(HeroComponent)`
  > figure {
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;

    > div {
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
`
