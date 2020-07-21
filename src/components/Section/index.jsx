import React from 'react';
import PropTypes from 'prop-types';
import './Style.scss';

const Section = (props) => {
    const colSizeCss = props.isFull ? 'col' : 'col-sm-6-7 col-md-4-5 col-lg-3-4';
    const maybeTitle = props.title ? <div className='section-title'><h2 className='title'>{props.title}</h2></div> : '';
    return (
        <>
            <section className='section'>
                <div className='frow-container'>
                    <div className='inner'>
                        <div className='frow'>
                            <div className={colSizeCss}>
                                {maybeTitle}
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    isFull: PropTypes.bool
}

export const FullSection = (props) => {
    return (
        <div className='fullscreen'>
            {props.children}
        </div>
    )
}

export default Section;