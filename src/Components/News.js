import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
	capitaliser(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	constructor(props) {
		super(props);

		this.state = {
			articles: [],
			loading: false,
			page: 1,
			total: 0,
		};

		document.title = `NewsHub:-${this.capitaliser(this.props.category)}`;
	}

	update = async () => {
		this.setState({ loading: true });
		this.props.setprog(10);
		await fetch(
			`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d13e0e481a19496791ca17302442872c&page=${this.state.page}&pageSize=6`
		)
			.then((data) => {
				this.props.setprog(20);
				return data.json();
			})
			.then((result) => {
				this.props.setprog(50);
				console.log(result);

				this.setState({
					articles: result.articles,
					total: result.totalResults,
					loading: false,
				});
				this.props.setprog(70);
			});

		this.props.setprog(100);
	};

	componentDidMount() {
		this.update();
	}

	fetchMoreData = async () => {
		this.setState({
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
				that.setState({
					page: this.state.page + 1,
				});
				return data.json();
			})
			.then(function (result) {
				console.log(result);
				that.setState({
					articles: that.state.articles.concat(result.articles),
					total: result.totalResults,
					loading: false,
				});
			});
	};

	render() {
		return (
			<div className="container mt-5 mb-3">
				<h2
					className="mb-5 tw-text-4xl tw-font-bold tw-text-center"
					id="heading"
					style={{ marginTop: "3em" }}>
					Top {this.capitaliser(this.props.category)} Headlines
				</h2>

				{this.state.loading && <Spinner />}

				<InfiniteScroll
					dataLength={this.state.articles.length}
					next={this.fetchMoreData}
					hasMore={this.state.articles.length !== this.state.total}
					loader={this.state.loading && <Spinner />}>
					<div className="container">
						<div className="row">
							{this.state.articles.map((item) => {
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
											author={item.author ? item.author : "...."}
											date={item.publishedAt ? item.publishedAt : "...."}
											source={item.source.name}
										/>
									</div>
								);
							})}
						</div>
					</div>
				</InfiniteScroll>
			</div>
		);
	}
}

export default News;
