import React, { Component } from 'react';
import Header from '../src/components/Header'
export default class extends Component {
	static getInitialProps() {
		const isServer = typeof window === 'undefined';
		return { isServer };
	}

	render() {
		return (
			<div className='h-100'>
				<Header>
					<h1 className='display-3'>Moi Code</h1>
					<p className='lead'>Moi Everything</p>
				</Header>
				<strong>{this.props.isServer ? 'Server' : 'Client'} side</strong>.
			</div>
		);
	}
}
