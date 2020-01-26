import React from 'react';



const CryptoList = (props) => {

    let cryptoColection = props.cryptoList.map(elem => {

    return <li key={elem.currency} 
    className='crypto-item'>Last rate: <span className=
    {elem.colorClass}>{elem.last}</span>{elem.currency}
    {elem.symbol}</li>
                 
    })


    return (
        <div className='list'>
            {cryptoColection}
        </div>
    )
}

export default CryptoList