import React from 'react';
import './assets/sass/App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickSearch from './components/QuickSearch';
import ListSurat from './components/ListSurat';
import Section from './components/Section';

function App() {
  return (
    <>
      <Header />
      <Hero>
        <QuickSearch />
      </Hero>
      <Section title={'Daftar Surat'}>
        <ListSurat />
      </Section>
    </>
  );
}

export default App;
