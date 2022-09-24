import React from "react";

import ProfileImg from "../img/dpimg.jpg";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={ProfileImg} alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello </p>
        </div>
      </div>
      <div className="userChat">
        <img src={ProfileImg} alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello </p>
        </div>
      </div>
      <div className="userChat">
        <img src={ProfileImg} alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello </p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
