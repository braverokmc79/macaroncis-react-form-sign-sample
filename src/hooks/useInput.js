import { useState } from "react";


export default function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnterValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);


 const valueIsValid=validationFn(enteredValue);


  function handleInputChange(event) {
    setEnterValue(event.target.value);
    //입력되면 초기화값으로 false
    setDidEdit(false);
  }

  function handleInputBlue(identifier) {
    setDidEdit(true);
  }

  return {
    value:enteredValue,
    handleInputChange,
    handleInputBlue,
    hasError: didEdit && !valueIsValid,
    setDidEdit
  }
}
