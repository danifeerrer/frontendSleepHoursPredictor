import logo from './logo.svg';
import './App.css';
import StressLevel from './StressLevel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="display-4 animate__animated animate__fadeInDown">Sleep Hours Predictor</h1>
        <p>
          <code> This project was built with python and nodejs</code>
        </p>
        <StressLevel />
      </header>
    </div>
  );
}

export default App;
