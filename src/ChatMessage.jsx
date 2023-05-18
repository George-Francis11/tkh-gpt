import React from 'react'
import Typed from 'react-typed';


function ChatMessage(props) {
  const { sender, text } = props.msg;
  const messageClass = sender === 'user' ? 'sent' : 'received' ;

  return (
    <div className={`message ${messageClass}`}>
      <img src = {messageClass == 'received'? '/bot.png' : '/user.png'} />
      {messageClass == 'sent' && <p>{text}</p>}
      {messageClass == 'received' && text != "<typing>" &&
        <Typed
        className='typed-text'
        strings={[text]}
        typeSpeed={30}
        showCursor={false}
        
        />}
      {messageClass == 'received' && text == "<typing>" &&
        <Typed
          className='typed-text'
          strings={['&#x2022; &#x2022; &#x2022; &#x2022; &#x2022;']}
          typeSpeed={30}
          loop = {true}
        />}
        </div>
    )
}


export default ChatMessage