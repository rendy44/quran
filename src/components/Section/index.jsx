import React from 'react';
import PropTypes from 'prop-types';
import './Style.scss';

const Section = (props) => {
    return (
        <>
            <section className='section'>
                <div className='frow-container'>
                    <div className='inner'>
                        <div className='section-title'>
                            <h2 className='title'>{props.title}</h2>
                        </div>
                        {props.children}
                    </div>
                </div>
            </section>
        </>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired
}
export default Section;