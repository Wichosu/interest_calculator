import Title from '../../components/pure/Title.jsx';
import CompoundInterest from '../../components/forms/CompoundInterest.jsx';
import { useTranslation } from 'react-i18next';
import '../../dist/output.css';

function CompoundCalc() {

  const { t } = useTranslation();

  return (
    <div>
      <Title title={ t('compound-interest') }/>
      <CompoundInterest />
    </div>
  );
}

export default CompoundCalc;
