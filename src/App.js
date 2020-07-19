import React from 'react';
import './assets/sass/App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickSearch from './components/QuickSearch';

function App() {
  return (
    <>
      <Header />
      <Hero>
        <QuickSearch />
      </Hero>
    </>
  );
}

export default App;
