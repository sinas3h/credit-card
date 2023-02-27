import React from 'react';



//style
import style from './ThankYou.module.css'

//images
import iconComplete from '../images/icon-complete.svg'

const ThankYou = (props) => {
    console.log(props.anime)
    console.log(props.form)
    return (
        <div className={props.anime ? `${style.transitionDivActive} ${style.form} ${style.divComplete}` : style.transitionDivDeActive}
        onAnimationEnd={() => { if (!props.anime) props.forme(true) }}>
            <div>
              <img src={iconComplete} alt='complete' />
            </div>
            <div className={style.divCompleteDetail}>
              <h2>THANK YOU!</h2>
              <p>We've added your card details</p>
            </div>
            <div>
              <button type='submit' className={style.submit}>Continue</button>
            </div>
        </div>
    );
};

export default ThankYou;