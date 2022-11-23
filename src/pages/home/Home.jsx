import React from 'react';
import '../../dist/output.css';
import Title from '../../components/pure/Title';
import SubTitle from '../../components/pure/Subtitle';

const Home = () => {
  return(
    <>
      <Title title={'Home'} />
      <section>
        <article>
          <SubTitle title={'What\'s this about?'} />
        </article>
      </section>
    </>
  )
}

export default Home;
