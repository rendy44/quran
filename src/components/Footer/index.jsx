import React from 'react';
import './Style.scss';

const Footer = (props) => {
    return (
        <footer className='footer'>
            <div className='frow-container'>
                <div className='inner'>
                    <div className='frow'>
                        <div className='col-sm-6-7 col-md-4-5 col-lg-3-4'>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer