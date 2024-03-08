import React from 'react';

function Skill ({progress, isVisible}) {
    const { title, percent, progressColor } = progress;
    const progressQuery = () => {
        return (
            <div className="progress-bar data-background"
                style={
                isVisible
                    ? {
                        width: `${percent}%`,
                        background: progressColor,
                    }
                    : { width: 0, background: progressColor }
                }
            />
        );
    };
    return (
        <>
            <h6 className="title">{title}</h6>
            <div className="progress">
                { progressQuery() }
                <span className="progress-number">{ percent }%</span>
            </div>
        </>
    );
}
export default Skill;
