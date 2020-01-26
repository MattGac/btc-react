import React from 'react';

const CryptoFilter = (props) =>{
    return (
        <div className='filter-form'>
            <input type='text' placeholder='Waluta' onChange={props.filter}/>

        </div>

    )
}

export default CryptoFilter