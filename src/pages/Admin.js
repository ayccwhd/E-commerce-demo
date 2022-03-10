/*
 * @Author: aycc
 * @Date: 2022-03-02 18:22:14
 * @LastEditors: aycc
 * @LastEditTime: 2022-03-10 12:39:19
 * @Description: file content
 * @FilePath: \my-app\src\pages\Admin.js
 */
import { Link } from "react-router-dom "

const Admin = () => {
    return (
        <section>
            <h1>后台管理</h1>
            <br />
            <p>管理员选项</p>
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}

export default Admin
