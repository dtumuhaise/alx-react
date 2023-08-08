import logo from './logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  const isIndex = true;
  return (
    <div className="App">
      <div header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
        </div>
        <hr />
        <div body className="App-body">
          <p>Login to access the full dashboard</p>
          </div>
          <hr />
          <div footer className="App-footer">
           <p>Copyright {getFullYear()} - {getFooterCopy(isIndex)} </p>
            </div>
    </div>
  );
}

export default App;
