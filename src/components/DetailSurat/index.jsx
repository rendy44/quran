import React from 'react';
import { useParams } from "react-router-dom";

export class DetailSuratBody extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            suratId: ''
        }
    }

    render() {
        return (
            <>
                {this.state.suratId}
            </>
        )
    }

    componentDidMount() {
        this.setState({ suratId: this.props.suratId });
    }
}

export function DetailSurat() {
    let { suratId } = useParams();

    return (
        <DetailSuratBody suratId={suratId} />
    )
}