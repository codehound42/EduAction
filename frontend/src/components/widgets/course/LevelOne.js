import React from 'react';

const LevelOne = ( props ) => {
    return (
        <div className={`edu-course-widget widget-shortby ${ props.extraClass || '' }`}>
            <div className="inner">
                <h5 className="widget-title">Level</h5>
                <div className="content">
                    <div className="edu-form-check">
                        <input type="checkbox" id="level-check1" />
                        <label for="level-check1">All Skill</label>
                    </div>
                    <div className="edu-form-check">
                        <input type="checkbox" id="level-check2" />
                        <label for="level-check2">Beginner</label>
                    </div>
                    <div className="edu-form-check">
                        <input type="checkbox" id="level-check3" />
                        <label for="level-check3">Intermediate</label>
                    </div>
                    <div className="edu-form-check">
                        <input type="checkbox" id="level-check4" />
                        <label for="level-check4">High</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LevelOne;