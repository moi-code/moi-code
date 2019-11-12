import React, { Component } from 'react';

export default class extends Component {
	static async getInitialProps({ query }) {
		return {
			login: query.githubData.login,
			avatarUrl: query.githubData.avatarUrl,
			bio: query.githubData.bio,
			isHireable: query.githubData.isHireable,
			isBountyHunter: query.githubData.isBountyHunter,
			organizations: query.githubData.organizations,
			starredRepositories: query.githubData.starredRepositories,
			watching: query.githubData.watching
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
		}=this.props
		return (
      <div className="container mx-auto my-5 p-3 border border-dark">
        <div className="p-3 my-2">
          <img
            className="p-2 border border-dark"
            src={avatarUrl}
            alt="Github Profile Avatar"
          />
        <h5 className='mt-2'>
          <a href={`https:www.github.com/${login}`}>@{login}</a>
        </h5>
        </div>

        <p>
          Hey, I'm a Mobile and Full-Stack Web Developer slowly mastering the
          various elements that make up my stack. For Front-End I Primarily use
          For Back-End I tend to use Express for my webserver paired with
          NodeJs, MongoDB or Google's Cloud Firestore for my Database.
        </p>
        <p>{bio}</p>
        <p>Hireable: {isHireable.toString().toUpperCase()}</p>
        <p>Bounty Hunter: {isBountyHunter.toString().toUpperCase()}</p>
        <div className="d-flex flex-column flex-md-row mt-5 justify-content-between align-items-start">
          <div className="col-md d-flex flex-column justify-content-center align-items-start">
            <h6 className="text-left">My Organizations</h6>
            <ul>
              {organizations.edges.map((org, i) => (
                <li key={i}>
                  <a href={org.node.url}>{org.node.name.toUpperCase()}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md d-flex flex-column align-items-start">
            <h6 className="text-left">Recently Starred</h6>
            <ul>
              {starredRepositories.edges.map((star, i) => (
                <li key={i}>
                  <a href={star.node.url}>{star.node.name.toUpperCase()}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md d-flex flex-column align-items-start">
            <h6 className="text-left">Latest Watched</h6>
            <ul>
              {watching.edges.map((watch, i) => (
                <li key={i}>
                  <a href={watch.node.url}>{watch.node.name.toUpperCase()}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
	}
}
