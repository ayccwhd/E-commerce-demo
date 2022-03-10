/*
 * @Author: aycc
 * @Date: 2022-03-01 18:22:14
 * @LastEditors: aycc
 * @LastEditTime: 2022-03-10 12:40:26
 * @Description: file content
 * @FilePath: \my-app\src\App.js
 */
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
//R6的outlet
import Layout from './pages/Layout';
import Editor from './pages/Editor';
import Admin from './pages/Admin';
import Missing from './pages/Missing';
//import Unauthorized from './pages/Unauthorized';
import ShoppingCart from './pages/ShoppingCart';
import LinkPage from './pages/LinkPage';
//import RequireAuth from './pages/RequireAuth';
import { Routes, Route } from 'react-router-dom';

//todo:登陆和未登录的页面区别
// const ROLES = {
//   'User': 2001,
//   'Editor': 1984,
//   'Admin': 5150
// }

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* 未登录页面 */}
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* <Route path="unauthorized" element={<Unauthorized />} />  */}

        <Route path="editor" element={<Editor />} />
        <Route path="admin" element={<Admin />} />
        <Route path="shoppingcart" element={<ShoppingCart />} />


        {/* //登陆页面
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
          <Route path="editor" element={<Editor />} />
        </Route>


        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}>
          <Route path="shoppingcart" element={<ShoppingCart />} />
        </Route> */}

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;