import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";

export class News extends Component {
	constructor(props) {
		super(props);

		this.state = {
			articles: [],
			loading: false,
			page: 1,
			total: 0,
			
		};

		document.title=`NewsHub:-${this.props.category}`
	}

	prev = async () => {
		this.setState({
			page: this.state.page - 1,
			loading: true,
		});

		let that = this;
		await fetch(
			`https://newsapi.org/v2/top-headlines?country=${
				this.props.country
			}&category=${
				this.props.category
			}&apiKey=d13e0e481a19496791ca17302442872c&page=${
				this.state.page - 1
			}&pageSize=6`
		)
			.then(function (data) {
				return data.json();
			})
			.then(function (result) {
				that.setState({
					articles: result.articles,
					loading: false,
				});
			});
	};

	next = async () => {
		if (this.state.page + 1 < Math.ceil(this.state.total / 6)) {
			this.setState({
				page: this.state.page + 1,
				loading: true,
			});

			let that = this;
			await fetch(
				`https://newsapi.org/v2/top-headlines?country=${
					this.props.country
				}&category=${
					this.props.category
				}&apiKey=d13e0e481a19496791ca17302442872c&page=${
					this.state.page + 1
				}&pageSize=6`
			)
				.then(function (data) {
					return data.json();
				})
				.then(function (result) {
					that.setState({
						articles: result.articles,
						loading: false,
					});
				});
		}
	};

	async componentDidMount() {
		let that = this;

		that.setState({ loading: true });

		await fetch(
			`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d13e0e481a19496791ca17302442872c&page=1&pageSize=6`
		)
			.then(function (data) {
				
				return data.json();
			})
			.then(function (result) {
				console.log(result)
				that.setState({
					articles: result.articles,
					total: result.totalResults,
					loading: false,
					
				});
			})
	}

	render() {
		return (
			<div className="container mt-5 mb-3">
				<h2
					className="mb-5 tw-text-4xl tw-font-bold tw-text-center"
					id="heading">
					Top headlines
				</h2>

				{this.state.loading && <Spinner />}

				<div className="row">
					{!this.state.loading &&
						this.state.articles.map((item) => {
							return (
								<div className="col-md-4 " key={item.url}>
									<Newsitem
									   
										title={item.title ? item.title : "Title unavialable"}
										description={
											item.description !== (null || "")
												? item.description
												: "Description unavialable!!!"
										}
										image={item.urlToImage}
										details={item.url}
										author={item.author?item.author:"...."}
										date={item.publishedAt?item.publishedAt:"...."}
										source={item.source.name}
									/>
								</div>
							);
						})}
				</div>

				<div className="d-flex justify-content-between">
					<button
						disabled={this.state.page <= 1}
						type="button"
						onClick={this.prev}
						className="btn btn-outline-light  ">
						Previous
					</button>
					<button
						disabled={this.state.page + 1 >= Math.ceil(this.state.total / 6)}
						type="button"
						className="btn btn-outline-light  "
						onClick={this.next}>
						Next
					</button>
				</div>
			</div>
		);
	}
}

export default News;
