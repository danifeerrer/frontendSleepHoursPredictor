import React, { useState } from 'react';
import axios from 'axios';

function DataSender() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [responseData, setResponseData] = useState(null);

  const handleInputChange = (event, setInput) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://18.216.191.240:5000/api/py', {
        input1,
        input2,
        input3,
      });
      setResponseData(response.data);
      console.log('Response from the backend:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }

    setInput1('');
    setInput2('');
    setInput3('');
    

  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
          <input
            type="text"
            value={input1}
            onChange={(event) => handleInputChange(event, setInput1)}
            placeholder="Stress Level"
          />
        </div>
        <div>
          <input
            type="text"
            value={input2}
            onChange={(event) => handleInputChange(event, setInput2)}
            placeholder="Physical Level"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            value={input3}
            onChange={(event) => handleInputChange(event, setInput3)}
            placeholder="Quality of Sleep"
          />
        </div>
      <button type="submit" className="btn btn-primary animate__animated animate__fadeIn">Submit</button>
    </form>
    {responseData && <p>Response from server: {responseData}</p>} 
  </div>
  );

}

export default DataSender;