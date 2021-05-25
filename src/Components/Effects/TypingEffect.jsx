import React, { Component } from 'react'
import ReactTypingEffect from 'react-typing-effect';
export default class TypingEffect extends Component {
  render() {
    return (
      <div>
        <ReactTypingEffect
          className="introduction"
          text={["Hello, I'm Eric.", "Fullstack Software Engineer", "I Design and Build software", "Have an Eye to Software Security"]}
          speed='300ms'
          eraseDelay='2500'
          typingDelay='5000ms'
        />
      </div>
    )
  }
}
