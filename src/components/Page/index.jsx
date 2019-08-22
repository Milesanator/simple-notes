import React, { useState } from 'react'
import Editor from 'components/Editor'
import PageContainer from './Page.css'

const Page = () => {
  const editorValue = useEditorValue()

  return (
    <PageContainer>
      <Editor
        value={editorValue.value}
        onChange={editorValue.onChange}
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
