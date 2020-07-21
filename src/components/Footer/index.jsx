import React from 'react';
import './Style.scss';

const Footer = (props) => {
    return (
        <footer className='footer'>
            <div className='frow-container'>
                <div className='inner text-center'>
                    {props.children}
                </div>
            </div>
        </footer>
    )
}

export default Footer