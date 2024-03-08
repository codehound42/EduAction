import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLandingDemo from './NavLandingDemo';
import HeaderSticky from './HeaderSticky';
import NavLandingResponsiveMenu from './NavLandingResponsiveMenu';

const HeaderLandingPage = ( { styles, disableSticky, buttonStyle } ) => {
    const [offcanvasShow, setOffcanvasShow] = useState( false );
    const [searchPopup, setSearchPopup] = useState( false );
    const onCanvasHandler = () => {
        setOffcanvasShow( prevState => ! prevState );
    }

    const onSearchHandler = () => {
        setSearchPopup( prevState => ! prevState );
    }

    if ( searchPopup ) {
        document.body.classList.add( 'search-popup-active' );
    } else {
        document.body.classList.remove( 'search-popup-active' );
    }

    const sticky = HeaderSticky( 200 );
    const classes = `header-default ${ sticky ? 'sticky' : '' }`;
    const stickyStatus = disableSticky ? '' : ' header-sticky';
    return (
        <>
            <header className={`landing-demo-header edu-header ${ stickyStatus } ${ styles || '' } ${ classes || '' }`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-xl-3 col-md-6 col-6">
                            <div className="logo">
                                <Link to={process.env.PUBLIC_URL + "/"}>
                                    <img className="logo-light" src="/images/logo/logo.png" alt="Main Logo" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 d-none d-xl-block">
                            <nav className="mainmenu-nav d-none d-lg-block">
                                <NavLandingDemo />
                            </nav>
                        </div>

                        <div className="col-lg-8 col-xl-3 col-md-6 col-6">
                            <div className="header-right d-flex justify-content-end">
                                <div className="header-menu-bar">
                                    <div className="quote-icon quote-user d-none d-md-block ml--15 ml_sm--5">
                                        <a className={`edu-btn btn-medium header-button purchase-button ${ buttonStyle || '' }`} href="https://1.envato.market/e4x0yZ" target="_blank" >
                                            Purchase Now
                                        </a>
                                    </div>
                                </div>
                                <div className="mobile-menu-bar ml--15 ml_sm--5 d-block d-xl-none">
                                    <div className="hamberger">
                                        <button className="white-box-icon hamberger-button header-menu" onClick={ onCanvasHandler }>
                                            <i className="ri-menu-line"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <NavLandingResponsiveMenu 
                show={ offcanvasShow } 
                onClose={ onCanvasHandler }  
                showSearch={ searchPopup }  
                onSearch={ onSearchHandler }  
            />
        </>
    )
}

export default HeaderLandingPage;