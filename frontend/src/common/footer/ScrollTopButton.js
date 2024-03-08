import scrollToTop from './ScrollToTop';
import React from 'react';

const ScrollToTop = () => {
    React.useEffect(() => {
        scrollToTop();
    }, []);
    return (
        <div className="rn-progress-parent">
            <svg
                className="rn-back-circle svg-inner"
                width="100%"
                height="100%"
                viewBox="-1 -1 102 102"
            >
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
            </svg>
        </div>
    );
};

export default ScrollToTop;