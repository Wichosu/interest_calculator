import Title from './components/pure/title.jsx';
import InputPrincipal from './components/pure/inputPrincipal.jsx';
import InputInterest from './components/pure/inputInterest.jsx';
import InputTime from './components/pure/inputTime.jsx';
import InputAmount from './components/pure/inputAmount.jsx';

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <Title />
        <InputPrincipal />
        <InputInterest />
        <InputTime />
        <InputAmount />
      </header>
    </div>
  );
}

export default App;
