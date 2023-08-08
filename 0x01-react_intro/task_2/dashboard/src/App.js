import logo from './logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  const isIndex = true;
  const selectInput = (labelFor) => {
    document.querySelector(`input#${labelFor}`).focus();
  }

  return (
    <div className="App">
      <div header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
        </div>
        <hr />
        <div body className="App-body">
          <p>Login to access the full dashboard</p>
          <label htmlFor="email" onClick={() => selectInput("email")}>Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password"  onClick={() => selectInput("password")}>Password:</label>
          <input type="password" id="password" name="password" />
          <button>OK</button>
          </div>
          <hr />
          <div footer className="App-footer">
           <p>Copyright {getFullYear()} - {getFooterCopy(isIndex)} </p>
            </div>
    </div>
  );
}

export default App;
