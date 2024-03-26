import { useState } from "react";

export default function Signup() {
  const [passwordsAreNotEqual, setPasswordsAreNotEqual]=useState(false);


    function handleSubmit(event){
        event.preventDefault();           
        
        const fd= new FormData(event.target);
        
        const acquisitionChannle=fd.getAll('acquisition');                
        const termsChannel=fd.getAll('terms');   
        const data=Object.fromEntries(fd.entries());
        
        data.acquisition=acquisitionChannle;
        data.terms=termsChannel;
                
        if(data.password !==data['confirm-password']){
          setPasswordsAreNotEqual(true);
          return;
        }
        
        event.target.reset();
    }




    return (
      <form onSubmit={handleSubmit}>
        <h2>환영합니다!</h2>
        <p>회원 가입 🚀</p>
  
        <div className="control">
          <label htmlFor="email">이메일</label>
          <input id="email" type="email" name="email"  required />
        </div>
  
        <div className="control-row">
          <div className="control">
            <label htmlFor="password">비밀번호</label>
            <input id="password" type="password" name="password" required   minLength={6}    />
          </div>
  
          <div className="control">
            <label htmlFor="confirm-password">비밀번호 확인</label>
            <input
              id="confirm-password"
              type="password"
              name="confirm-password"
              required
              minLength={6} 
            />
            <div className="control-error">{passwordsAreNotEqual && <p>비밀번호가 일치하지 않습니다.</p>}</div>
          </div>
        </div>
  
        <hr />
  
        <div className="control-row">
          <div className="control">
            <label htmlFor="last-name">성</label>
            <input type="text" id="last-name" name="last-name" required />
          </div>
  
          <div className="control">
            <label htmlFor="first-name">이름</label>
            <input type="text" id="first-name" name="first-name" required />
          </div>
        </div>
  
        <div className="control">
          <label htmlFor="phone">직업이 어떻게 되십니까?</label>
          <select id="role" name="role" required>
            <option value="student">학생</option>
            <option value="teacher">선생님</option>
            <option value="employee">지작인</option>
            <option value="founder">자영업</option>
            <option value="other">기타</option>
          </select>
        </div>
  
        <fieldset>
          <legend>이 사이트를 어떻게 방문하게 되었습니까?</legend>
          <div className="control">
            <input
              type="checkbox"
              id="google"
              name="acquisition"
              value="google"
            />
            <label htmlFor="google">구글</label>
          </div>
  
          <div className="control">
            <input
              type="checkbox"
              id="friend"
              name="acquisition"
              value="friend"
            />
            <label htmlFor="friend">친구 소개</label>
          </div>
  
          <div className="control">
            <input type="checkbox" id="other" name="acquisition" value="other" />
            <label htmlFor="other">기타</label>
          </div>
        </fieldset>
  
        <div className="control">
          <label htmlFor="terms-and-conditions">
            <input type="checkbox" id="terms-and-conditions" name="terms" required />
            이용 약관에 동의합니다.
          </label>
        </div>
  
        <p className="form-actions">
          <button type="reset" className="button button-flat">
            초기화
          </button>
          <button type="submit" className="button">
           회원가입
          </button>
        </p>
      </form>
    );
  }