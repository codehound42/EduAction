import React from 'react';
import Countdown, { zeroPad } from 'react-countdown';

const Completionist = () => <h3 className="eduvibe-countdown-ending-notice">You are good to go!</h3>;

const rendererA = ( { days, hours, minutes, seconds, completed } ) => {
    if ( completed ) {
        return <Completionist />;
    } else {
        return (
            <>
                <div className="countdown-container days">
                    <span className="countdown-value">{zeroPad(days)}</span>
                    <span className="countdown-heading">Days</span>
                </div>
                <div className="countdown-container hours">
                    <span className="countdown-value">{zeroPad(hours)}</span>
                    <span className="countdown-heading">Hours</span>
                </div>
                <div className="countdown-container minutes">
                    <span className="countdown-value">{zeroPad(minutes)}</span>
                    <span className="countdown-heading">Minutes</span>
                </div>
                <div className="countdown-container seconds">
                    <span className="countdown-value">{zeroPad(seconds)}</span>
                    <span className="countdown-heading">Seconds</span>
                </div>
            </>
        )
    }
}

const rendererB = ( { days, hours, minutes, seconds, completed } ) => {
    if ( completed ) {
        return <Completionist />;
    } else {
        return (
            <>
                <div className="countdown-container days">
                    <span className="countdown-value">{zeroPad(days)}</span>
                    <span className="countdown-heading">Days</span>
                </div>
                <div className="countdown-container hours">
                    <span className="countdown-value">{zeroPad(hours)}</span>
                    <span className="countdown-heading">Hours</span>
                </div>
                <div className="countdown-container minutes">
                    <span className="countdown-value">{zeroPad(minutes)}</span>
                    <span className="countdown-heading">Mins</span>
                </div>
                <div className="countdown-container seconds">
                    <span className="countdown-value">{zeroPad(seconds)}</span>
                    <span className="countdown-heading">Secs</span>
                </div>
            </>
        )
    }
}

const ComingSoonOne = ( props ) => {
    return (
        <Countdown
            date={ props.time || Date.now() + 5266590000 }
            renderer={ props.renderB !== 'enable' ? rendererA : rendererB }
        />
    )
}

export default ComingSoonOne;