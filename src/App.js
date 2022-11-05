import Title from './components/pure/Title.jsx';
import InputPrincipal from './components/pure/InputPrincipal.jsx';
import InputInterest from './components/pure/InputInterest.jsx';
import InputTime from './components/pure/InputTime.jsx';
import InputAmount from './components/pure/InputAmount.jsx';

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
