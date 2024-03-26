import { useEffect, useState } from "react";
import { isValidEmail, isNotEmpty, isValidPassword } from "../util/validation";
import Input from "./input";

export default function Login() {
  // const [emailIsIvalid, setEmailIsIvalid]=useState(false);
  // const [passwordIsIvalid, setPasswordIsIvalid]=useState(false);

  //inut 데이터 저장하는 state
  const [enteredValues, setEnterValues] = useState({
    email: "",
    password: "",
  });

  //유효성 검사를 위한 state
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  // useEffect(() => {
  //   //이메일 유효성 체크
  //   setEmailIsIvalid(didEdit.email && (!isValidEmail(enteredValues.email) || !isNotEmpty(enteredValues.email) ));

  //   console.log("enteredValues.password " ,enteredValues.password);

  //  //비밀번호 유효성 체크
  //  setPasswordIsIvalid(didEdit.password && (!isValidPassword(enteredValues.password) || !isNotEmpty(enteredValues.password)) );
  // },[didEdit]);

  //true 면 이메일이유효하지 않음, input  에서 blue 가되면 true && 값이 없으면 true && 이메일이 유효하지 않으면 true
  const emailIsIvalid =   didEdit.email && (!isValidEmail(enteredValues.email) || !isNotEmpty(enteredValues.email) );
  const passwordIsIvalid= didEdit.password && (!isValidPassword(enteredValues.password) || !isNotEmpty(enteredValues.password) );

  //폼전송
  function handleSubmit(event) {
    event.preventDefault();
    //console.log("email  :", enteredValues.email, !isNotEmpty(enteredValues.email),  ",password : ", !isNotEmpty(enteredValues.password));

    // if(!isNotEmpty(enteredValues.email){

    // } 
    // !isNotEmpty(enteredValues.password)) {
    //   console.log("Email is valid :");
    //   return;
    // }

    //폼전송전 객체를 돌면서 체크
    let invalidCheck = false;
    for (const key in enteredValues) {
      setDidEdit((prevValues) => ({ ...prevValues, [key]: true }));
      if (emailIsIvalid || passwordIsIvalid) {
        
        invalidCheck = true;
      }
    }
    if (invalidCheck) {
      console.log("error!")
      return;
    }


    console.log("pass!")
    
  }


  //폼 입력
  function handleInputChange(identifier, value) {
    setEnterValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));

    //초기화
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  //INPUT 에 포커스가 흐려지면 didEdit 에 데이터를 넣게 되고 이것은 곧 => 유효성 검사로 연결 된다.
  function handleInputBlue(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
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
          onBlur={() => handleInputBlue("email")}
          onChange={(event) => handleInputChange("email", event.target.value)}
          value={enteredValues.email}         
          placeholder="이메일을 입력해 주세요."   
          error={emailIsIvalid && <p>이메일값이 유효하지 않습니다.</p>}
        />


      <Input
          label="비밀번호"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlue("password")}
          onChange={(event) => handleInputChange("password", event.target.value)}
          value={enteredValues.password}
          required     
          placeholder="대문자,특수문자,숫자를 포함하는 6~15자리"     
          error={passwordIsIvalid && <p>비밀번호값이 유효하지 않습니다.</p>}

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
