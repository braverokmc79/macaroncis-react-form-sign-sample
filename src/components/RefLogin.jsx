import { useRef, useState } from "react";

//이메일 유효성 검사 함수
function emailValidChk(email) {
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  if(pattern.test(email) === false) { return false; }
  else { return true; }
}


export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] =useState(false);   
  const email=useRef();
  const password=useRef();

  // 폼 제출 이벤트를 처리하는 함수를 정의합니다.
  function handleSubmit(event){   
    event.preventDefault();    
    const enteredEmail =email.current.value;
    const enteredPassword =password.current.value;

    
    if(!emailValidChk(enteredEmail)){
        setEmailIsInvalid(true);
        return;
    }

    setEmailIsInvalid(false);
    console.log("Sending HTTP request....");
  }



  return (

    <form onSubmit={handleSubmit}>
      <h2>로그인</h2>
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">이메일</label>        
          <input id="email" type="email" name="email" ref={email} />
          <div className="control-error">
            {emailIsInvalid && <p>이메일값이 유효하지 않습니다.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">비밀번호</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">초기화</button>
        <button   type="button" className="button" onClick={handleSubmit}>로그인</button>
      </p>
    </form>
  );
}
