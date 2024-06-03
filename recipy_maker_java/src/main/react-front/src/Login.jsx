import React, { useEffect, useState } from 'react';

export default function Login() {
    const [ email, setEmail ] = useState('');
    const [ pw, setPw ] = useState('');

    const [emailValid, setEmailVaild] = useState(false);
    const [pwValid, setPwVaild] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    useEffect(() => {
      if(emailValid && pwValid) {
        setNotAllow(false);
        return;
      }
      setNotAllow(true);
    }, [emailValid, pwValid]);

    const handleEmail = (e) => {
      setEmail(e.target.value);
      const regex =
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      if (regex.test(e.target.value)) {
        setEmailVaild(true);
      } else {
        setEmailVaild(false);
      }
    };
    const handlePassword = (e) => {
      setPw(e.target.value);
      const regex =
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
      if (regex.test(e.target.value)) {
        setPwVaild(true);
      } else {
        setPwVaild(false);
      }
    };
   
    return (
        <div className="page">
            <div className="titleWrap">
                이메일과 비밀번호를
                <br />
                입력해주세요
            </div>
            <div className="contentWrap">
                <div className="email"></div>
                <div className="inputEmail">
                    <input
                        type='text'
                        onChange={handleEmail}
                        value={email}
                        className="input"
                        placeholder="test@gmail.com"
                    />
                </div>
                <div className="errorMessage">
                    {!emailValid && email.length > 0 && (
                        <div>올바른 이메일을 입력해주세요.</div>
                    )}
                </div>

                <div className="pass"></div>
                <div className="inputPass">
                    <input
                    type='password'
                        onChange={handlePassword}
                        value={pw}
                        className="input"
                        placeholder="영문, 숫자, 특수문자 포함 8자 이상 입력해주세요."
                    />
                </div>
                <div className="errorMessage">
                    {
                        !pwValid && pw.length >0 && (
                            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.
                            </div>
                        )
                    }
                </div>
            </div>
            <div>
                <button disabled={notAllow} className='loginButton'>로그인</button>
            </div>
        </div>
    );
}
