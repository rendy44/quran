import React from 'react';
import './Style.scss';

const Hero = (props) => {
    return (
        <>
            <div className='hero'>
                <div className='frow-container'>
                    <div className='inner'>
                        <div className='frow'>
                            <div className='col-sm-6-7 col-md-3-4'>
                                <h1 className='hero-title'>القرآن الكريم</h1>
                                <p className='lead'>Kitab Suci Alquran</p>
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;