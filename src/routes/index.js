import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import ContestPage from '../pages/contest';
import NotFoundPage from '../pages/404';
import useMiddleware from '../services/middlewareLogic';
import React from 'react';
import LoginPage from "../pages/authencation/login";
import middlewares from '../middlewares';
import UseMiddleware from "../services/middlewareLogic";

const router = createBrowserRouter([
    {
        path: "/login",
        element: (
            <UseMiddleware middleware={middlewares.all}>
                <LoginPage/>
            </UseMiddleware>
        )
    },
    {
        path: "/contest",
        element: (
            <UseMiddleware middleware={middlewares.authMiddleware}>
                <ContestPage/>
            </UseMiddleware>
        ),
    },
    {
        path: "*",
        element: <NotFoundPage/>,
  }
])

export default function PageRouter() {
    return (
        <RouterProvider router={router} />
    );
}
