import Title from '../../components/pure/Title.jsx';
import CompoundInterest from '../../components/forms/CompoundInterest.jsx';
import '../../dist/output.css';

function CompoundCalc() {
  return (
    <div>
      <Title title={'Compound Interest Calculator'}/>
      <CompoundInterest />
    </div>
  );
}

export default CompoundCalc;
