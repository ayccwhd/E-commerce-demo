/*
 * @Author: aycc
 * @Date: 2022-03-02 18:22:14
 * @LastEditors: aycc
 * @LastEditTime: 2022-03-10 12:39:23
 * @Description: file content
 * @FilePath: \my-app\src\pages\Editor.js
 */
import { Link } from "react-router-dom "

const Editor = () => {
    return (
        <section>
            <h1>商家管理页</h1>
            <br />
            <p>商家选项</p>
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}

export default Editor
