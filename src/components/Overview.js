import React, { Component } from "react";

class Overview extends Component {
	constructor(props) {
		super(props);
	}

	listItems(items) {
		const propList = items.map((item) => <li>{item}</li>);

		return <ul>{propList}</ul>;
	}

	render() {
		return <div>{this.listItems(this.props.items)}</div>;
	}
}

export default Overview;
