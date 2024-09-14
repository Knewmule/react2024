import React,{useState} from "react";
import Input from './Input';
import {isEmail, isNotEmpty, hasMinLength } from '../util/validation';
import {useInput} from '../hooks/useInput'; 
export default function StateLogin() {
const {value: emailValue,
     handleInputChange: handleEmailChange,
     handleInputBlur: handleEmailBlur,
     hasError: emailHasError,
}= useInput('',(value)=>{ isEmail(value) && isNotEmpty(value)});

    const {value: passwordValue, 
        handleInputChange: handlePasswordChange,
        handleInputBlur: handlePasswordBlur,
        hasError: passwordHasError
    } = useState('',(value) => hasMinLength(value,6));
//   const [enteredValue,setEnteredValue] =useState({
//     email:'',password:'',
//   })

//   const [didEdit,setDidEdit] = useState({
//     email:false,password:false,
//   })


//   const emailIsInvalid = didEdit.email && 
//   !isEmail(enteredValue.email) && 
//   !isNotEmpty(enteredValue.email)
//   const passwordIsInvalid = didEdit.password && !hasMinLength(enteredValue.password,6);

  function handleSubmit(event){
    event.preventDefault();
    
    if(emailHasError || passwordHasError) {
        return;
    }
    console.log('Submitted'+emailValue,passwordValue);

  }
//   function handleInputChange(identifier,value){
//     setEnteredValue(preveValues => ({
//       ...preveValues,[identifier]:value
//     }))
//     setDidEdit((prevEdit) =>({
//         ...prevEdit,
//         [identifier]:false
//     }))
//   }

//   function handleInputBlur(identifier){
//     setDidEdit(prevEdit => ({
//         ...prevEdit,
//         [identifier]: true
//     }))
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input label="email" id="email" name="email" 
        onChange={handleEmailChange} 
        value={emailValue} 
        error={emailHasError && 'Please enter a vlid email!'}
        onBlur={handleEmailBlur} />

        <Input label="password" id="password" name="password" 
        onChange={handlePasswordChange} 
        value={passwordValue} 
        error={passwordHasError && 'Please enter a valid password!'}
        onBlur={handlePasswordBlur} />

      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button type="button"className="button" onClick={handleSubmit}>Login</button>
      </p>
    </form>
  );
}
