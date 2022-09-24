import React from 'react'

import ProfileImge from '../img/dpimg.jpg'

const Message = ()=> {
    return (
        <div className='message owner'>
            <div className="messageInfo">
                <img src={ProfileImge} alt="" />
                <span>Just now</span>
            </div>
            <div className="messageContent">
                <p>Hello</p>
                <img src={ProfileImge} alt="" />
            </div>
        </div>
    ) 

}

export default Message