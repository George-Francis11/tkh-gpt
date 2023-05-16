import React from 'react';
import { TextField } from '@material-ui/core';

const style = {
    marginTop: '1em',
    width: '500px',
    alignSelf: 'center',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: 'white',
    color: 'white',
    fontSize: '1.5em',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    border: 'none',
}

const TextBox = ({ text, setText }) => (
    <TextField
        margin='normal'
        // label="ask me something..."
        variant="outlined"
        color="success"
        fullWidth
        multiline
        value={text}
        style={style}
        focused
        onChange={e => setText(e.target.value)}
    />
);

export default TextBox;