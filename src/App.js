import logo from './logo.svg';
import './App.css';
import Title from './components/pure/title.jsx';
import Input from './components/pure/input.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Input label='Interes'/>
      </header>
    </div>
  );
}

export default App;
