import {GoogleLogin} from 'react-google-login';
import { gapi } from "gapi-script";

import React from 'react';
import './scss/style.scss';

gapi.load("client:auth2", () => {
    gapi.client.init({
        clientId:
            "554506097930-skpocqsbe1666b832invpsdqm5phfcab.apps.googleusercontent.com",
        plugin_name: "login",
    });
});

export default class LoginByGoogle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isSignedIn: false,
            userData: null,
        };
    }

    shouldComponentUpdate(nextProps, nextState){
        return false;
    }

    handLoginSuccess = (res) => {
        this.setState({
            isSignedIn: true,
            userData : {accessToken : res?.accessToken, profileObject : res?.profileObj, tokenId : res?.tokenId}
        });
        console.log('Login success', res);
    }

    render(){
        return (
            <>
            <div className="google-login">
                <GoogleLogin
                    className={'google-login__button'}
                    clientId="554506097930-skpocqsbe1666b832invpsdqm5phfcab.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.handLoginSuccess}
                    onFailure={(res) => {
                        console.log('Login failed', res)
                    }}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            </div>
            </>
        )
    }
}