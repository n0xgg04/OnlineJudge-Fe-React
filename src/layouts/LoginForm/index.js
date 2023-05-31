import './scss/style.scss';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import logo from '../../assets/images/logo.png';

// eslint-disable-next-line
import config from '../../config';
import Loading from '../../components/loading';
import LoginByGoogle from "../../components/login-by-google";
import axios from "axios";
import toast from "react-hot-toast";
import BoxJoin from "../../components/box-join-contest"

export default React.memo(function() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [saveSession, setSaveSession] = useState(false);

    const inputUsername = useRef(null);
    const inputPassword = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const loginBoxRef = useRef(null);
    const [showBoxJoinContest, setShowBoxJoinContest] = useState(false);


    const shakeInput = useCallback((ref) => {
        ref.current.focus();
        ref.current?.classList?.add('inputForm--shake');
        setTimeout(() => {
            ref.current?.classList?.remove('inputForm--shake');
        }, 500);
    }, []);

    const notify = useCallback((text, duration = 4000, icon = '😡') => {
        toast(text, {
            duration: duration,
            position: 'top-right',
            style: {
                padding: '16px',
                color: '#ffffff',
                background: "hsla(0,0%,100%,.2)",
                border: "2px solid hsla(0,0%,100%,.1)",
                fontSize: "0.63rem",
                width: "auto",
                zIndex: 99999,
            },
            icon: icon,
            iconTheme: {
                primary: '#000',
                secondary: '#fff',
            }
        })
    },[]);

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

    const sendLogin = useCallback(() => {
        if (!validate()) return;

        setIsLoading(true);

        axios.post(`${config.api}/api/auth/login`, {
            username: username,
            password: password,
            saveSession: saveSession,
        }, {
            headers: {
                'Access-Control-Allow-Origin': '*', // Allow requests from any origin
                'Access-Control-Allow-Headers': 'Content-Type, Authorization', // Specify the allowed headers
            }
        }).then((response) => {
            if (response.data.status === 'success') {
                notify('Đăng nhập thành công');
                localStorage.setItem('token', response.data.token);

                if(response.data.joinedContest === null) {
                    //!Show box
                    setShowBoxJoinContest(true);
                }else{
                    window.location.href = `/contest/${response.data.joinedContest}`;
                }

            }else{
                notify("Tên đăng nhập hoặc mật khẩu không chính xác!")
                console.log(response.data)
            }}).catch((error) => {
            console.log(error);
        }).finally(() => {
            setIsLoading(false);
        })
         // eslint-disable-next-line
    },[username, password, saveSession, validate, shakeInput, notify, shakeInput]);

    //enter to login
    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Enter') {
            sendLogin();
        }
    }, [sendLogin]);

    useEffect(() => {
        window.addEventListener("load", function () {
            setIsLoading(false);
        })

        window.addEventListener("keydown", handleKeyDown)

        return () => {
            window.removeEventListener("load", function () {
                setIsLoading(false);
            })
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [handleKeyDown]);





    return (
        <>
            {isLoading && <Loading />}
            {showBoxJoinContest && <BoxJoin notify={notify}/>}
            <div ref={loginBoxRef} className="loginBox">
                <div className="glassBox loginBox-formBox">
                    <div className="loginBox-formBox_heading">
                        <img className="loginBox-formBox_heading--logo" src={logo} alt="Logo" />
                        <h1>Đăng nhập</h1>
                    </div>
                    <div className="loginBox-formBox_form">
                        <div className="loginBox-formBox_form-username inputForm">
                            <input
                                ref={inputUsername}
                                onChange={(e) => setUsername(e.target.value)}
                                className="loginBox-formBox_input inputCeil"
                                type="text"
                                name="username"
                                id="username"
                                value={username}
                                placeholder=" "
                            />
                            <label htmlFor="username" className="form-did-floating-label">
                                Tên đăng nhập
                            </label>
                        </div>
                        <div className="loginBox-formBox_form-password inputForm">
                            <input
                                ref={inputPassword}
                                onChange={(e) => setPassword(e.target.value)}
                                className="loginBox-formBox_input inputCeil"
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                placeholder=" "
                            />
                            <label htmlFor="password" className="form-did-floating-label">
                                Mật khẩu
                            </label>
                        </div>
                        <div className="loginBox-formBox_form-saveSession">
                            <div className="checkbox-wrapper-2">
                                <input
                                    style={{
                                        cursor: 'pointer',
                                    }}
                                    onChange={(e) => setSaveSession(e.target.checked)}
                                    checked={saveSession}
                                    type="checkbox"
                                    className="loginBox-formBox_form-saveSSCheckbox sc-gJwTLC ikxBAC"
                                />
                            </div>
                            <label
                                style={{
                                    cursor: 'pointer',
                                }}
                                onClick={() => setSaveSession(!saveSession)}
                                htmlFor="saveSession"
                            >
                                Nhớ phiên đăng nhập
                            </label>
                        </div>
                        <div className="loginBox-formBox_form-submitButton">
                            <button onClick={sendLogin} className="loginBox-formBox_form-btn" id="submit">
                                Đăng nhập
                            </button>
                            <div className="login-or">
                                <span>hoặc</span>
                            </div>
                            <LoginByGoogle />
                        </div>
                        <div className="loginBox-formBox_form-forgetPassword">
                            <a
                                href="/"
                                className="loginBox-formBox_form-link_forget"
                                onClick={(e) => {
                                    e.preventDefault();
                                    alert('Không có đâu bé ơi!!');
                                }}
                            >
                                Quên mật khẩu?
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
})
