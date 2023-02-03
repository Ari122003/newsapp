import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { Routes, Route } from "react-router-dom";
import Error from "./Components/Error";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
	// constructor() {
	// 	super();

	// 	this.state = {
	// 		progress: 0,
	// 	};
	// }

	state={
		progress: 0,
	}

	setProgress=(pog)=> {
		
		this.setState({
			progress: pog,
		});
	}

	render() {
		return (
			<div>
				<LoadingBar
					color="red"
					progress={this.state.progress}
					// onLoaderFinished={this.setProgress(0)}
				/>

				<Navbar />

				<Routes>
					<Route
						exact
						path="/"
						element={<News key="1" country="us" setprog={this.setProgress} category="general" />}
					/>
					<Route
						exact
						path="Business"
						element={
							<News
								key="2"
								
								country="us"
							    setprog={this.setProgress}
								category="business"
							/>
						}
					/>
					<Route
						exact
						path="Entertainment"
						element={<News key="3" country="us" setprog={this.setProgress} category="entertainment" />}
					/>
					<Route
						exact
						path="Health"
						element={<News key="4" country="us" setprog={this.setProgress} category="health" />}
					/>
					<Route
						exact
						path="Science"
						element={<News key="5" country="us" setprog={this.setProgress} category="science" />}
					/>
					<Route
						exact
						path="Sports"
						element={<News key="6" country="us" setprog={this.setProgress} category="sports" />}
					/>
					<Route
						exact
						path="Technology"
						element={<News key="7" country="us" setprog={this.setProgress} category="technology" />}
					/>
					<Route exact path="*" key="8" element={<Error />} />
				</Routes>
			</div>
		);
	}
}
