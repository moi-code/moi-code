import React, { Component } from 'react';

export default class extends Component {
	static getInitialProps({ query }) {
		console.log(query);
		const {
			login,
			avatarUrl,
			bio,
			isHireable,
			isBountyHunter,
			organizations,
			starredRepositories,
			watching
		} = query.githubData;
		return {
			login: login,
			avatarUrl: avatarUrl,
			bio: bio,
			isHireable: isHireable,
			isBountyHunter: isBountyHunter,
			organizations: organizations,
			starredRepositories: starredRepositories,
			watching: watching
		};
	}

	render() {
		const {
			login,
			avatarUrl,
			bio,
			isHireable,
			isBountyHunter,
			organizations,
			starredRepositories,
			watching
		} = this.props;
		return (
			<div>
				<h1>Github Profile</h1>

				<div className='p-3 my-2'>
					<img src={avatarUrl} alt='Github Profile Avatar' />
				</div>

				<p className='lead'>@{login}</p>
				<p>
					Hey, I'm a Mobile and Full-Stack Web Developer slowly mastering the
					various elements that make up my stack.
					<br /> For Front-End I Primarily use Bootstrap, ReactJs, NextJS, and
					of course HTML/CSS.
					<br /> For Back-End I tend to use Express for my webserver paired with
					NodeJs, MongoDB or Google's Cloud Firestore for my Database.
				</p>
				<p>{bio}</p>
				<p>Hireable: {isHireable.toString().toUpperCase()}</p>
			</div>
		);
	}
}
