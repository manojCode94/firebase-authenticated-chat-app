import React from 'react'

const Login = () => {
    return (
        <div className='formContainer'>

            <div className='formWrapper'>
                <span className='logo'>buddy's Chat</span>
                <span className='title'>Login</span>
                {/* this react comment add form */}
                <form>
                    <input type="email" placeholder='email'/>
                    <input type="password" placeholder='password'/>
                    <button>Sign in</button>
                </form>
                <p>you don't have an account? Register</p>
            </div>
        </div>
    )
}

export default Login