import * as React from "react";
import {Routes, Route, Outlet, BrowserRouter} from "react-router-dom";
import HomeScreen from './components/Home'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Outlet/>}>
                    <Route index element={<HomeScreen/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
