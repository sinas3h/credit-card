import React from 'react';
import { useContext } from 'react';
import { formatCardNumber } from './number';

//styles
import style from './Card.module.css'
import { dataContext } from './Form';

//images
import cardFront from '../images/bg-card-front.png'

const Card = () => {
    // const {name , number , month , year} = props.data
    const data = useContext(dataContext)
    const {name , cardNumber , month , year} = data
    return (
        <div className={style.container}>

            <img className={style.cardFront} src={cardFront} alt='cardFront' />

            <div className={style.cardWrapper}>
                <div className={style.cardCircle}>
                        <span className={style.cardCircleBig}> </span>
                        <span className={style.cardCircleLittle}> </span>
                </div>

                <div className={style.cardNumber}>{cardNumber ? <p>{formatCardNumber(cardNumber)}</p> : <p>0000 0000 0000 0000</p>}</div>

                <div className={style.cardData}>
                    <div className={style.cardName}>{name ? <p>{name.toUpperCase()}</p> : <p>JANE APPLESEED</p>}</div>
                    <div className={style.cardDate}>{month ? <p>{month}/{year}</p> : <p>00/00</p>}</div>
                </div>
            </div>
                    
        </div>
            
    );
};

export default Card;