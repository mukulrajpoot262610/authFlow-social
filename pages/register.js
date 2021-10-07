import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Form, Input, message } from 'antd';
import { useRouter } from 'next/router'
import { GithubOutlined, UserOutlined, LockOutlined } from '@ant-design/icons'

import firebase from '../config/firebase'

const Register = () => {

    const router = useRouter()

    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        await firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
            .then((user) => {
                const updated = firebase.auth().currentUser;
                updated.updateProfile({
                    displayName: values.text
                })
                updated.sendEmailVerification()
                    .then(() => {
                        message.success('Email Verification Sent!, Check your mail')
                        router.push('/')
                    })
            })
            .catch((err) => {
                message.error(err.message)
            })
    };

    const handleGithubLogin = async () => {
        await firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider())
            .then((user) => {
                message.success('Login Success 🎉')
                console.log(user)
                router.push('/user/feed')
            }).catch((err) => {
                message.error(err.message)
            })
    }

    return (
        <div data-theme="cupcake" className="bg-base-200 flex flex-col items-center justify-center min-h-screen">
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
                            <button className="btn btn-primary" onClick={handleGithubLogin}>
                                <GithubOutlined className="mx-1" />
                                Continue With GitHub
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
                                        Register
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
