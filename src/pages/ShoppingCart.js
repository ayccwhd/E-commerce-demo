/*
 * @Author: aycc
 * @Date: 2022-03-02 18:22:14
 * @LastEditors: aycc
 * @LastEditTime: 2022-03-10 12:40:15
 * @Description: file content
 * @FilePath: \my-app\src\pages\ShoppingCart.js
 */
import { Link } from "react-router-dom "

const ShoppingCart = () => {
    return (
        <section>
            <h1>购物车</h1>
            <br />
            <p>购物车商品</p>
            <div className="flexGrow">
                <Link to="/">首页</Link>
            </div>
        </section>
    )
}

export default ShoppingCart
