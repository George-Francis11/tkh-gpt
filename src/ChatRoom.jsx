import React, { useRef, useState } from 'react';
import ChatMessage from './ChatMessage';
import getPrediction from './utils/getPrediction';
import './ChatRoom.css';
import Typed from 'react-typed';


function ChatRoom() {
  const dummy = useRef();
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hello! I am TKH-GPT. I am a chatbot designed to help you through answering your questions and concerns regarding TKH Universities\nI am still in development, so please be patient with me. I am still learning.'
    },
  ]);
  const [userMessage, setUserMessage] = useState('');
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const usmessage = userMessage.trim();
    setUserMessage('');
    messages.push({ sender: 'user', text: usmessage });
    setLoading(true);
    dummy.current.scrollIntoView({ behavior: 'smooth' });
    const data = await getPrediction(usmessage);
    var result = data.result;
    messages.push({ sender: 'bot', text: result });
    setLoading(false);
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
      <div className='ChatRoom'>
      <main>
        {messages && messages.length > 0 && messages.map(msg => <ChatMessage msg = {msg} />)}
        {loading && <ChatMessage msg = {{sender: 'bot', text: "<typing>"}} />
        }
      <span ref={dummy}></span>

    </main>

    <form onSubmit={handleSubmit}>

      <input value={userMessage} onChange={(e) => setUserMessage(e.target.value)} placeholder="Ask me something..." />

      <button type="submit" disabled={!userMessage}>Send</button>

      </form>
      </div>
    )
}


export default ChatRoom;
