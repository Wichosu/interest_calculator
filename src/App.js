import Title from './components/pure/title.jsx';
import InputPrincipal from './components/pure/inputPrincipal.jsx';
import InputInterest from './components/pure/inputInterest.jsx';

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <Title />
        <InputPrincipal />
        <InputInterest />
      </header>
    </div>
  );
}

export default App;
