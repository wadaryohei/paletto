import styled from 'styled-components'
import { CardComponent } from './dom'
import { Colors } from '../../const/Colors'

//----------------------------------
// styledComponent
//----------------------------------
export const CardStyle = styled(CardComponent)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${Colors.white};
`
