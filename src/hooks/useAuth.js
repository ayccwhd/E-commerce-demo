/*
 * @Author: aycc
 * @Date: 2022-03-09 18:22:14
 * @LastEditors: aycc
 * @LastEditTime: 2022-03-10 12:39:12
 * @Description: file content
 * @FilePath: \my-app\src\hooks\useAuth.js
 */
import { useContext } from "react";
import AuthContext from "../context/AuthProvider ";

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;