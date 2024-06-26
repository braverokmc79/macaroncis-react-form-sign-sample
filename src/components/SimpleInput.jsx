import React, { useState } from 'react'

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.includes('@');
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);

    setEnteredName('');
    setEnteredNameTouched(false);
    setEnteredEmail('');
    setEnteredEmailTouched(false);
  }

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  }

  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">이름</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (<p className='error-text'>Name must not be empty</p>)}
      </div>
      
      <div className={emailInputClasses}>
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (<p className='error-text'>Email must not be empty and should contain '@'</p>)}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
}

export default SimpleInput;
