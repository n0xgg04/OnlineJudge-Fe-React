import {
    Route,
    BrowserRouter, Routes,
} from "react-router-dom";
import ContestPage from '../pages/contest';
import NotFoundPage from '../pages/404';
import React from 'react';
import LoginPage from "../pages/authencation/login";
import WaitingToStart from "../layouts/waitingStart";
//hide warn no used var

// import middlewares from '../middlewares';
// import UseMiddleware,{withMiddleware} from "../services/middlewareLogic";
//

export default function PageRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route path="login" element={<LoginPage/>}/>
                    <Route path="contest">
                        <Route path=":contestId" element={<ContestPage/>}/>
                    </Route>
                    <Route path="waiting" element={<WaitingToStart/>}/>
                </Route>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}
