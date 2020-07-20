import React from 'react';
import './assets/sass/App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickSearch from './components/QuickSearch';
import ListSurat from './components/ListSurat';
import Section from './components/Section';
import Footer from './components/Footer';

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
      <Footer>
        &copy; 2016 QuranKu - Dibuat dan didesain oleh <a href='http://fb.com/rendy.444444' target='_blank' rel='noopener noreferrer'>Rendy</a>
      </Footer>
    </>
  );
}

export default App;
