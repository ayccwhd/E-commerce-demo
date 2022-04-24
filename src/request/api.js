/*
 * @Author: aycc
 * @Date: 2022-03-31 20:31:35
 * @LastEditors: aycc
 * @LastEditTime: 2022-03-31 21:11:11
 * @Description: file content
 * @FilePath: \my-app 2\src\request\api.js
 */
import request from './request'

//注册
export const RegisterApi = (params) => request.post('/register', params)

//登陆
export const LoginApi = (params) => request.post('/login', params)