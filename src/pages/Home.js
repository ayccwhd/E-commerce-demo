/*
 * @Author: aycc
 * @Date: 2022-03-09 18:22:14
 * @LastEditors: aycc
 * @LastEditTime: 2022-03-10 12:39:26
 * @Description: file content
 * @FilePath: \my-app\src\pages\Home.js
 */
import { useNavigate, Link } from "react-router-dom ";
//import { useContext } from "react";
//import AuthContext from "../context/AuthProvider";
//todo:登陆与未登录的区别
const Home = () => {
    // const { setAuth } = useContext(AuthContext);
    // const navigate = useNavigate();

    // const logout = async () => {
    //     // if used in more components, this should be in context 
    //     // axios to /logout endpoint 
    //     setAuth({});
    //     navigate('/linkpage');
    // }

    return (
        <section >
            {/* <br />
        <p>You are logged in!</p>
        <br />
        <Link to="/editor">跳转至个人页</Link>
        <br />
        <Link to="/admin">跳转至商家管理页</Link>
        <br />
        <Link to="/shoppingcart">跳转至购物车</Link>
        <br />
        <Link to="/linkpage">跳转至链接页</Link> */}
            {/* <div className="flexGrow">
            <button onClick={logout}>Sign Out</button>
        </div>   */}

        </section>
    )
}

export default Home


