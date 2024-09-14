import React,{useState,useRef} from "react";


export default function Login() {
  // const [formIsInvalid,setFormIsInvalid] = useState(false);
  const [emailIsInvalid,setEmailIsInvalid]=useState(false);
  const email = useRef();
  const password = useRef();
  
  function handleSubmit(event){
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    const emailIsValid = enteredEmail.includes('@')
    if(!emailIsValid){
      setEmailIsInvalid(true);
      return ;
    }
    setEmailIsInvalid(false);
    console.log('Submitted'+enteredEmail+enteredPassword)
    //CAn reset a use ref like this but its not recommended best practice
    // email.current.value = '';
    // password.current.value = '';
  }
  
  function handleInputChange(identifier,value){
    setEnteredValue(preveValues => ({
      ...preveValues,[identifier]:value
    }))
  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" 
          ref={email}/>
          <div className="control-error" >{emailIsInvalid && <p>Please enter Valid email address.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password"  
         ref={password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button type="button"className="button" onClick={handleSubmit}>Login</button>
      </p>
    </form>
  );
}
