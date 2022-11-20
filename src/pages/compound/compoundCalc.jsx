import Title from './components/pure/Title.jsx';
import CompoundInterest from './components/forms/CompoundInterest.jsx';
import './dist/output.css';

function compoundCalc() {
  return (
    <div className="container md:mx-auto md:px-20 px-4">
      <Title />
      <CompoundInterest />
    </div>
  );
}

export default compoundCalc;
