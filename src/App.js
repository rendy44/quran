import React from 'react';
import './assets/sass/App.scss';
import DataListSurat from './data/surah.json';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickSearch from './components/QuickSearch';
import { ListSurat, ListSuratItem } from './components/ListSurat';
import Section from './components/Section';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { DetailSurat, HeaderSurat } from './components/DetailSurat';
import { LoadingFull } from './components/Global';

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
          <Router>
            <Switch>
              <Route path='/surat/:suratId'>
                <Header>
                  <div className='nav'>
                    <Link to='/'>QuranKu</Link>
                  </div>
                  <HeaderSurat />
                </Header>
                <DetailSurat />
              </Route>
              <Route path='/'>
                <>
                  <Header>
                    <div className='nav'>
                      <Link to='/'>QuranKu</Link>
                    </div>
                  </Header>
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
            <Footer>
              &copy; 2020 QuranKu - Dibuat dan didesain oleh <a href='http://fb.com/rendy.444444' target='_blank' rel='noopener noreferrer'>Rendy</a>
            </Footer>
          </Router>
        </>
      )
    } else {
      return (
        <LoadingFull />
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
