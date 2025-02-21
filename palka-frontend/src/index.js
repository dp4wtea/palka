import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Learn from "./Learn";
import Settings from "./Settings";
import Cards from "./Cards";
import NotFound from "./NotFound";

const root = document.getElementById("root");




ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Routes>
            <Route exact path="*" element={<NotFound />} />
            <Route exact path="/app" element={<App />}>
                <Route path="/app/learn" element={<Learn />} />
                <Route path="/app/settings" element={<Settings />} />
                <Route path="/app/cards" element={<Cards />} />

            </Route>
        </Routes>

    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
