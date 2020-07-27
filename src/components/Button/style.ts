import styled, { css } from 'styled-components'
import { ButtonComponent, LinkButtonComponent } from './dom'
import { Colors } from '../../const/Colors'
import { Padding } from '../../const/Padding'
import { FontWeight } from '../../const/FontWeight'
import { FontSize } from '../../const/FontSize'
import { hover, unHover } from '../../const/Transition'

//----------------------------------
// styledComponent
//----------------------------------
export const ButtonBaseStyle = css`
  cursor: pointer;
  padding: ${Padding.p24} ${Padding.p32};
  background-color: ${Colors.midGray};
  border-radius: 99rem;
  color: ${Colors.white};
  font-size: ${FontSize.sm};
  font-family: 'Gilroy-Bold', sans-serif;

  &.primary {
    transition: ${unHover(200)};
    background-color: ${Colors.primary};

    &:hover {
      background-color: ${Colors.gray};
      transition: ${hover(200)};
    }
  }

  &.border {
    transition: ${unHover(200)};
    color: ${Colors.gray};
    border: solid 1px ${Colors.gray};
    background-color: ${Colors.white};

    &:hover {
      background-color: ${Colors.gray};
      color: ${Colors.white};
      transition: ${hover(200)};
    }
  }

  &.lg {
    min-width: 320px;
    padding: ${Padding.p16} ${Padding.p32};
    font-weight: ${FontWeight.bold};
    font-size: ${FontSize.sm};
  }

  &.md {
    min-width: 240px;
    padding: ${Padding.p16} ${Padding.p32};
    font-weight: ${FontWeight.normal};
    font-size: ${FontSize.sm};
  }

  &.sm {
    min-width: 220px;
    padding: ${Padding.p16} ${Padding.p32};
    font-size: ${FontSize.sm};
  }

  &:disabled {
    opacity: 0.4;
    background-color: ${Colors.primary};
    cursor: default;

    &.primary {
      &:hover {
        background-color: ${Colors.primary};
      }
    }
  }
`

export const ButtonStyle = styled(ButtonComponent)`
  ${ButtonBaseStyle};
`

export const LinkButtonStyle = styled(LinkButtonComponent)`
  button {
    ${ButtonBaseStyle};
  }
`
