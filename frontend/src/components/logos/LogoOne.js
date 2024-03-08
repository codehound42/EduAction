import React from 'react';

const LogoOne = ( { separator }) => {
    return (
        <div className={`edu-brand-area edu-section-gap bg-color-white ${ separator !== 'disable' ? 'edu-line-separator' : '' }`}>
            <div className="container">
                <div className="row eduvibe-home-five-brands">
                    <div className="col-lg-2 col-md-12">
                        <div className="client-logo">
                            <h6>Featured In: </h6>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                        <a href="#" className="client-logo">
                            <img className="logo-main" src="/images/brand/brand-01.png" alt="Brand Images" />
                            <img className="logo-hover" src="/images/brand/brand-hover-01.png" alt="Brand Images" />
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                        <a href="#" className="client-logo">
                            <img className="logo-main" src="/images/brand/brand-02.png" alt="Brand Images" />
                            <img className="logo-hover" src="/images/brand/brand-hover-02.png" alt="Brand Images" />
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                        <a href="#" className="client-logo mt-2">
                            <img className="logo-main" src="/images/brand/brand-03.png" alt="Brand Images" />
                            <img className="logo-hover" src="/images/brand/brand-hover-03.png" alt="Brand Images" />
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                        <a href="#" className="client-logo">
                            <img className="logo-main" src="/images/brand/brand-04.png" alt="Brand Images" />
                            <img className="logo-hover" src="/images/brand/brand-hover-04.png" alt="Brand Images" />
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                        <a href="#" className="client-logo">
                            <img className="logo-main" src="/images/brand/brand-05.png" alt="Brand Images" />
                            <img className="logo-hover" src="/images/brand/brand-hover-05.png" alt="Brand Images" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogoOne;