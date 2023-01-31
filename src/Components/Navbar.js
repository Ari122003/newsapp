// import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
	static propTypes = {};

	render() {
		return (
			<>
				<nav className="navbar navbar-expand-lg bg-dark ">
					<div className="container-fluid">
						<h1 className="navbar-brand  text-white">NewsHUB</h1>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<Link
										className="nav-link  text-white"
										aria-current="page"
										to="/">
										Home
									</Link>
								</li>
								
								<li className="nav-item">
									<Link className="nav-link text-white" to="Business">
										Business
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link text-white" to="Entertainment">
										Entertainment
									</Link>
								</li>
								
								<li className="nav-item">
									<Link className="nav-link text-white" to="Health">
										Health
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link text-white" to="Science">
										Science
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link text-white" to="Sports">
										Sports
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link text-white" to="Technology">
										Technology
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<hr />
			</>
		);
	}
}

export default Navbar;
