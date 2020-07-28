import styled from 'styled-components'

//----------------------------------
// props
//----------------------------------
export interface HeroCanvasProps {
  width: number
  height: number
  top?: number
  left?: number
  right?: number
  bottom?: number
  zIndex?: number
}

//----------------------------------
// styledComponent
//----------------------------------
export const Canvas = styled.div<HeroCanvasProps>`
  position: absolute;
  ${(props) => (props.zIndex ? `z-index: ${props.zIndex}` : `z-index: 1`)};
  ${(props) => props.width && `width: ${props.width}px`};
  ${(props) => props.height && `height: ${props.height}px`};
  ${(props) => props.top && `top: ${props.top}%`};
  ${(props) => props.right && `right: ${props.right}%`};
  ${(props) => props.left && `left: ${props.left}%`};
  ${(props) => props.bottom && `bottom: ${props.bottom}%`};
  background-image: url('./top/hero.jpg');
  background-position: center center;
  background-size: cover;
`
