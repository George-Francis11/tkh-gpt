import { Button as MaterialButton } from '@material-ui/core';
import React from 'react';

const style = {
    marginTop: '1em',
    width: 'fit-content',
    alignSelf: 'center',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#1e1e1e',
    color: 'white'
} 

const Button = ({ onClick }) => (
    <MaterialButton
        style={style}
        onClick={onClick}
        variant="outlined"
        color="primary">
        Generate
  </MaterialButton>
)

export default Button;