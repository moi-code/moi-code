import React, { Component } from 'react';
import { toUnicode } from 'punycode';

export default class extends Component {
	static getInitialProps({ query }) {
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
			<div className='container mx-auto'>
				<h1>Github Profile</h1>

				<div className='p-3 my-2'>
					<img src={avatarUrl} alt='Github Profile Avatar' />
				</div>

				<p className='lead'>
					<a href={`https:www.github.com/${login}`}>@{login}</a>
				</p>
				<p>
					Hey, I'm a Mobile and Full-Stack Web Developer slowly mastering the
					various elements that make up my stack. For Front-End I Primarily use
					For Back-End I tend to use Express for my webserver paired with
					NodeJs, MongoDB or Google's Cloud Firestore for my Database.
				</p>
				<p>{bio}</p>
				<p>Hireable: {isHireable.toString().toUpperCase()}</p>
				<div className='d-flex flex-column flex-md-row mt-5 justify-content-center align-items-center'>
					<p className='col-md d-flex flex-column align-items-center'>
						<h6>My Organizations</h6>
						<ul>
							{organizations.edges.map((org, i) => (
								<li key={i}>
									<a href={org.node.url}>{org.node.name.toUpperCase()}</a>
								</li>
							))}
						</ul>
					</p>
					<p className='col-md d-flex flex-column align-items-center'>
						<h6>Recently Starred</h6>
						<ul>
							{starredRepositories.edges.map((star, i) => (
								<li key={i}>
									<a href={star.node.url}>{star.node.name.toUpperCase()}</a>
								</li>
							))}
						</ul>
					</p>
					<p className='col-md d-flex flex-column align-items-center'>
						<h6>Latest Watched</h6>
						<ul>
							{watching.edges.map((watch, i) => (
								<li key={i}>
									<a href={watch.node.url}>{watch.node.name.toUpperCase()}</a>
								</li>
							))}
						</ul>
					</p>
				</div>
			</div>
		);
	}
}
