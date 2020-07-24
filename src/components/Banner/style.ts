import styled from 'styled-components'
import { BannerComponent } from './dom'
import { BreakPoints, max } from '../../const/BreakPoints'
import { FontWeight } from '../../const/FontWeight'
import { Colors } from '../../const/Colors'
import { Padding } from '../../const/Padding'

//----------------------------------
// styledComponent
//----------------------------------
export const BannerStyle = styled(BannerComponent)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  border-radius: 8px;
  border: solid 4px ${Colors.black};
  width: 100%;
  height: 320px;
  padding: ${Padding.p16};
  text-align: center;

  @media ${max(BreakPoints.md)} {
    height: 220px;
  }
`
