import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Form, Input, message } from 'antd';
import { GoogleOutlined, UserOutlined, GithubOutlined, LockOutlined } from '@ant-design/icons'

import firebase from '../config/firebase';
import withoutAuth from '../utils/withoutAuth';

const NewPassword = () => {


    const router = useRouter()
    console.log(router.query.oobCode)
    const onFinish = async (values) => {

        if (values.password !== values.cpassword) {
            return message.error('Password should Match !')
        }



        await firebase.auth().confirmPasswordReset(router.query.oobCode, values.password)
            .then(res => {
                message.success('Password has been changed, you acn login now!')
                router.push('/')
            })
            .catch(err => message.error(err.message))
    }

    return (
        <div className="bg-base-200 flex flex-col items-center justify-center min-h-screen">
            <Head>
                <title>authFlow</title>
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
                                    name="password"
                                    className="my-4"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Password!',
                                        },
                                    ]}
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
                                <Form.Item
                                    name="cpassword"
                                    className="my-4"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Password!',
                                        },
                                    ]}
                                >
                                    <div className="form-control">
                                        <Input
                                            type="password"
                                            className="input input-bordered"
                                            prefix={<LockOutlined className="site-form-item-icon" />}
                                            placeholder="Confirm Password"
                                        />
                                    </div>
                                </Form.Item>
                                <div className="form-control my-4 mt-8">
                                    <button className="btn btn-primary">
                                        Reset Password
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

export default withoutAuth(NewPassword)
