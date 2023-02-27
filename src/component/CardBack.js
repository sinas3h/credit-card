import React, { useContext } from 'react';

// context
import { dataContext } from './Form';

//style
import style from './CardBack.module.css'

// image
import cardBack from '../images/bg-card-back.png'


const CardBack = () => {

    const data = useContext(dataContext)
    const {cvc} = data

    return (
        <div className={style.container}>
            <img className={style.cardBack} src={cardBack} alt='cardBack' />
            <div className={style.cardCvc}>{cvc ? <p>{cvc}</p> : <p>000</p>}</div>
        </div>
    );
};

export default CardBack;