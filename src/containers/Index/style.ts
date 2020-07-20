import styled from 'styled-components'
import IndexContainer from './container'
import { BreakPoints, max } from '../../const/BreakPoints'
import { Padding } from '../../const/Padding'
import { Colors } from '../../const/Colors'
import { Margin } from '../../const/Margin'

//--------------------------------------
// Indexページ全体のスタイル
//--------------------------------------
export const IndexContainerStyle = styled(IndexContainer)`
  position: relative;

  /**
   * 各レイアウトのスタイル
   */
  .l-vision {
    @media ${max(BreakPoints.md)} {
      padding-bottom: 0;
    }
  }

  .l-approach {
    position: relative;
    background-color: ${Colors.black};
    width: 100%;
    padding: ${Padding.p112} ${Padding.p72};

    @media ${max(BreakPoints.md)} {
      padding: ${Padding.p112} ${Padding.p16};
    }
  }

  .l-service {
    padding-top: ${Margin.m160};
    background-color: ${Colors.white};
  }

  .l-think {
    background-color: ${Colors.black};
    padding: ${Padding.p160} ${Padding.p16};
  }
`
