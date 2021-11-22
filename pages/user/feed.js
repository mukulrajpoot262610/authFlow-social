import React from 'react'
import Head from 'next/head'
import withAuth from '../../utils/withAuth'

const Feed = () => {
    return (
        <div className="bg-base-200 flex flex-col items-center justify-center min-h-screen">
            <Head>
                <title>AuthFlow</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container w-full flex mt-24">
                <div className="h-screen p-4">
                    <div className="h-1/2 overflow-auto">
                        <h1 className="stat-title uppercase font-bold my-2">You are Signed In</h1>
                        <h1 className="text-4xl">This is Protected page.</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default withAuth(Feed)
