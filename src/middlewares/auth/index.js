import { Navigate } from "react-router-dom";
function authMiddleware(ctx, next){
    if(!localStorage.getItem('token')){
        console.log("No token found")
        return <Navigate to="/login" />
    }

    return next()
}
export default authMiddleware