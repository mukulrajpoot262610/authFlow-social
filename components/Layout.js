import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
    const theme = "cupcake"

    return (
        <div data-theme={theme}>
            <Navbar theme={theme} />
            {children}
            <Footer theme={theme} />
        </div>
    )
}

export default Layout
