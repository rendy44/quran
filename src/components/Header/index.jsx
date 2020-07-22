import React from 'react';
import './Style.scss';

const Header = (props) => {
    return (
        <>
            <header className='header'>
                <div className='frow-container'>
                    <div className='inner'>
                        {props.children}
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;