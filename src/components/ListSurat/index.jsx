import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './Style.scss';

export const ListSurat = (props) => {

    return (
        <>
            <div className='surat-items'>
                {props.children}
            </div>
        </>
    )
}

export const ListSuratItem = (props) => {
    return (
        <div className='surat-item'>
            <Link className='inner-item' to={'/surat/' + props.index}>
                <div className='detail'>
                    <div className='dleft'>
                        <span className='number'>{props.index}</span>
                    </div>
                    <div className='dright'>
                        <div className='drightupper'>
                            <span className='name'>{props.title}</span>
                        </div>
                        <div className='drightbottom'>
                            <span>{props.type}</span>
                            <span>{props.numberOfAyat} ayat</span>
                        </div>
                    </div>
                </div>
                <div className='graph'>
                    <span>{props.titleAr}</span>
                </div>
            </Link>
        </div>
    )
}

ListSuratItem.propTypes = {
    index: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    titleAr: PropTypes.string.isRequired,
    numberOfAyat: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
}