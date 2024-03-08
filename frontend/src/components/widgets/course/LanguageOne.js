import React from 'react';

const LanguageOne = ( props ) => {
    return (
        <div className={`edu-course-widget widget-shortby ${ props.extraClass || '' }`}>
            <div className="inner">
                <h5 className="widget-title">Language</h5>
                <div className="content">
                    <div className="edu-form-check">
                        <input type="checkbox" id="lang-check1" />
                        <label for="lang-check1">All Language</label>
                    </div>
                    <div className="edu-form-check">
                        <input type="checkbox" id="lang-check2" />
                        <label for="lang-check2">Arabic</label>
                    </div>
                    <div className="edu-form-check">
                        <input type="checkbox" id="lang-check3" />
                        <label for="lang-check3">English</label>
                    </div>
                    <div className="edu-form-check">
                        <input type="checkbox" id="lang-check4" />
                        <label for="lang-check4">Russian</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LanguageOne;