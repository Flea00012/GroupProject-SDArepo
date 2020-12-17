import React, { Component } from "react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

import UserApi from "../../../api/UserApi";
import Forum from "../forum/Forum";

const URL = "ws://localhost:3030";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      currentUserId: null,
      messages: [],
    };
    this.userName = this.userName.bind(this);
  }

  userName() {
    UserApi.getCurrentUser().then((results) =>
      this.setState({ name: results.data.name, currentUserId: results.data.id })
    );
  }

  ws = new WebSocket(URL);

  componentDidMount() {
    this.userName();

    this.ws.onopen = () => {};

    this.ws.onmessage = (evt) => {
      // on receiving a message, add it to the list of messages
      const message = JSON.parse(evt.data);
      this.addMessage(message);
    };

    this.ws.onclose = () => {
      // automatically try to reconnect on connection loss
      this.setState({
        ws: new WebSocket(URL),
      });
    };
  }

  addMessage = (message) =>
    // this.setState(state => ({ messages: [message, ...state.messages] }));
    this.setState((state) => ({ messages: state.messages.concat([message]) }));

  submitMessage = (messageString) => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const message = {
      name: this.state.name,
      message: messageString,
      fromUserId: this.state.currentUserId,
    };
    this.ws.send(JSON.stringify(message));
    this.addMessage(message);
  };

  //  alwaysScrollToBottom = () => {
  //   const elementRef = useRef();
  //   useEffect(() => elementRef.current.scrollIntoView());
  //   return <div ref={elementRef} />;
  // };

  render() {
    return (
      <div>
        <div class="chat-banner"> Communication</div>
        <div className="horizontalline"></div>
        <div className="chat-page-row">
          <div className="chat-page-column">
            <div className="forumCard">
              <Forum />
            </div>
          </div>
          <div className="chat-page-column">
            <div className="chatCard">
              <div className="chatbox">
                {this.state.messages.map((message, index) => (
                  <ChatMessage
                    key={index}
                    userIndex={index}
                    message={message}
                    myUserId={this.state.currentUserId}
                  />
                ))}
              </div>
              <div className="chat-inputform">
                <label htmlFor="name"></label>
                <ChatInput
                  ws={this.ws}
                  onSubmitMessage={(messageString) =>
                    this.submitMessage(messageString)
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Chat;
