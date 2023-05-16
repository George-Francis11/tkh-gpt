import React, { useRef, useState } from 'react';
import ChatMessage from './ChatMessage';
import getPrediction from './utils/getPrediction';
import './ChatRoom.css';


function ChatRoom() {
  const dummy = useRef();
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const usmessage = userMessage.trim();
    setUserMessage('');
    messages.push({ sender: 'user', text: usmessage });
    setLoading(true);
    const data = await getPrediction(usmessage);
    var result = data.result;
    if (result.includes('A:')) {
        result = result.substring(result.indexOf('A:'));
    }
    else {
        result = 'A: ' + result;
    }
    messages.push({ sender: 'bot', text: result });
    setLoading(false);
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
      <div className='ChatRoom'>
      <main>
        {messages && messages.length > 0 && messages.map(msg => <ChatMessage msg = {msg} />)}
        {loading && <p>Thinking about an answer...</p>}
      <span ref={dummy}></span>

    </main>

    <form onSubmit={handleSubmit}>

      <input value={userMessage} onChange={(e) => setUserMessage(e.target.value)} placeholder="Ask me something..." />

      <button type="submit" disabled={!userMessage}>🕊️</button>

      </form>
      </div>
    )
}


export default ChatRoom;
