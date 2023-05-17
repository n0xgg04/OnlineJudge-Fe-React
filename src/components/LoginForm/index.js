import './scss/style.scss'
import {useCallback, useEffect, useRef, useState} from "react";
import ToastContainer,{toast} from '../../components/toast'
import logo from '../../assets/images/logo.png'
import config from "../../config";
import Loading from "../loading";

export default function LoginForm(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [saveSession, setSaveSession] = useState(false);

    const inputUsername = useRef(null)
    const inputPassword = useRef(null)
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        setIsLoading(false)
    },[])

    const shakeInput = useCallback((ref) => {
        ref.current.focus();
        ref.current.classList.add('inputForm--shake')
        setTimeout(() => {
            ref.current.classList.remove('inputForm--shake')
        }, 500)
    },[])

    const sendLogin = () => {
        toast('Đăng nhập thành công', 'Đăng nhập', 3000)
        const validate = () => {
            if (username === '') {
                shakeInput(inputUsername);
                return false;
            }

            if (password === '') {
                shakeInput(inputPassword);
                return false;
            }

            return true;
        };

        if (!validate()) return;

        setIsLoading(true);

        fetch(`${config.api}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'true',
            },
            body: JSON.stringify({
                username: username,
                password: password,
                saveSession: saveSession,
            }),
            credentials: 'include',
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .then((data) => {
                console.log(data);

            })
            .catch((error) => {
                console.log(`=> ${config.api}/api/auth/login ${error}`);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <>
            {isLoading && <Loading/>}
            <div className="loginBox">
                <ToastContainer title="Đăng nhập" message="Đăng nhập thành công" show={true} setShow={() => {}}/>
                <div className="glassBox loginBox-formBox">
                    <div className="loginBox-formBox_heading">
                        <img className="loginBox-formBox_heading--logo" src={logo} alt="Logo"/>
                        <h1>Đăng nhập</h1>
                    </div>
                    <div className="loginBox-formBox_form">
                        <div className="loginBox-formBox_form-username inputForm">
                             <input ref={inputUsername} onChange={(e) => setUsername(e.target.value)} className="loginBox-formBox_input inputCeil" type="text" name="username" id="username" value={username} placeholder=" "/>
                             <label htmlFor="username" className="form-did-floating-label">Tên đăng nhập</label>
                        </div>
                        <div className="loginBox-formBox_form-password inputForm">
                            <input ref={inputPassword} onChange={(e) => setPassword(e.target.value)} className="loginBox-formBox_input inputCeil" type="password" name="password" id="password" value={password} placeholder=" "/>
                            <label htmlFor="password" className="form-did-floating-label">Mật khẩu</label>
                        </div>
                        <div className="loginBox-formBox_form-saveSession">
                            <div className="checkbox-wrapper-2">
                                <input
                                    style={{
                                        cursor : "pointer"
                                    }}
                                    onChange={(e) => setSaveSession(e.target.checked)} checked={saveSession} type="checkbox" className="loginBox-formBox_form-saveSSCheckbox sc-gJwTLC ikxBAC"/>
                            </div>
                            <label style={{
                                cursor : "pointer"
                            }}
                                   onClick={() => setSaveSession(!saveSession)}
                                   htmlFor="saveSession">Nhớ phiên đăng nhập</label>
                        </div>
                        <div className="loginBox-formBox_form-submitButton">
                            <button onClick={sendLogin} className="loginBox-formBox_form-btn" id="submit">Đăng nhập</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}