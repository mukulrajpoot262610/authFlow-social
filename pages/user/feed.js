import React from 'react'
import Head from 'next/head'
// import withAuth from '../../utils/withAuth'

const feed = () => {
    return (
        <div className="bg-base-200 flex flex-col items-center justify-center min-h-screen">
            <Head>
                <title>devFriend.io - Find your coding partener</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container w-full flex mt-24">
                <div className="w-3/12 h-screen bg-green-500"></div>
                <div className="w-6/12 h-screen bg-red-500"></div>
                <div className="w-3/12 h-screen p-4">
                    <div className="h-1/2 overflow-auto">
                        <h1 className="stat-title uppercase font-bold my-2">Requests</h1>
                        <div className="w-full shadow-xl stats my-2">
                            <div className="stat flex flex-col">
                                <div className="flex justify-between items-center">
                                    <img src="/logo.png" alt="Avatar Tailwind CSS Component" className="h-16 w-16 mask mask-squircle" />
                                    <div className="stat-title">Tasks done</div>
                                </div>
                                <div className="mt-3 w-full flex">
                                    <button className="btn btn-primary w-1/2" >Accept</button>
                                    <button className="btn btn-secondary w-1/2">Decline</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default feed
