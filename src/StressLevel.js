import React, { useState } from 'react';
import axios from 'axios';

function DataSender() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  const handleInputChange = (event, setInput) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/py', {
        input1,
        input2,
        input3,
      });
      console.log('Response from the backend:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }

    setInput1('');
    setInput2('');
    setInput3('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input1}
        onChange={(event) => handleInputChange(event, setInput1)}
      />
      <input
        type="text"
        value={input2}
        onChange={(event) => handleInputChange(event, setInput2)}
      />
      <input
        type="text"
        value={input3}
        onChange={(event) => handleInputChange(event, setInput3)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default DataSender;