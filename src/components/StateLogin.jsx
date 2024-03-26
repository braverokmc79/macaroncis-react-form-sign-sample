import { isValidEmail, isNotEmpty, isValidPassword } from "../util/validation";
import Input from "./input";
import useInput from "../hooks/useInput";

export default function Login() {

  const {value:emailValue, handleInputChange:handleEmailChange, 
      handleInputBlue:handleEmailBlur, hasError:emaildHasError, setDidEdit:setEmailEdit} =useInput('', (value)=>isValidEmail(value) && isNotEmpty(value));

  const {value:passwordValue, handleInputChange:handlePasswordChange, 
    handleInputBlue:handlePasswordBlur, hasError:passwordHasError, setDidEdit:setPasswordEdit} =useInput('', (value)=>isValidPassword(value) && isNotEmpty(value));
  

  //폼전송
  function handleSubmit(event) {
    event.preventDefault();

    setEmailEdit(true);
    setPasswordEdit(true);
    if(emaildHasError||passwordHasError){
      console.log("error!")
      return;
    }
    console.log("pass!")    
  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>로그인</h2>
      <div className="control-row">
        <Input
          label="이메일"
          id="email"
          type="email"
          name="email"       
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          value={emailValue}         
          placeholder="이메일을 입력해 주세요."   
         error={ emaildHasError && <p>이메일값이 유효하지 않습니다.</p>}
        />


      <Input
          label="비밀번호"
          id="password"
          type="password"
          name="password"          
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          value={passwordValue}
          required     
          placeholder="대문자,특수문자,숫자를 포함하는 6~15자리"     
          error={ passwordHasError && <p>비밀번호값이 유효하지 않습니다.</p>}
       />
      
      </div>


      <p className="form-actions">
        <button type="reset" className="button button-flat">초기화</button>
        <button type="button" className="button" onClick={handleSubmit}>
          로그인
        </button>
      </p>
    </form>
  );
}
