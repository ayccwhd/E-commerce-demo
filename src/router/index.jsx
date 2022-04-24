/*
 * @Author: aycc
 * @Date: 2022-03-13 10:36:36
 * @LastEditors: aycc
 * @LastEditTime: 2022-04-24 15:48:25
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
import Login from "../pages/Login/Login";
//import Home from "../pages/Home";
import Register from "../pages/Register/Register";
//import List from "../pages/List";
import Means from "../pages/Means";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const BaseRouter = () => (
    <Router>
        <Routes>
            <Route path='/' element={<App />}>
                <Route path='/means' element={<Means />}></Route>
            </Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
        </Routes>
    </Router>
)

export default BaseRouter