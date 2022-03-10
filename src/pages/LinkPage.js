/*
 * @Author: aycc
 * @Date: 2022-03-02 18:22:14
 * @LastEditors: aycc
 * @LastEditTime: 2022-03-10 12:39:32
 * @Description: file content
 * @FilePath: \my-app\src\pages\LinkPage.js
 */
import { Link } from "react-router-dom "

const LinkPage = () => {
    return (
        <section>
            <h1>链接跳转</h1>
            <br />
            <h2>公开</h2>
            <Link to="/login">登录</Link>
            <Link to="/register">注册</Link>
            <br />
            <h2>私密</h2>
            <Link to="/">首页</Link>
            <Link to="/editor">商家页</Link>
            <Link to="/admin">管理员页</Link>
        </section>
    )
}

export default LinkPage
