import React from 'react'
import withAuth from '../../utils/withAuth'

const feed = () => {
    return (
        <div>
            <h1>This is protected page</h1>
        </div>
    )
}

export default withAuth(feed)
