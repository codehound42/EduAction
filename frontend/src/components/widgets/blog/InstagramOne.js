import React from 'react';

const InstagramOne = ( props ) => {
    return (
        <div className={`edu-blog-widget ${ props.style2 === 'enable' ? 'edu-instagram-widget-2' : '' } widget-instagram ${ props.extraClass || '' }`}>
            <div className="inner">
                <h5 className="widget-title">Instagram Feed</h5>
                <div className="content">
                    <div className="instagram-list">
                        <a href="#">
                            <img src="/images/widget/instagram/instagram-01.png" alt="Instagram Images" />
                        </a>
                        <a href="#">
                            <img src="/images/widget/instagram/instagram-02.png" alt="Instagram Images" />
                        </a>
                        <a href="#">
                            <img src="/images/widget/instagram/instagram-03.png" alt="Instagram Images" />
                        </a>
                        <a href="#">
                            <img src="/images/widget/instagram/instagram-04.png" alt="Instagram Images" />
                        </a>
                        <a href="#">
                            <img src="/images/widget/instagram/instagram-05.png" alt="Instagram Images" />
                        </a>
                        <a href="#">
                            <img src="/images/widget/instagram/instagram-06.png" alt="Instagram Images" />
                        </a>
                        <a href="#">
                            <img src="/images/widget/instagram/instagram-07.png" alt="Instagram Images" />
                        </a>
                        <a href="#">
                            <img src="/images/widget/instagram/instagram-08.png" alt="Instagram Images" />
                        </a>
                        <a href="#">
                            <img src="/images/widget/instagram/instagram-01.png" alt="Instagram Images" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstagramOne;