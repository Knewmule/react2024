import React,{useState} from "react";
import Input from './Input';
import {isEmail, isNotEmpty, hasMinLength } from '../util/validation'
export default function StateLogin() {

  const [enteredValue,setEnteredValue] =useState({
    email:'',password:'',
  })

  const [didEdit,setDidEdit] = useState({
    email:false,password:false,
  })
  const emailIsInvalid = didEdit.email && !enteredValue.email.includes('@');
  const passwordIsInvalid = didEdit.password && enteredValue.password.trim().length <6;
  function handleSubmit(event){
    event.preventDefault();
    console.log('Submitted'+enteredValue.email);
    setEnteredValue({
        email:'',password:'',
      });

  }
  function handleInputChange(identifier,value){
    setEnteredValue(preveValues => ({
      ...preveValues,[identifier]:value
    }))
    setDidEdit((prevEdit) =>({
        ...prevEdit,
        [identifier]:false
    }))
  }

  function handleInputBlur(identifier){
    setDidEdit(prevEdit => ({
        ...prevEdit,
        [identifier]: true
    }))
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input label="email" id="email" name="email" 
        onChange={(event) =>handleInputChange('email',event.target.value)} 
        value={enteredValue.email} 
        error={emailIsInvalid && 'Please enter a vlid email!'}
        onBlur={() => handleInputBlur('email')} />

        <Input label="password" id="password" name="password" 
        onChange={(event) =>handleInputChange('password',event.target.value)} 
        value={enteredValue.password} 
        error={passwordIsInvalid && 'Please enter a valid password!'}
        onBlur={() => handleInputBlur('password')} />

      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button type="button"className="button" onClick={handleSubmit}>Login</button>
      </p>
    </form>
  );
}
