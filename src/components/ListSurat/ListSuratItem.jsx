import React from 'react';
import PropTypes from 'prop-types';

const ListSuratItem = (props) => {
    return (
        <div className='surat-item'>
            <a href='#url'>
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
            </a>
        </div>
    )
}

ListSuratItem.propTypes = {
    index: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    titleAr: PropTypes.string.isRequired,
    numberOfAyat: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired
}
export default ListSuratItem