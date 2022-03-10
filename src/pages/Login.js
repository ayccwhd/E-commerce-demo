//hooks
import { useRef, useState, useEffect } from 'react';
//JWT加密
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom ';

import axios from '../api/axios';
const LOGIN_URL = '/auth';

const Login = () => {
    const { setAuth, persist, setPersist } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    //初始焦点在用户输入上
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            //测试用
            if (user === 'Dave' && pwd === '!Dave1234')
                setSuccess(true);
            //链接后端写法
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ userName: user, passWord: pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');

            setSuccess(true);
            navigate(from, { replace: true });


        } catch (err) {
            if (!err?.response) {
                setErrMsg('服务器未响应');
            } else if (err.response?.status === 400) {
                setErrMsg('用户名或密码错误');
            } /* else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } */ else {
                setErrMsg('登陆失败');
            }
            errRef.current.focus();
        }
    }

    const togglePersist = () => {
        setPersist(prev => !prev);
    }

    useEffect(() => {
        localStorage.setItem("persist", persist);
    }, [persist])

    return (
        <>
            {success ? (
                <section>
                    <h1>登录成功!</h1>
                    <p>
                        <Link to="/">返回主页</Link>
                    </p>
                </section>
            ) :
                (<section>
                    {/* 错误信息提示 */}
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>登录</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">用户名:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="on"//自动填充，方便下次登录
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">密码:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button>登录</button>
                        <div className="persistCheck">
                            <input
                                type="checkbox"
                                id="persist"
                                onChange={togglePersist}
                                checked={persist}
                            />
                            <label htmlFor="persist">信任这个机器</label>
                        </div>
                    </form>
                    <p>
                        还未拥有账户?<br />
                        <span className="line">
                            <Link to="/register">注册</Link>
                        </span>
                    </p>
                </section>

                )}
        </>
    )
}

export default Login
