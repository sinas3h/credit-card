import React from 'react';



//style
import style from './Compeleted.module.css'

//images
import iconComplete from '../images/icon-complete.svg'

const ThankYou = (props) => {
    console.log(props.dataAnime)
    return (
        <div className={props.dataAnime ? `${style.transitionDivActive} ${style.form} ${style.divComplete}` : style.transitionDivDeActive}
        // onAnimationEnd={() => { if (!props.dataAnime) props.dataForm(true) }}
        >
            <div>
              <img src={iconComplete} alt='complete' />
            </div>
            <div className={style.divCompleteDetail}>
              <h2>THANK YOU!</h2>
              <h3>" {props.data.name.toUpperCase()} "</h3>
              <p>We've added your card details</p>
            </div>
            <div>
              <button type='submit' className={style.submit}>Continue</button>
            </div>
        </div>
    );
};

export default ThankYou;