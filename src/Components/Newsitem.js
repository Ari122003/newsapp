import React, { Component } from "react";

export class Newsitem extends Component {
	render() {
        let{title,description,image,details}=this.props
		
        
        
        return (
			<div className="container tw-justify-center tw-items-center tw-align-middle tw-my-4">
				<div className="card" style={{ width: "18rem" }}>
					<img src={image} className="card-img-top" alt="..." />
					<div className="card-body">
						<h2 className="card-title tw-font-bold tw-text-lg">{title}</h2>
						<p className="card-text tw-mb-4">
							{description}
						</p>
						<a href={details} className="btn btn-sm btn-primary" target="_blank">
							Read more
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Newsitem;
