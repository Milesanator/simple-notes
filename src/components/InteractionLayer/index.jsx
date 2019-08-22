import React from 'react'
import {
  InteractionLayerContainer,
  InteractionLayerWordWrapper,
  InteractionLayerSpace
} from './InteractionLayer.css';
import parseHtml, { domToReact } from 'html-react-parser'

const InteractionLayer = ({ html }) => {
  // TODO: Only show the red dudes while holding control
  // TODO: handle click
  // open function menu
  // function 1: bloop
  // split text from pass text to parent..
  return (
    <InteractionLayerContainer>
      {parseHtml(html, parserOptions)}
    </InteractionLayerContainer>
  )
}

const parserOptions = {
  replace: (domNode) => {
    if (domNode.next) {
      if (domNode.type === "tag") {
        return (
          domToReact(domNode.next, parserOptions)
        )
      } else {
        return (
          domToReact(domNode.next, parserOptions)
        )
      }
    }

    console.log(domNode)

    if (domNode.children && domNode.children.length > 0) {
      return (
        domToReact(domNode.children, parserOptions)
      )
    } else {
      if (domNode.data) {
        // TODO: handle line with space at the end
        const words = domNode.data.split(" ")
        const mapWords = words.map((word) => (
          <>
            <InteractionLayerWordWrapper>{word}</InteractionLayerWordWrapper>
            <InteractionLayerSpace>&nbsp;</InteractionLayerSpace>
          </>
        ))

        console.log(mapWords)
        return (
          <>
            {mapWords}
          </>
        )
      }
    }
  }
}

export default InteractionLayer
