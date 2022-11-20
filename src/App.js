import Title from './components/pure/Title.jsx';
import Form from './components/forms/Form.jsx';
import './dist/output.css';

function App() {
  return (
    <div className=" container md:mx-auto md:px-20 px-4">
      <Title />
      <Form />
      {/* <CallbackRef /> */}
    </div>
  );
}

export default App;
