import styled from 'styled-components'

const EditorContainer = styled.div`
  background-color: white;
  border: 1px solid ${props => props.theme.primary};
  border-radius: 4px;
  cursor: text;
  min-height: 400px;
  padding: 24px;
  width: 600px;

  &:focus {
    outline: 1px dotted ${props => props.theme.secondary}
  }  
`

const EditorEditableContent = styled.div`

`

export {
  EditorContainer,
  EditorEditableContent
}
