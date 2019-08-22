import React, { useState, useRef } from 'react'
import ContentEditable from 'react-contenteditable'
import InteractionLayer from 'components/InteractionLayer'
import PageContainer from './Page.css'
import parseHtml from 'html-react-parser'
import './ContentEditableStyle.css'

const Page = () => {
  const editorValue = useEditorValue()
  const contentEditable = useRef(null)

  return (
    <PageContainer>
      <ContentEditable
        innerRef={contentEditable}
        html={editorValue.value}
        onChange={editorValue.onChange}
        className="ContentEditable"
        spellcheck="false"
      />
      <InteractionLayer
        html={editorValue.value}
      />
    </PageContainer>
  )
}

function useEditorValue() {
  const [editorValue, setEditorValue] = useState('')

  function handleChangeEditor(e) {
    setEditorValue(e.target.value)
  }

  return {
    value: editorValue,
    onChange: handleChangeEditor
  }
}

export default Page
