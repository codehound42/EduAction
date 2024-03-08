import React from 'react';

const PriceOne = ( props ) => {
    return (
        <div className={`edu-course-widget widget-shortby ${ props.extraClass || '' }`}>
            <div className="inner">
                <h5 className="widget-title">Price</h5>
                <div className="content">
                    <div className="edu-form-check">
                        <input type="checkbox" id="price-check1" />
                        <label for="price-check1">All Prices</label>
                    </div>
                    <div className="edu-form-check">
                        <input type="checkbox" id="price-check2" />
                        <label for="price-check2">Price: Low to High</label>
                    </div>
                    <div className="edu-form-check">
                        <input type="checkbox" id="price-check3" />
                        <label for="price-check3">Price: High to Low</label>
                    </div>
                    <div className="edu-form-check">
                        <input type="checkbox" id="price-check4" />
                        <label for="price-check4">Free Paid</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriceOne;