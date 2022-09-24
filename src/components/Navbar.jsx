import React from 'react'

import ProfileImg from '../img/dpimg.jpg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='logo'>buddy's chat</span>
            <div className='user'>
                <img src={ProfileImg} alt="" />
                <span>John</span>
                <button>logout</button>
            </div>
        </div>
    )
}

export default Navbar