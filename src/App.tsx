import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DemoReactPage from "./pages/DemoReactPage/DemoReactPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DemoReactPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
