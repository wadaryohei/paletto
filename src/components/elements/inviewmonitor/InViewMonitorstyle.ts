import styled from 'styled-components'

//----------------------------------
// props
//----------------------------------
export interface Props {
  isActive: boolean
  delay?: number
}

//----------------------------------
// style
//----------------------------------
export const FadeIn = styled.div<Props>`
  position: relative;
  z-index: 1;
  opacity: 0;
  transition: opacity 1s ease, transform 1s ease;
  ${({ isActive }) => isActive && `opacity: 1;`}
  ${({ delay }) => delay && `transition-delay: ${delay}ms;`}
`

export const FadeInUp = styled(FadeIn)`
  transform: translateY(30px);
  ${({ isActive }) => isActive && `transform: translateY(0px);`}
`

export const FadeInDown = styled(FadeIn)`
  transform: translateY(-30px);
  ${({ isActive }) => isActive && `transform: translateY(0px);`}
`

export const FadeInLeft = styled(FadeIn)`
  transform: translateX(-30px);
  ${({ isActive }) => isActive && `transform: translateX(0px);`}
`

export const FadeInRight = styled(FadeIn)`
  transform: translateX(30px);
  ${({ isActive }) => isActive && `transform: translateX(0px);`}
`
