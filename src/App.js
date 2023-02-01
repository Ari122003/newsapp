import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import {  Routes, Route } from "react-router-dom";
import Error from "./Components/Error";

export default class App extends Component {
	render() {
		return (
			<div>
			
					<Navbar />
					

					<Routes>
						<Route exact path="/" element={<News key="1" country="in" category="general" />} />
						<Route exact path="Business" element={<News key="2" country="in" category="business" />} />
						<Route exact path="Entertainment" element={<News key="3" country="in" category="entertainment" />} />
						<Route exact path="Health" element={<News key="4" country="in" category="health" />} />
						<Route exact path="Science" element={<News key="5" country="in" category="science" />} />
						<Route exact path="Sports" element={<News key="6" country="in" category="sports" />} />
						<Route exact path="Technology" element={<News key="7" country="in" category="technology" />} />
						<Route exact path="*" key="8" element={<Error/>}/>
					</Routes>
				
			</div>
		);
	}
}
