import React from 'react';
import ReactLoading from 'react-loading';
import { FullSection } from '../Section';

export const LoadingFull = () => {
    return (
        <FullSection>
            <ReactLoading type={'cylon'} color={'#335577'} width={200} height={200} />
        </FullSection>
    )
}