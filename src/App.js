import logo from './logo.svg';
import './App.css';
import Teswira from './components/profile/Teswira';
import Esm from './components/profile/Esm';
import Adresse from './components/profile/Adresse';

function App() {
  return (
    <div className="App">
      <Teswira/>
      <Esm/>
      <Adresse/>
    </div>
  );
}

export default App;
