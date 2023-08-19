import styled from 'styled-components'
import { Index } from '@/components/elements/drawernav/DrawerNav'
import { Colors } from '@/constants/Colors'
import { FontSize } from '@/constants/FontSize'
import { Padding } from '@/constants/Padding'
import { Margin } from '@/constants/Margin'

//----------------------------------
// style
//----------------------------------
export const Style = styled(Index)`
  position: relative;

  .drawerNav {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: ${Padding.p16};
    width: 80vw;
    height: 100%;

    .drawerNavHeaderWrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: ${Margin.m32};
    }

    ul {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      width: 100%;
      height: 100%;
      margin-bottom: ${Margin.m32};

      li {
        width: 100%;

        a {
          display: block;
          color: ${Colors.black};
          font-size: ${FontSize.md};
          font-family: 'Gilroy-Bold', sans-serif;
          padding: ${Padding.p16} 0;
        }
      }
    }
  }
`
