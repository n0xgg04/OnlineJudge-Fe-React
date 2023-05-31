import {Navigate} from "react-router-dom";

export default function UseMiddleware({ middleware, children }) {
    return middleware(Navigate, () => {
        return <>{children}</>;
    });
}

const withMiddleware = (middleware, component) => {
    return (props) => {
        return middleware(Navigate, () => {
            return component(props);
        });
    }
}

export {withMiddleware};