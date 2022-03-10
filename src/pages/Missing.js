/*
 * @Author: aycc
 * @Date: 2022-03-02 18:22:14
 * @LastEditors: aycc
 * @LastEditTime: 2022-03-10 12:39:47
 * @Description: file content
 * @FilePath: \my-app\src\pages\Missing.js
 */
import { Link } from "react-router-dom"

const Missing = () => {
    return (
        <article style={{ padding: "100px" }}>
            <h1>404</h1>
            <p>Page Not Found</p>
            <div className="flexGrow">
                <Link to="/">返回主页</Link>
            </div>
        </article>
    )
}

export default Missing
