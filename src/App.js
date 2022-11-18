import Title from './components/pure/Title.jsx';
import Form from './components/forms/Form.jsx';
import './dist/output.css';

function App() {
  return (
    <div className=" container mx-auto px-20">
      <Title />
      <Form />
      {/* <CallbackRef /> */}
    </div>
  );
}

export default App;
