import React from 'react';
import { useParams } from "react-router-dom";
import { LoadingFull } from '../Global';

export class DetailSuratBody extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            suratId: '',
            detailSurat: [],
            isLoaded: false,
            isLoadSuccess: false
        }
    }

    render() {
        const { isLoaded, isLoadSuccess, detailSurat } = this.state;
        if (isLoaded) {
            if (isLoadSuccess) {
                console.log(detailSurat);
            } else {

            }
        } else {
            return (
                <LoadingFull />
            )
        }

        return (
            <>
                {this.state.suratId}
            </>
        )
    }

    componentDidMount() {
        importDetailSurat(this.props.suratId)
            .then((data) => {
                this.setState({
                    isLoaded: true,
                    isLoadSuccess: true,
                    detailSurat: data
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
export function DetailSurat() {
    let { suratId } = useParams();

    return (
        <DetailSuratBody suratId={suratId} />
    )
}