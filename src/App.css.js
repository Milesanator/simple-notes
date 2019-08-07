import styled from 'styled-components'

const AppContainer = styled.div`
  align-items: center;
  background-color: ${props => props.theme.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`

export default AppContainer
