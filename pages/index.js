import Head from 'next/head'
import { Form, Input, message } from 'antd';
import { GoogleOutlined, UserOutlined, GithubOutlined, LockOutlined } from '@ant-design/icons'
import Link from 'next/link'

import firebase from '../config/firebase';

export default function Home() {

  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    await firebase.auth().signInWithEmailAndPassword(values.email, values.password)
      .then((user) => {
        if (user.user.emailVerified) {
          message.success('Logged in Successfully 🎉')
        } else {
          message.error('Please Verify your email first!')
        }
        console.log("LOGIN", user)
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
      }).catch((err) => {
        if (err.code === 'auth/account-exists-with-different-credential') {
          message.error('Account with this email already exist')
        } else {
          message.error(err.message)
        }
      })
  }

  const handlePasswordReset = async () => {
    await firebase.auth().sendPasswordResetEmail()
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
                    <h1 className="text-right">
                      <Link href="/password-reset">Forget Password?</Link>
                    </h1>
                  </div>
                </Form.Item>
                <div className="form-control my-4">
                  <button className="btn btn-primary">
                    Login
                  </button>
                </div>
                <h1 className="text-center font-bold">OR</h1>
                <div className="form-control my-4">
                  <button className="btn btn-primary" onClick={handleGithubLogin}>
                    <GithubOutlined className="mx-1" />
                    Login With GitHub
                  </button>
                </div>
              </Form>
              <h1 className="text-center mt-4">Don't have an account? <Link href='/register' className="text-blue-400">Register Now</Link></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
