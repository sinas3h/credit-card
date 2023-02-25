import React from 'react';

//components
import Card from './component/Card';
import CardBack from './component/CardBack';
import Form from './component/Form';

//style
import style from './App.module.css'

//image
import leftBack from './images/bg-main-desktop.png'


const App = () => {

  return (
    <div className={style.app} >
      <div className={style.background}>
      <div className={style.left}><img src={leftBack} alt='leftBack' /></div>

      <Form className={style.form}>
        <Card className={style.card} />
        <CardBack />
      </Form>
      </div>
    </div>
  );
};

export default App;