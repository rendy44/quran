import React from 'react';
import { useParams } from "react-router-dom";
import { LoadingFull, ErrorScreen } from '../Global';
import PropTypes from 'prop-types';
import Section from '../Section';
import './Style.scss';

class DetailSuratBody extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            suratId: '',
            isLoaded: false,
            isLoadSuccess: false,
            numberOfAyat: 0,
            nameOfSurat: '',
            listAyat: [],
            translation: []
        }
    }

    render() {
        const { isLoaded, isLoadSuccess, listAyat, translation } = this.state;
        if (isLoaded) {
            if (isLoadSuccess) {
                let AyatList = Object.entries(listAyat);
                let ListAyatHtml = [];

                let TranslationList = Object.entries(translation);
                console.log(TranslationList)

                AyatList.map((ayat, i) => {

                    const cleanAyatStr = ayat[0].replace('verse_', ''),
                        cleanAyatTrans = TranslationList[i][1];

                    // Skip if it is verse_0;
                    if ('verse_0' === ayat[0]) {
                        return false;
                    }

                    return (
                        ListAyatHtml.push(<DetailAyat
                            key={i}
                            ayatIndex={cleanAyatStr}
                            ayatAr={ayat[1]}
                            ayatTranslation={cleanAyatTrans}
                        />)
                    )
                })
                return (
                    <>
                        <Section isFull={true}>
                            <div className='ayat-items'>
                                {ListAyatHtml}
                            </div>
                        </Section>
                    </>
                )
            } else {
                return (
                    <ErrorScreen title={'Kesalahan'} lead={'Surat tidak ditemukan!'} />
                )
            }
        } else {
            return (
                <LoadingFull />
            )
        }
    }

    componentDidMount() {

        const { suratId } = this.props;
        // Import detail surat.
        importDetailSurat(suratId)
            .then((data) => {

                // Import translation.
                importTranslation(suratId)
                    .then((dataTrans) => {
                        this.setState({
                            isLoaded: true,
                            isLoadSuccess: true,
                            nameOfSurat: data.name,
                            numberOfAyat: data.count,
                            listAyat: data.verse,
                            translation: dataTrans.verse
                        })
                    })
                    .catch((err) => {
                        console.log(err)
                        this.setState({ isLoaded: true })
                    })
            })
            .catch((err) => {
                this.setState({ isLoaded: true })
            })
    }
}

const importTranslation = (suratIndex) => {
    return (
        import('../../data/translation/id/id_translation_' + suratIndex + '.json')
    )
}
const importDetailSurat = (suratIndex) => {
    return (
        import('../../data/surah/surah_' + suratIndex + '.json')
    )
}

const DetailSurat = () => {
    let { suratId } = useParams();

    return (
        <DetailSuratBody suratId={parseInt(suratId)} />
    )
}

const DetailAyat = (props) => {
    return (
        <div className='ayat-item'>
            <div className='ayatAr'>
                <span className='ar'>{props.ayatAr}</span>
                <span className='breaker'>
                    <span className='breaker-inner'>{props.ayatIndex}</span>
                </span>
            </div>
            <div className='ayatTranslation'>
                <p>{props.ayatTranslation}</p>
            </div>
        </div>
    )
}

DetailSuratBody.propTypes = {
    suratId: PropTypes.number.isRequired
}
DetailAyat.propTypes = {
    ayatAr: PropTypes.string.isRequired,
    ayatIndex: PropTypes.string.isRequired,
    ayatTranslation: PropTypes.string.isRequired
}

export { DetailSurat, DetailSuratBody, DetailAyat }