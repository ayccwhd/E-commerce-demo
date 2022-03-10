/*
 * @Author: aycc
 * @Date: 2022-03-09 18:22:14
 * @LastEditors: aycc
 * @LastEditTime: 2022-03-10 12:38:28
 * @Description: file content
 * @FilePath: \my-app\src\api\axios.js
 */
import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3500 '
});