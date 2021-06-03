import React, { Component } from 'react'
import ReactTypingEffect from 'react-typing-effect';
export default class TypingEffect extends Component {
  render() {
    return (
      <div>
        <ReactTypingEffect
          className="introduction"
          text={["Hi, I'm Eric Almendral", "Information Technologist"]}
          speed='100'
          eraseSpeed='25'
          eraseDelay='250'
          typingDelay='200'
        />
      </div>
    )
  }
}
