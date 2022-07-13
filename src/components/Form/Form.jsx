import React from "react";
import { useState } from "react";
import Page from "../Page/Page";
import {Link} from 'react-router-dom'
function Form() {
  const [flag, setFlag] = useState(true);
  const [email, setEmail] = useState(true);
  const fio = (e) => {
    setFlag(true);
    const str = e.target.value;
    console.log(str)
    console.log(flag)
    if (/[а-я]/i.test(str)) {
      setFlag(false);
    }
    if (str.split(" ").length !== 2 ) {
      setFlag(false);

    }
    if (str.length > 30 || str.length < 3) {
      setFlag(false);
    }
  };
  const testEmail=(e)=>{
    setEmail(true)
        const pattern  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
        if(! pattern .test(e.target.value)){
            setEmail(false)
        }
  }
  return (
    <div>
      <Page onInput={fio} />
      {!flag && <p>Error</p>}
      <Page onInput={testEmail} />
      <p>{!email && <p>Error</p>}</p>
      <Link to="game">
      <button>sign in</button>
      </Link>
    </div>
  );
}

export default Form;
