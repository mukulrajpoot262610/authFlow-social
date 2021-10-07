import Head from 'next/head'
import { Form, Input, Button, Checkbox } from 'antd';
import { GoogleOutlined, UserOutlined, GithubOutlined, LockOutlined } from '@ant-design/icons'
import Link from 'next/link'

export default function Home() {

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
          <div className="">
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
                  </div>
                </Form.Item>
                <div className="form-control my-4">
                  <button className="btn btn-primary">
                    Login
                  </button>
                </div>
                <h1 className="text-center font-bold">OR</h1>
                <div className="form-control my-4">
                  <button className="btn btn-primary">
                    <GithubOutlined className="mx-1" />
                    Login With GitHub
                  </button>
                  <h1 className="text-center mt-4"><Link href='/register' className="text-blue-400">Forgotten your password?</Link></h1>
                </div>
              </Form>
              <hr />
              <h1 className="text-center mt-4">Don't have a account? <Link href='/register' className="text-blue-400">Register Now</Link></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
