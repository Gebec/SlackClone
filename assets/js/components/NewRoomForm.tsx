// Responsible for adding new rooms

import * as React from "react";

export default class NewRoomForm extends React.Component <{addNewRoom: (name: string) => void}, {name: string}> {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewRoom(this.state.name);
    this.setState({
      name: '',
    })
  }

  handleChange = e => {
    this.setState({
      name: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
        <input
            type="text"
            className="f-grow"
            onChange={ this.handleChange }
            value = { this.state.name }
          ></input>
        </form>
      </div>
    );
  }
}