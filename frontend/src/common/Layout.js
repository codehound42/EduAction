import React from 'react';
import HeaderOne from './header/HeaderOne';
import FooterOne from './footer/FooterOne';

const Layout = ( { children } ) => {
    return (
        <>
            <main className="main-wrapper">
                <HeaderOne />
                { children }
                <FooterOne />
            </main>
        </>
    )
}
export default Layout;