/*
 * @Author: aycc
 * @Date: 2022-03-09 18:22:14
 * @LastEditors: aycc
 * @LastEditTime: 2022-03-10 12:39:30
 * @Description: file content
 * @FilePath: \my-app\src\pages\Layout.js
 */
//React Router v6
import { Outlet, Link } from "react-router-dom"
import "../css/layout.css"

const Layout = () => {
    return (
        <main className="App">
            <div>
                <li>
                    <Link to="/editor">个人  </Link>
                    <Link to="/admin">商家   </Link>
                    <Link to="/shoppingcart">购物车  </Link>
                    <Link to="/linkpage">链接  </Link>
                </li>
            </div>

            <Outlet />
        </main>
    )
}

export default Layout
