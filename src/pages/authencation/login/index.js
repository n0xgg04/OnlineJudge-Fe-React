import Body from '../../../layouts/BodyPage'
import LoginForm from '../../../layouts/LoginForm'
import AuthencationNavigationBar from '../../../components/navigation/AuthencationNavigationBar'
import {Helmet} from "react-helmet";

export default function LoginPage(){
    return (
        <>
            <Helmet>
                <title>Đăng nhập</title>
            </Helmet>
            <Body>
                {/*<AuthencationNavigationBar/>*/}
                <LoginForm>
                </LoginForm>
            </Body>
        </>
    )
}