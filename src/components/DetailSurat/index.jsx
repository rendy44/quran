import React from 'react';
import { useParams, Link } from "react-router-dom";
import { LoadingFull, ErrorScreen } from '../Global';
import PropTypes from 'prop-types';
import Section from '../Section';
import { Element } from "react-scroll";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import './Style.scss';

class DetailSuratBody extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            suratId: 0,
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
                let maybeBasmallah = 1 !== this.state.suratId ? <div className='basmallah'><span>بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</span></div> : '';
                let AyatList = Object.entries(listAyat);
                let ListAyatHtml = [];
                let TranslationList = Object.entries(translation);

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
                        <Section isFull={true} extraClass='detail-surat'>
                            {maybeBasmallah}
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

    importTranslation(suratId) {
        return (
            import('../../data/translation/id/id_translation_' + suratId + '.json')
        )
    }
    importDetailSurat(suratId) {
        return (
            import('../../data/surah/surah_' + suratId + '.json')
        )
    }
    componentDidMount() {

        const { suratId } = this.props;
        // Import detail surat.
        this.importDetailSurat(suratId)
            .then((data) => {

                // Import translation.
                this.importTranslation(suratId)
                    .then((dataTrans) => {
                        this.setState({
                            suratId: suratId,
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

const DetailSurat = () => {
    let { suratId } = useParams();

    return (
        <DetailSuratBody suratId={parseInt(suratId)} />
    )
}

const DetailAyat = (props) => {
    return (
        <Element name={'ayat_' + props.ayatIndex} className="element">
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
        </Element>
    )
}

const HeaderSurat = () => {
    let { suratId } = useParams();
    const prevNumber = suratId ? '/surat/' + (parseInt(suratId) - 1) : '',
        nextNumber = suratId ? '/surat/' + (parseInt(suratId) + 1) : '';
    const maybePrevSurat = suratId > 1 ? <li><Link to={prevNumber}><FaArrowLeft /></Link></li> : '',
        maybeNextSurat = suratId < 114 ? <li><Link to={nextNumber}><FaArrowRight /></Link></li> : '';
    return (
        <>
            <ul className='suratNav'>
                {maybePrevSurat}
                {maybeNextSurat}
            </ul>
        </>
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

export { DetailSurat, DetailSuratBody, DetailAyat, HeaderSurat }