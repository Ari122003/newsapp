import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
	

	constructor() {
		super();

		this.state = {
			articles: [],
		};
	}

	async componentDidMount() {
		let that = this;
		await fetch(
			"https://newsapi.org/v2/top-headlines?country=ch&apiKey=d13e0e481a19496791ca17302442872c"
		)
			.then(function (data) {
				return data.json();
			})
			.then(function (result) {
				that.setState({
					articles: result.articles,
				});
			});
	}

	render() {
		return (
			<div className="container mt-5">
				<h2 className="mb-5 tw-text-center">Top headlines...</h2>

				<div className="row">
					{this.state.articles.map((item) => {
						return (
							<div className="col-md-4 " key={item.url}>
								<Newsitem
									title={item.title ? item.title : "Null"}
									description={
										item.description != null
											? item.description
											: "Error: Description unavialable!!!"
									}
									image={item.urlToImage}
									details={item.url}
								/>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default News;
