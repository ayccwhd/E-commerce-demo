/*
 * @Author: aycc
 * @Date: 2022-03-13 20:10:33
 * @LastEditors: aycc
 * @LastEditTime: 2022-03-17 15:19:03
 * @Description: file content
 * @FilePath: \my-app\src\pages\Register\Register.jsx
 */

import React from 'react'
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import './Register.less'
import logo from '../../assets/logo.png'
import { RegisterApi } from '../../request/api'

export default function Register() {
    const navigate = useNavigate()

    const onFinish = (values) => {
        // console.log('Success:', values);
        RegisterApi({
            username: values.username,
            password: values.password
        }).then(res => {
            // console.log(res)
            if (res.errCode === 0) {
                message.success('注册成功');
                //message.success(res.message);
                //跳转登陆页
                setTimeout(() => {
                    navigate('./login')
                }, 1500)
            } else if (res.errCode === 1) {
                message.error('用户已存在');
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

                    <Form.Item
                        name="confirm"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: '请确认密码!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject(new Error('两次密码不一致!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password size='large' prefix={<LockOutlined />} placeholder="请确认密码" />
                    </Form.Item>

                    <Form.Item>
                        <Link to='/login'>已有账号？前往登陆</Link>
                    </Form.Item>

                    <Form.Item>
                        <Button size='large' type="primary" htmlType="submit" block>
                            立即注册
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
