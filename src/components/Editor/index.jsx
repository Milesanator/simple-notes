import React from 'react'
import PropTypes from 'prop-types'
import { EditorContainer, EditorEditableContent } from './Editor.css'

const Editor = ({ value, onChange }) => (
  <EditorContainer>
    <EditorEditableContent
      contenteditable="true"
      onChange={onChange}
    >
      {value || ''}
    </EditorEditableContent>
  </EditorContainer>
)

Editor.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Editor
