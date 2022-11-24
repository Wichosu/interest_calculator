import React from 'react';
import '../../dist/output.css';
import Title from '../../components/pure/Title';
import SubTitle from '../../components/pure/Subtitle';
import Paragraph from '../../components/pure/Paragraph';
import { useTranslation } from 'react-i18next';

const Home = () => {

  const { t } = useTranslation();

  return(
    <>
      <Title title={t('home')} />
      <section>
        <article>
          <SubTitle title={t('sub1')} />
          <Paragraph text={t('p1', { joinArrays: ' '})} />
          <SubTitle title={t('sub2')} />
          <Paragraph text={t('p2', { joinArrays: ' '})} />
          <SubTitle title={t('sub3')} />
          <Paragraph text={t('p3', { joinArrays: ' '})} />
        </article>
      </section>
    </>
  )
}

export default Home;
