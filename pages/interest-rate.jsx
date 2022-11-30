import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

//Formula: Interest = (Amount / Principal) ^ (1 / Time) - 1

const InterestRate = () => {
  return (
    <div>
      Interest rate
    </div>
  );
}

export default InterestRate;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    }
  }
}