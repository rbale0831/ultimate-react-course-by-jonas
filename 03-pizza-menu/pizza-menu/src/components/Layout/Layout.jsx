import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Menu from '../Menu/Menu'

const Layout = ({ childern }) => {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

export default Layout;