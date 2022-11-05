import Title from './components/pure/Title.jsx';
import InputPrincipal from './components/pure/InputPrincipal.jsx';
import InputInterest from './components/pure/InputInterest.jsx';
import InputTime from './components/pure/InputTime.jsx';
import InputAmount from './components/pure/InputAmount.jsx';
import Form from './components/containers/Form.jsx';

function App() {
  return (
    <div className="container">
      <Title />
      <Form />
    </div>
  );
}

export default App;
