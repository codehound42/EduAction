import React from 'react';

const LoginForm = () => {
    return (
        <div className="login-form-box">
            <h3 className="mb-30">Login</h3>
            <form className="login-form" action="#">
                <div className="input-box mb--30">
                    <input type="text" placeholder="Username or Email" />
                </div>
                <div className="input-box mb--30">
                    <input type="password" placeholder="Password" />
                </div>
                <div className="comment-form-consent input-box mb--30">
                    <input id="checkbox-1" type="checkbox" />
                    <label htmlFor="checkbox-1">Remember Me</label>
                </div>
                <button className="rn-btn edu-btn w-100 mb--30" type="submit">
                    <span>Login</span>
                </button>
                <div className="input-box">
                    <a href="#" className="lost-password">Lost your password?</a>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;