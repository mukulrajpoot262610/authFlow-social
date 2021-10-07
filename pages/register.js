import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Form, Input, Button, Checkbox } from 'antd';
import { GithubOutlined, UserOutlined, LockOutlined } from '@ant-design/icons'

const Register = () => {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div data-theme="cupcake" className="flex flex-col items-center justify-center min-h-screen">
            <Head>
                <title>devFriend.io - Find your coding partener</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="hero min-h-screen bg-base-200">
                <div className="flex-col hero-content lg:flex-row w-full">
                    <div className="hidden lg:block">
                        <img src="/svgs/login.svg" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <img src="/logo_text.png" alt="" className="mb-4" />
                            <h1 className="text-center mb-4 font-bold">SignUp to find peer developers</h1>
                            <button className="btn btn-primary">
                                <GithubOutlined className="mx-1" />
                                Login With GitHub
                            </button>
                            <h1 className="text-center font-bold mt-4">OR</h1>
                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    name="email"
                                    className="my-4"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Username!',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <div className="form-control">
                                        <Input
                                            type="email"
                                            placeholder="email"
                                            className="input input-bordered"
                                            prefix={<UserOutlined className="site-form-item-icon" />}
                                        />
                                    </div>
                                </Form.Item>
                                <Form.Item
                                    name="text"
                                    className="my-4"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Name!',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <div className="form-control">
                                        <Input
                                            type="text"
                                            placeholder="Name"
                                            className="input input-bordered"
                                            prefix={<UserOutlined className="site-form-item-icon" />}
                                        />
                                    </div>
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    className="my-4"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Password!',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <div className="form-control">
                                        <Input
                                            type="password"
                                            placeholder="password"
                                            className="input input-bordered"
                                            prefix={<LockOutlined className="site-form-item-icon" />}
                                            placeholder="Password"
                                        />
                                    </div>
                                </Form.Item>
                                <div className="form-control my-4">
                                    <button className="btn btn-primary">
                                        Login
                                    </button>
                                </div>
                                <h1 className="text-center text-xs mb-4">By signing up, you agree to our Terms, Data Policy and Cookie Policy.</h1>
                            </Form>
                            <hr />
                            <h1 className="text-center mt-4">Already have an account? <Link href='/' className="text-blue-400">Login Now</Link></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
