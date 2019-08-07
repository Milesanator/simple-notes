import React, { Component } from 'react'
import Editor from '../Editor'
import PageContainer from './Page.css'

class Page extends Component {
  constructor(props) {
    super(props)

    this.contentEditable = React.createRef()

    this.state = {
      editorValue: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      editorValue: e.target.value
    })
  }

  render() {
    const { editorValue } = this.state

    return (
      <PageContainer>
        <Editor
          innerRef={this.contentEditable}
          html={editorValue}
          onChange={this.handleChange}
        />
      </PageContainer>
    )
  }
}

export default Page
