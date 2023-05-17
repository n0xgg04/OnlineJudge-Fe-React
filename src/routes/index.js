import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContestPage from '../pages/contest';
import NotFoundPage from '../pages/404';
import React from 'react';
import LoginPage from "../pages/authencation/login";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/contest" element={<ContestPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </Router>
    );
}
