import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import {  Routes, Route } from "react-router-dom";

export default class App extends Component {
	render() {
		return (
			<div>
				
					<Navbar />

					<Routes>
						<Route exact path="/" element={<News key="1" country="us" category="general" />} />
						<Route exact path="Business" element={<News key="2" country="us" category="business" />} />
						<Route exact path="Entertainment" element={<News key="3" country="us" category="entertainment" />} />
						<Route exact path="Health" element={<News key="4" country="us" category="health" />} />
						<Route exact path="Science" element={<News key="5" country="us" category="science" />} />
						<Route exact path="Sports" element={<News key="6" country="us" category="sports" />} />
						<Route exact path="Technology" element={<News key="7" country="us" category="technology" />} />
					</Routes>
				
			</div>
		);
	}
}
