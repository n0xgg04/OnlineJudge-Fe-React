import Body from '../../../components/BodyPage'
import LoginForm from '../../../components/LoginForm'
import {Helmet} from "react-helmet";

export default function LoginPage(){
    return (
        <>
            <Helmet>
                <title>Đăng nhập</title>
            </Helmet>
            <Body>
                <LoginForm>

                </LoginForm>
            </Body>
        </>
    )
}