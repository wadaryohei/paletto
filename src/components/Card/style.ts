import styled from 'styled-components'
import { CardComponent } from './dom'
// import { BreakPoints, max } from '../../const/BreakPoints'
import { Colors } from '../../const/Colors'

export const CardStyle = styled(CardComponent)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  background-color: ${Colors.white};
  box-shadow: 0px 3px 33px -6px rgba(0, 0, 0, 0.15);
`
