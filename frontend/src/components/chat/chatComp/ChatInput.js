//react core
import React, { Component } from 'react';
//prop-types import
import PropTypes from 'prop-types';
//material UI icons
import Icon from '@material-ui/core/Icon';

// chatInput component
class ChatInput extends Component {
  static propTypes = {
    onSubmitMessage: PropTypes.func.isRequired,
  };
  state = {
    message: '',
  };

  render() {
    return (
      <div>
        <form
          action=".."
          onSubmit={(e) => {
            e.preventDefault();
            this.props.onSubmitMessage(this.state.message);
            this.setState({ message: '' });
          }}
        >
          <h5 className="chat-title">Send a message</h5>
          <input
            autoFocus
            type="text"
            placeholder={'Enter message...'}
            value={this.state.message}
            onChange={(e) => this.setState({ message: e.target.value })}
          />
          <span>
            <button className="chat-submit">
              {' '}
              <Icon className="chat-submit-icon"> send</Icon>{' '}
            </button>
          </span>
        </form>
      </div>
    );
  }
}

export default ChatInput;
