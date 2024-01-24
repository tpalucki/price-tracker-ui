import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DemoReactPage from "./pages/DemoReactPage/DemoReactPage";
import MainPage from "./pages/MainPage/MainPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/demo" element={<DemoReactPage/>}/>
                <Route path="/" element={<MainPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
