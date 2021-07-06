import './App.css';
import SwitchControl from './containers';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <SwitchControl />
      </Router>
    </div>
  );
}

export default App;
