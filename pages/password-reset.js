import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Form, Input, message } from 'antd';
import { GoogleOutlined, UserOutlined, GithubOutlined, LockOutlined } from '@ant-design/icons'

import firebase from '../config/firebase';

const PasswordReset = () => {

    const router = useRouter()
    const onFinish = async (values) => {
        await firebase.auth().sendPasswordResetEmail(values.email)
            .then(() => {
                message.success('Check your Mail!')
                router.push('/')
            })
            .catch((err) => {
                message.error(err.message)
            })
    }

    return (
        <div className="bg-base-200 flex flex-col items-center justify-center min-h-screen">
            <Head>
                <title>devFriend.io - Find your coding partener</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="hero min-h-screen bg-base-200">
                <div className="flex-col hero-content lg:flex-row w-full">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <img src="/logo_text.png" alt="" className="mb-4" />
                            <h1 className="text-center font-bold text-3xl mb-4">Password Reset</h1>
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
                                            message: 'Please input your email!',
                                        },
                                    ]}
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
                                <div className="form-control my-4 mt-8">
                                    <button className="btn btn-primary">
                                        Send Password Reset Link
                                    </button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PasswordReset
