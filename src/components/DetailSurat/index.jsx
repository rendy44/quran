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
            listAyat: []
        }
    }

    render() {
        const { isLoaded, isLoadSuccess, numberOfAyat, nameOfSurat, listAyat } = this.state;
        if (isLoaded) {
            if (isLoadSuccess) {
                let AyatList = Object.values(listAyat);
                let ListAyatHtml = [];


                AyatList.map((ayat, i) => {

                    // Skip the first ayat as it is bismillah.
                    if (0 === i) {
                        return false;
                    }

                    return (
                        ListAyatHtml.push(<DetailAyat key={i} ayatIndex={i} ayatAr={ayat} />)
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
        importDetailSurat(this.props.suratId)
            .then((data) => {
                this.setState({
                    isLoaded: true,
                    isLoadSuccess: true,
                    nameOfSurat: data.name,
                    numberOfAyat: data.count,
                    listAyat: data.verse
                })
            })
            .catch((err) => {
                this.setState({ isLoaded: true })
            })
    }
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
        </div>
    )
}

DetailSuratBody.propTypes = {
    suratId: PropTypes.number.isRequired
}
DetailAyat.propTypes = {
    ayatAr: PropTypes.string.isRequired,
    ayatIndex: PropTypes.number.isRequired
}

export { DetailSurat, DetailSuratBody, DetailAyat }