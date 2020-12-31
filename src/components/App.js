import React, { Component } from "react";
import Overview from "./Overview";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myInput: "",
      myArray: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState((prevState) => ({
      myArray: [...prevState.myArray, this.state.myInput],
    }));
  }

  handleInput(event) {
    this.setState({
      myInput: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Input Something:
            <input
              type="text"
              id="inputText"
              name="inputText"
              onChange={this.handleInput}
            />
          </label>

          <input type="submit" value="Submit" />
        </form>

        <Overview items={this.state.myArray} />
      </div>
    );
  }
}

export default App;
