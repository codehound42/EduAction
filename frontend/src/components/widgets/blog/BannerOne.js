import React from 'react';

const BannerOne = ( props ) => {
    return (
        <div className={`edu-blog-widget-2 widget-banner ${ props.extraClass || '' }`}>
            <div className="inner">
                <div className="content">
                    <div className="thumbnail">
                        <img className="w-100" src="/images/widget/banner/sidebarbanner.jpg" alt="Banner Images" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerOne;