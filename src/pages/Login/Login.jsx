/*
 * @Author: aycc
 * @Date: 2022-03-13 10:35:59
 * @LastEditors: aycc
 * @LastEditTime: 2022-04-24 15:48:23
 * @Description: file content
 * @FilePath: \my-app\src\pages\Login\Login.jsx
 */
import React from 'react'
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import './Login.less'
import logo from '../../assets/logo.png'
import { LoginApi } from '../../request/api'

export default function Login() {
    const navigate = useNavigate()

    const onFinish = (values) => {
        // console.log('Success:', values);
        LoginApi({
            username: values.username,
            password: values.password
        }).then(res => {
            // console.log(res)
            if (res.errCode === 0) {
                message.success('登陆成功');
                //message.success(res.message);
                //存储数据
                localStorage.setItem('token', res.data['token'])
                localStorage.setItem('username', res.data.username)
                localStorage.setItem('groupid', res.data.groupid)
                //跳转首页
                setTimeout(() => {
                    navigate('./means')
                }, 1500)
            } else if (res.errCode === 1) {
                message.error('密码错误');
                //message.error(res.message);
            } else {
                message.error('请求超时');
                //message.error(res.message);
            }
        }) //todo:跨域
    };

    /* const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }; */

    return (
        <div className='login'>
            <div className='login_box'>
                <img src={logo} alt="logo" />
                <Form
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名!',
                            },
                        ]}
                    >
                        <Input size='large' prefix={<UserOutlined />} placeholder="请输入用户名" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码!',
                            },
                        ]}
                    >
                        <Input.Password size='large' prefix={<LockOutlined />} placeholder="请输入密码" />
                    </Form.Item>

                    <Form.Item>
                        <Link to='/register'>还没账号？立即注册</Link>
                    </Form.Item>

                    <Form.Item>
                        <Button size='large' type="primary" htmlType="submit" block>
                            登陆
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
