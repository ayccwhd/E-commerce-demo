/*
 * @Author: aycc
 * @Date: 2022-03-13 11:21:06
 * @LastEditors: aycc
 * @LastEditTime: 2022-03-13 12:47:43
 * @Description: file content
 * @FilePath: \my-app\src\App.js
 */
import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <div>
        <Outlet />
      </div>
    )
  }
}
