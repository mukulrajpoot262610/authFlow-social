import React, { useState } from 'react'
import { GithubOutlined } from '@ant-design/icons'
import { Drawer, Button } from 'antd';

const Navbar = () => {

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    const isAuth = true;

    return (
        <div data-theme="cupcake" className="fixed top-0 z-50 backdrop-blur-xl w-full navbar mb-2 shadow-lg rounded-box">
            <div className="flex-1 px-2 mx-2">
                <img src="/logo_text.png" alt="" height={200} width={200} />
            </div>
            <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible}
                className="navbar"
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
            {
                isAuth ? (
                    <>
                        <div className="flex-none hidden px-2 mx-2 lg:flex">
                            <div className="flex items-stretch">
                                <a className="btn btn-ghost btn-sm rounded-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 mr-2 stroke-current">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                    </svg>
                                    Likes

                                </a>
                                <a className="btn btn-ghost btn-sm rounded-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 mr-2 stroke-current">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                                    </svg>
                                    Notifications

                                </a>
                                <a className="btn btn-ghost btn-sm rounded-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 mr-2 stroke-current">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                                    </svg>
                                    Files

                                </a>
                                <a className="btn btn-ghost btn-sm rounded-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 mr-2 stroke-current">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                    </svg>
                                    Config

                                </a>
                            </div>
                        </div>
                        <div className="flex-none lg:hidden">
                            <button className="btn btn-square btn-ghost" onClick={showDrawer}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="px-2 mr-4">
                        <button className="btn btn-primary">
                            <GithubOutlined className="mx-1" />
                            Login With GitHub
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default Navbar
