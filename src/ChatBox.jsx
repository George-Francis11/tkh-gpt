import React from 'react'
import TextBox from './components/TextBox';
import Button from './components/Button';
import getPrediction from './utils/getPrediction';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import './ChatBox.css'

function ChatBox() {

    const [text, setText] = React.useState('');
    const [messages, setMessages] = React.useState([]);
    const [generatedText, setGeneratedText] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        const data = await getPrediction(text);
        console.log(data);
        const result = data.result;
        // remove everything before the first A:
        // check if it contains A: first then remove everything before it
        if (result.includes('A:')) {
            const result = result.substring(result.indexOf('A:'));
        }
        else {
            // add a prefix A: to the result
            const result = 'A: ' + result;
        }
        await setGeneratedText(data.result);
        setLoading(false);
    }

    return (
        <div className="">
        <div className="chatBox-container">
            <form >
                <h1 className='title'>TKH-GPT</h1>
                <div className="textBox"><TextBox text={text} setText={setText} className="textbox" /></div>
                <div className="button"><Button onClick={handleSubmit} className='generateButton' > Generate  </Button></div>
            </form>
            <div className="response-section">
                <div className="loading-container">{loading && <p>Loading...</p>}</div>
                <div className="responses-container">{!loading && generatedText && <p>{generatedText}</p>}</div>
            </div>
        </div>
            <div class="container d-flex justify-content-center align-items-center mt-5">
  <div class="row">
    <div class="col-md-6 offset-md-3 col-xl-4 offset-xl-4">
      <div class="card shadow">
        <div class="card-body">
          <h5 class="card-title">Login</h5>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
  )
}

export default ChatBox