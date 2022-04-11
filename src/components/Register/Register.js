import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form >
                <input type="text" name="" id="name-field" placeholder='Your Name' />
                <br />
                <input type="email" id="email-field" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="password-field" placeholder='Enter Password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;