import React from 'react'
import Head from 'next/head'
import withAuth from '../../utils/withAuth'

const feed = () => {
    return (
        <div className="bg-base-200 flex flex-col items-center justify-center min-h-screen">
            <Head>
                <title>devFriend.io - Find your coding partener</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>This is protected page</h1>
        </div>
    )
}

export default withAuth(feed)
