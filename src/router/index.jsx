/*
 * @Author: aycc
 * @Date: 2022-03-13 10:36:36
 * @LastEditors: aycc
 * @LastEditTime: 2022-03-17 15:37:46
 * @Description: file content
 * @FilePath: \my-app\src\router\index.jsx
 */

/* 
    App > List + Edit + Means
    Login
    Register 
    History模式 -- BrowserRouter
    Hash模式 -- HashRouter
*/
import App from "../App";
import Login from "../views/Login/Login";
import Home from "../views/Home";
import Register from "../views/Register/Register";
import List from "../views/List";
import Means from "../views/Means";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const BaseRouter = () => (
    <Router>
        <Routes>
            <Route path='/' element={<App />}>
                <Route path='/list' element={<List />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/means' element={<Means />}></Route>
            </Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
        </Routes>
    </Router>
)

export default BaseRouter