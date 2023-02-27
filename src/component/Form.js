import React, { createContext, useEffect, useState } from 'react';

//component
import ThankYou from './ThankYou';

//style
import style from './Form.module.css'
import { validate } from './validate';


// const mountedStyle = { animation: "inAnimation 550ms ease-in" };
// const unmountedStyle = {
//   animation: "outAnimation 550ms ease-out",
//   animationFillMode: "forwards" 
// }




export const dataContext = createContext()

const Form = ({children}) => {

  const [showForm , setShowForm] = useState(true)
  const [showAnime , setShowAnime] = useState(false)




  // const data ={name , number , cvc , month , year}
  const [data , setData] = useState({
    name : '' ,
    cardNumber : '' ,
    month : '' ,
    year : '' ,
    cvc : ''
  })

  const [errosDisplay , setErrosDisplay] = useState({})

  const [touched , setToched] = useState({})


  const cardHandler = e =>{
    setData({...data , [e.target.name] : e.target.value })
  }

  
  useEffect(() => {
    setErrosDisplay(validate(data))
  } , [data , touched])
  
  
  const focusHandler= e => {
    setToched({...touched , [e.target.name] : true})
  }
  
  
  const handleKey =(e) =>{
    if (e.keyCode === 13) {
      e.preventDefault()
      e.target.find('input').focus()
      // if (e.target.nextSibling) {
        //   nextSibling.focus()
        // }
      }
    }
    
    const submitHandler = (e) => {
      e.preventDefault()
      if(!Object.keys(errosDisplay).length){
        setShowForm(!e)
        setShowAnime(true)
      } else {
        setToched({
          name : 'true',
          cardNumber : 'true',
          month : 'true',
          year : 'true',
          cvc : 'true',
        })
      }
      console.log("submit")
    }
    
    console.log(data)
    console.log(errosDisplay)
    console.log(touched)
    console.log(Boolean(Object.keys(errosDisplay).length))
  
  return (
    <>
      <div className={style.right}>
        {showForm ? <form className={style.form}>

        <div>
          <label className={style.label}>CARD HOLDER NAME</label>
          <input
            className={(errosDisplay.name && touched.name) ? style.errorsInput : style.formInput}
            type='text'
            placeholder='e.g. Jane Appleseed'
            name='name'
            value={data.name}
            autoComplete='off'
            onChange={cardHandler}
            onKeyDown={handleKey}
            onFocus={focusHandler}
            // autoFocus={true}
            >
          </input>
          {errosDisplay.name && touched.name && <span className={style.errorsspan}>{errosDisplay.name}</span>}
        </div>

        <div>
          <label className={style.label}>CARD NUMBER</label>
          <input
            className={(errosDisplay.cardNumber && touched.cardNumber) ? style.errorsInput : style.formInput}
            type='tel'
            placeholder='e.g. 1234 5678 9123 0000'
            name='cardNumber'
            pattern="[0-9.]+"
            value={data.cardNumber}
            autoComplete='off'
            maxLength='16'
            onChange={cardHandler}
            onFocus={focusHandler}
            onKeyDown={handleKey}>
          </input>
          {errosDisplay.cardNumber && touched.cardNumber && <span className={style.errorsspan}>{errosDisplay.cardNumber}</span>}
        </div>


        <div className={style.shortInput}>
          <div className={style.shortLeft}>
              <label className={style.label}>EXP. DATE (MM/YY)</label>
              <div className={style.twoDate}>
                  <input
                    className={(errosDisplay.month && touched.month) ? style.errorsInput : style.formInput}
                    type='tel'
                    placeholder='MM'
                    name='month'
                    value={data.month}
                    autoComplete='off'
                    maxLength='2'
                    onChange={cardHandler}
                    onFocus={focusHandler}
                    onKeyDown={handleKey}>
                  </input>
                  {errosDisplay.month && touched.month ? <span className={style.errorsspan}>{errosDisplay.month}</span>
                  :errosDisplay.year && touched.year && <span className={style.errorsspan}>{errosDisplay.year}</span>}
                  <input
                    className={(errosDisplay.year && touched.year) ? style.errorsInput : style.formInput}
                    type='tel'
                    placeholder='YY'
                    name='year'
                    value={data.year}
                    autoComplete='off'
                    maxLength='2'
                    onChange={cardHandler}
                    onFocus={focusHandler}
                    onKeyDown={handleKey}>
                  </input>
                  {/* {errosDisplay.year && touched.year && <span className={style.errorsspan}>{errosDisplay.year}</span>} */}
              </div>
          </div>

          <div>
              <label className={style.label}>CVC</label>
              <input
                className={(errosDisplay.cvc && touched.cvc) ? style.errorsInput : style.formInput}
                type='tel'
                placeholder='e.g. 123'
                name='cvc'
                value={data.cvc}
                autoComplete='off'
                maxLength='3'
                onChange={cardHandler}
                onFocus={focusHandler}
                onKeyDown={handleKey}>
              </input>
              {errosDisplay.cvc && touched.cvc && <span className={style.errorsspan}>{errosDisplay.cvc}</span>}
          </div>

        </div>
        <button
          className={style.submit}
          type='submit'
          onClick={submitHandler}>Confirm</button>
        </form>
                
        :
        <ThankYou anime={showAnime} forme={showForm} />
      
        }

      </div>

      <dataContext.Provider value={data}>
      {children}
      </dataContext.Provider>

    </>
  );
};

export default Form;