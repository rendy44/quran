import React from 'react';
import { Link } from 'react-router-dom';
import './Style.scss';

const Header = () => {
    return (
        <>
            <header className='header'>
                <div className='frow-container'>
                    <div className='inner'>
                        <div className='nav'>
                            <Link to='/'>QuranKu</Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;