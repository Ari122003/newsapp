import React, { Component } from "react";

export class Spinner extends Component {
	render() {
		return (
			<div class="d-flex justify-content-center  tw-mb-3">
				<div class="spinner-border" role="status">
					<span class="visually-hidden">Loading...</span>
				</div>
			</div>
		);
	}
}

export default Spinner;
