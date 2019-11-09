import React, { Component } from 'react';
 
export default class extends Component {
	static getInitialProps({query}) {
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
			} = query.githubData
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
				<h1>Github</h1>
				<p className='lead'>
					<strong>{login} side</strong>
				</p>
				.
			</div>
		);
	}
}
