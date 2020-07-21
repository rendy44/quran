import React from 'react';
import ReactLoading from 'react-loading';
import { FullSection } from '../Section';
import PropTypes from 'prop-types';

const LoadingFull = () => {
    return (
        <FullSection>
            <ReactLoading type={'cylon'} color={'#335577'} width={200} height={200} />
        </FullSection>
    )
}

const ErrorScreen = (props) => {
    return (
        <>
            <section className='section section-err'>
                <div className='frow-container'>
                    <div className='inner'>
                        <div className='frow'>
                            <div className='col-md-2-3'>
                                <h2>{props.title}</h2>
                                <p>{props.lead}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

ErrorScreen.propTypes = {
    title: PropTypes.string.isRequired,
    lead: PropTypes.string.isRequired
}

export { LoadingFull, ErrorScreen }