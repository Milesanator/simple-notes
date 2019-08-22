import styled from 'styled-components'

const InteractionLayerContainer = styled.div`
  bottom: 0;
  left: 0;
  padding: 25px;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
`

const InteractionLayerWordWrapper = styled.span`
  color: transparent;
  cursor: pointer;
  pointer-events: all;

  &:hover {
    background: red;
    border-radius: 20px;
    color: #000;
    padding: 2px;
  }
`

const InteractionLayerSpace = styled.span`
  padding-right: .2px;
`

export {
  InteractionLayerContainer,
  InteractionLayerWordWrapper,
  InteractionLayerSpace
}