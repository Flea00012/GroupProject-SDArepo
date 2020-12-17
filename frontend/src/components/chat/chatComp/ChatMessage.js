import React from "react";
import boyAvatar from "../../../images/avatar/boyAvatar.png";
import girlAvatar from "../../../images/avatar/girlAvatar.png";

export default function ChatMessage({ userIndex, message, myUserId }) {
  return (
    <div class="chatblock">
      {myUserId === message.fromUserId ? (
        <div class="chatContainer me">
          <img src={girlAvatar} alt="Avatar" class="avatarstyle " />
          <div class="message-box">
            <span class="message-sender">
              <em> Me: </em>
            </span>
            <em>{message.message}</em>
          </div>
        </div>
      ) : (
        <div class="chatContainer them">
          <img src={boyAvatar} alt="Avatar" class="avatarstyle " />
          <div class="message-box left-side">
            <span class="message-sender">
              <em>{message.name}: </em>
            </span>
            <em>{message.message}</em>
          </div>
        </div>
      )}
    </div>
  );
}
