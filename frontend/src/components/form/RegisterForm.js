import React from 'react';

const RegisterForm = () => {
    return (
        <div className="login-form-box">
            <h3 className="mb-30">Register</h3>
            <form className="login-form" action="#">
                <div className="input-box mb--30">
                    <input type="text" placeholder="Full Name" />
                </div>
                <div className="input-box mb--30">
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input-box mb--30">
                    <input type="password" placeholder="Password" />
                </div>
                <button className="rn-btn edu-btn w-100 mb--30" type="submit">
                    <span>Register</span>
                </button>
                <div className="input-box">
                    <input id="checkbox-2" type="checkbox" />
                    <label htmlFor="checkbox-2">I read & agree the terms & conditions.</label>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm;