import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
	articles = [
		{
			source: {
				id: "cbs-news",
				name: "CBS News",
			},
			author: "CBS News",
			title: "Vir Das on comedy and controversy",
			description:
				"Comedian Vir Das is known for his sharp wit and observational humor. He's made a name for himself both in India and internationally, but not without controversy. A recent routine that spread on social media created a fair degree of outrage in his home country…",
			url: "https://www.cbsnews.com/video/vir-das-on-comedy-and-controversy/",
			urlToImage:
				"https://assets2.cbsnewsstatic.com/hub/i/r/2023/01/28/e3e731e2-0c18-44cd-8379-85074c63b064/thumbnail/1200x630/944b82f5335056a20b6a98c1718b290c/0128-satmo-virdas-1664362-640x360.jpg",
			publishedAt: "2023-01-28T19:26:31+00:00",
			content:
				"Watch CBS News\r\nCopyright ©2023 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On",
		},
		{
			source: {
				id: "fox-sports",
				name: "Fox Sports",
			},
			author: null,
			title:
				"College basketball highlights: Nebraska vs. Iowa starts off big day on FOX",
			description:
				"It's a full day of college hoops on FOX featuring Arizona, Ohio State, Indiana, Illinois and more. Here are the top plays!",
			url: "http://www.foxsports.com/stories/college-basketball/college-basketball-highlights-nebraska-vs-iowa-ohio-state-indiana-on-fox",
			urlToImage:
				"https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/01/1408/814/1.28.23_CBB-Top-Plays_16x9.jpg?ve=1&tl=1",
			publishedAt: "2023-01-28T17:31:07Z",
			content:
				"It's a big day of college hoops Saturday on FOX, and kicking things off is a Big Ten women's basketball showdown between Nebraska (12-8) and No. 10 Iowa (16-4) at Carver-Hawkeye Arena.\r\nLater, men's … [+995 chars]",
		},
		{
			source: {
				id: "google-news-in",
				name: "Google News (India)",
			},
			author: "Swati Bhasin",
			title:
				"Jaishankar's Pandavas reference on Pak, 'Krishna, Hanuman top diplomats' remark",
			description:
				"S Jaishankar drew interesting references from Hindu mythology while talking about diplomacy.  | Latest News India",
			url: "https://www.hindustantimes.com/india-news/jaishankars-pandavas-reference-on-pak-krishna-hanuman-top-diplomats-remark-101674924957602.html",
			urlToImage:
				"https://images.hindustantimes.com/img/2023/01/28/1600x900/PTI01-19-2023-000014B-0_1674925006553_1674925006553_1674925019917_1674925019917.jpg",
			publishedAt: "2023-01-28T16:58:43+00:00",
			content:
				"When Foreign Minister S Jaishankar on Saturday unveiled the Marathi translation of his book - 'The India Way', China and Pakistan found a mention in his remarks as he held an interaction on global an… [+2540 chars]",
		},
		{
			source: {
				id: "bbc-news",
				name: "BBC News",
			},
			author: "BBC News",
			title: "Pilot dies in Indian army jet mid-air collision",
			description:
				'The planes were on a routine "operational flying training mission" when the incident happened.',
			url: "http://www.bbc.co.uk/news/world-asia-64437573",
			urlToImage:
				"https://ichef.bbci.co.uk/news/1024/branded_news/14018/production/_128444918_993f5b4832c98f179f2cf10648305aa984491708.jpg",
			publishedAt: "2023-01-28T16:52:18.9314772Z",
			content:
				'One pilot has died after two Indian Air Force fighter jets crashed in a mid-air collision in central India. \r\nThe planes were on a routine "operational flying training mission" when the incident happ… [+1415 chars]',
		},
		{
			source: {
				id: "cbs-news",
				name: "CBS News",
			},
			author: "CBS News",
			title:
				"Discoveries of classified documents prompting questions in Washington",
			description:
				'The U.S. government\'s ability to safegaurd its most sensitive information is under fire. On Friday, former Vice President Mike Pence acknowledged ""mistakes were made"" after classified documents were recently found in his Indiana home. The discoveries with P…',
			url: "https://www.cbsnews.com/video/discoveries-of-classified-documents-prompting-questions-in-washington/",
			urlToImage:
				"https://assets1.cbsnewsstatic.com/hub/i/r/2023/01/28/dcfc7bc7-52f3-44fd-8a77-0c146724994d/thumbnail/1200x630/07e517d995814e231b7fd70f3e157a98/0128-satmo-classifieddocs-1664344-640x360.jpg",
			publishedAt: "2023-01-28T15:22:30+00:00",
			content:
				"Watch CBS News\r\nCopyright ©2023 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On",
		},
		{
			source: {
				id: "google-news-in",
				name: "Google News (India)",
			},
			author: null,
			title:
				"Students At Mumbai's TISS Screen BBC Series On PM Modi Despite Warning",
			description:
				'BBC documentary row: Such screenings, as protest against censorship and "hiding facts" of the 2002 Gujarat riots, have been held across India',
			url: "https://www.ndtv.com/india-news/bbc-narendra-modi-documentary-row-as-students-at-mumbai-tiss-plan-to-screen-bbc-series-on-pm-modi-institutes-warning-3731891",
			urlToImage:
				"https://c.ndtvimg.com/2023-01/eamc3no_tiss-bbc-documentary_650x400_28_January_23.jpg",
			publishedAt: "2023-01-28T14:26:15+00:00",
			content:
				"Mumbai: Despite a warning against public screening of a controversial BBC documentary about PM Narendra Modi, a group of students at Mumbai's Tata Institute of Social Sciences (TISS) gathered and wat… [+1744 chars]",
		},
	];

	constructor() {
		super();

		this.state = {
			articles: this.articles,
		};
	}

	render() {
		return (
			<div className="container mt-5">
				<h2 className="mb-5 tw-text-center">Top headlines...</h2>

				<div className="row">
					{this.state.articles.map((item) => {
						return (
							<div className="col-md-4 ">
								<Newsitem
									title={item.title}
									description={item.description}
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
