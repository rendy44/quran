import React from 'react';
import './assets/sass/App.scss';
import DataListSurat from './data/surah.json';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickSearch from './components/QuickSearch';
import { ListSurat, ListSuratItem } from './components/ListSurat';
import Section, { FullSection } from './components/Section';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { DetailSurat } from './components/DetailSurat';
import ReactLoading from 'react-loading';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      listSuratHtml: [],
      isLoaded: false
    }
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <>
          <Header />
          <Router>
            <Switch>
              <Route path='/surat/:suratId'>
                <DetailSurat />
              </Route>
              <Route path='/'>
                <>
                  <Hero>
                    <QuickSearch />
                  </Hero>
                  <Section title={'Daftar Surat'}>
                    <ListSurat>
                      {this.state.listSuratHtml}
                    </ListSurat>
                  </Section>
                </>
              </Route>
            </Switch>
          </Router>
          <Footer>
            &copy; 2016 QuranKu - Dibuat dan didesain oleh <a href='http://fb.com/rendy.444444' target='_blank' rel='noopener noreferrer'>Rendy</a>
          </Footer>
        </>
      )
    } else {
      return (
        <FullSection>
          <ReactLoading type={'cylon'} color={'#335577'} />
        </FullSection>
      )
    }
  }

  componentDidMount() {
    let listSuratHtml = [];
    let ParseSurat = DataListSurat.map((surat, i) => {
      return (
        listSuratHtml.push(<ListSuratItem
          key={i}
          index={parseInt(surat.index)}
          title={surat.title}
          titleAr={surat.titleAr}
          numberOfAyat={surat.count}
          type={surat.type}
        />)
      )
    })

    Promise.all(ParseSurat)
      .then((res) => {
        this.setState({
          listSuratHtml: listSuratHtml,
          isLoaded: true
        })
      })
  }
}

export default App;
