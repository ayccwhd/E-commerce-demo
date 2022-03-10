/*
 * @Author: aycc
 * @Date: 2022-03-09 18:22:14
 * @LastEditors: aycc
 * @LastEditTime: 2022-03-10 12:40:22
 * @Description: file content
 * @FilePath: \my-app\src\pages\Unauthorized.js
 */
import { useNavigate } from "react-router-dom "

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <section>
            <h1>未登录</h1>
            <br />
            <p>请登录后再访问</p>
            <div className="flexGrow">
                <button onClick={goBack}>返回</button>
            </div>
        </section>
    )
}

export default Unauthorized
