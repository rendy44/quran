import React from 'react';
import DataSurat from '../../data/surah.json';
import ListSuratItem from './ListSuratItem';
import './Style.scss';


class ListSurat extends React.Component {
    constructor() {
        super()

        this.state = {
            listSurat: [],
            listSuratHtml: [],
        }
    }

    render() {
        return (
            <>
                <div className='surat-items'>
                    {this.state.listSuratHtml}
                </div>
            </>
        )
    }

    componentDidMount() {
        let listSuratHtml = [];
        DataSurat.map((surat, i) => {
            listSuratHtml.push(<ListSuratItem
                key={i}
                index={surat.index}
                title={surat.title}
                titleAr={surat.titleAr}
                numberOfAyat={surat.count}
                type={surat.type}
            />)
        })

        this.setState({ listSuratHtml: listSuratHtml })
    }
}

export default ListSurat;