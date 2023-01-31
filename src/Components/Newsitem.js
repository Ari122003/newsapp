import React, { Component } from "react";
import logo from  "./no.png" 

export class Newsitem extends Component {
	render() {
        let{title,description,image,details,author,date,source}=this.props
		
        
        
        return (
			<div className="container tw-justify-center tw-items-center tw-align-middle tw-my-4">
				<div className="card" >
					<img src={image!==(null||""||undefined)?image:logo} className="card-img-top" alt="..." style={{height:"200px"}}/>
					<div className="card-body">
						<h2 className="card-title tw-font-bold tw-text-lg">{title.slice(0,50)}...</h2>
						<span class="badge text-bg-danger rounded-pill tw-mb-2 tw-border-black">{source}</span>
						<p className="card-text tw-mb-4">
							{description.slice(0,100)}...
						</p>
						<p className="card-text tw-mb-3"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
						<a href={details} className="btn btn-sm btn-primary" rel="noreferrer" target="_blank">
							Read more
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Newsitem;
