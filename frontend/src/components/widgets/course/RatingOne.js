import React from 'react';

const RatingOne = ( props ) => {
    return (
        <div className={`edu-course-widget widget-shortby ${ props.extraClass || '' }`}>
            <div className="inner">
                <h5 className="widget-title">Short By Rating</h5>
                <div className="content">
                    <div className="edu-form-check">
                        <input type="checkbox" id="rating-check1" />
                        <label for="rating-check1">
                            <span className="on icon-Star"></span>
                            <span className="on icon-Star"></span>
                            <span className="on icon-Star"></span>
                            <span className="on icon-Star"></span>
                            <span className="on icon-Star"></span>
                        </label>
                    </div>
                    <div className="edu-form-check">
                        <input type="checkbox" id="rating-check2" />
                        <label for="rating-check2">
                            <span className="on icon-Star"></span>
                            <span className="on icon-Star"></span>
                            <span className="on icon-Star"></span>
                            <span className="on icon-Star"></span>
                            <span className="off icon-Star"></span>
                        </label>
                    </div>
                    <div className="edu-form-check">
                        <input type="checkbox" id="rating-check3" />
                        <label for="rating-check3">
                            <span className="on icon-Star"></span>
                            <span className="on icon-Star"></span>
                            <span className="on icon-Star"></span>
                            <span className="off icon-Star"></span>
                            <span className="off icon-Star"></span>
                        </label>
                    </div>
                    <div className="edu-form-check">
                        <input type="checkbox" id="rating-check4" />
                        <label for="rating-check4">
                            <span className="on icon-Star"></span>
                            <span className="on icon-Star"></span>
                            <span className="off icon-Star"></span>
                            <span className="off icon-Star"></span>
                            <span className="off icon-Star"></span>
                        </label>
                    </div>

                    <div className="edu-form-check">
                        <input type="checkbox" id="rating-check5" />
                        <label for="rating-check5">
                            <span className="on icon-Star"></span>
                            <span className="off icon-Star"></span>
                            <span className="off icon-Star"></span>
                            <span className="off icon-Star"></span>
                            <span className="off icon-Star"></span>
                        </label>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RatingOne;