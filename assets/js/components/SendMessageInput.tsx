// Input where user types messages

import * as React from "react";

export default class SendMessageInput extends React.Component <{sendMessage: (text: string) => void}, {message: string}> {

  constructor(props: any) {
    super(props);
    this.state = {
      message: '',
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.sendMessage(this.state.message);
    this.setState({
      message: ''
    })
  }

  handleChange = e => {
    this.setState({
      message: e.target.value
    });
  }

  render() {
    return (
      <div id="message-form" className="inline-wrapper border-grey flex radius-base p-all-m">
        <div className="border-grey--right">
          +
        </div>
        <form onSubmit={ this.handleSubmit }>
          <input
            id="message-text"
            type="text"
            className="f-grow"
            onChange={ this.handleChange }
            value = { this.state.message }
          ></input>
        </form>
        <div>
          <span>@</span>
          <span>#</span>
        </div>
      </div>
    );
  }
}