
export function isNotEmpty(value) {
  return value.trim() !== '';
}

export function hasMinLength(value, minLength) {
  return value.length >= minLength;
}

export function isEqualsToOtherValue(value, otherValue) {
  return value === otherValue;
}


//이메일 유효성 검사 함수
export function isValidEmail(email) {
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  if(pattern.test(email) === false)  return false; 
  else { return true; }
}



export function isValidPassword(password) {
  // 대문자, 특수문자, 숫자를 포함하는 6~15자리의 비밀번호를 검사하는 정규 표현식
  let pattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/;  
  // 비밀번호가 정규 표현식 패턴에 맞으면 true를 반환하고, 그렇지 않으면 false를 반환합니다.
  return pattern.test(password);
}

