import React, { Component } from "react";

class Overview extends Component {
	listItems(items) {
		const propList = items.map((item) => <li key={item}>{item}</li>);

		return <ul>{propList}</ul>;
	}

	render() {
		return <div>{this.listItems(this.props.items)}</div>;
	}
}

export default Overview;
