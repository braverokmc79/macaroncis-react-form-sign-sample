import { useState } from "react";


export default function useInput(defaultValue, validationFn) {
  // enteredValue와 setEnterValue는 입력된 값을 관리하는 상태입니다.
  const [enteredValue, setEnterValue] = useState(defaultValue);
  // didEdit와 setDidEdit는 입력 필드가 수정되었는지 여부를 관리하는 상태입니다.
  const [didEdit, setDidEdit] = useState(false);

  // valueIsValid는 입력된 값이 유효한지 여부를 확인합니다.
  const valueIsValid = validationFn(enteredValue);



  // handleInputChange는 입력 변경 이벤트를 처리하는 함수입니다.
  function handleInputChange(event) {
    // 입력된 값을 상태로 설정합니다.
    setEnterValue(event.target.value);
    // 입력이 변경되면 didEdit 상태를 false로 초기화 설정합니다.
    setDidEdit(false);
  }


  
  // handleInputBlur는 입력 필드에서 포커스가 벗어났을 때 호출되는 함수입니다.
  function handleInputBlur(identifier) {
    // 입력 필드에서 포커스가 벗어났을 때 didEdit 상태를 true로 설정합니다.
    setDidEdit(true);
  }

  // 이 훅은 다음의 값을 반환합니다:
  return {
    value: enteredValue, // 입력된 값
    handleInputChange, // 입력 변경 이벤트 핸들러
    handleInputBlur, // 입력 필드에서 포커스가 벗어난 이벤트 핸들러
    hasError: didEdit && !valueIsValid, // 입력 값에 오류가 있는지 여부
    setDidEdit // didEdit 상태를 설정하는 함수
  }
}
