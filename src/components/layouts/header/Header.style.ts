import styled from 'styled-components'
import { Index } from '@/components/layouts/header/Header'
import { Colors } from '@/constants/Colors'
import { FontSize } from '@/constants/FontSize'
import { FontWeight } from '@/constants/FontWeight'
import { BreakPoints, max } from '@/constants/BreakPoints'

//----------------------------------
// style
//----------------------------------
export const Style = styled(Index)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  will-change: transform;
  top: 0;
  left: 0;
  z-index: 10;
  max-width: 100%;
  width: 100%;
  height: 120px;
  font-family: 'Gilroy-Bold', sans-serif;
  background-color: ${Colors.white};

  .headerWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .headerLogo {
    margin-right: auto;
    a {
      font-weight: ${FontWeight.bold};
      font-size: ${FontSize.md};
      color: ${Colors.black};
    }
  }

  .headerNav {
    display: block;

    @media ${max(BreakPoints.md)} {
      display: none;
    }
  }

  .headerNavIcon {
    display: none;

    @media ${max(BreakPoints.md)} {
      display: block;
    }
  }
`
