import React from "react";
import uniqid from "uniqid";

const Overview = (props) => {
	const { items } = props;

	return (
		<ul>
			{items.map((item) => (
				<li key={uniqid()}>{item}</li>
			))}
		</ul>
	);
};

export default Overview;
