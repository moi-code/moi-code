import React, { Component } from 'react';

export default class extends Component {
	static getInitialProps() {
		const isServer = typeof window === 'undefined';
		return { isServer };
	}

	render() {
		return (
			<div>
				<strong>{this.props.isServer ? 'Server' : 'Client'} side</strong>.
			</div>
		);
	}
}
