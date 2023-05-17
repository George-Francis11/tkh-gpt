import React from 'react'


function ChatMessage(props) {
  const { sender, text } = props.msg;

  const messageClass = sender === 'user' ? 'sent' : 'received' ;

  return (
    <div className={`message ${messageClass}`}>
      <img src = {messageClass == 'received'? '/bot.png' : '/user.png'} />
      <p>{text}</p>
        </div>
    )
}


export default ChatMessage