import React from "react";
import Header from './components/Header/header.js'
import Footer from './components/Footer/footer'


function Layout ({children}) {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout