import React, { Component } from 'react';
import Header from '../src/components/Header'
export default class extends Component {
	static async getInitialProps() {
		const isServer = typeof window === 'undefined';
		return { isServer };
	}

	render() {
		return (
			<div className='h-100 d-flex flex-column justify-content-center align-items-center'>
				<Header>
					<div className='d-flex flex-column h-100 justify-content-center ml-5'>
					<h1 className='display-3'>Moi Code</h1>
					<p className='lead'>Moi Everything</p>
					</div>
				</Header>
				<p className="lead" title='Using NextJS and Express for SSR Optimization.'>
				<strong>{this.props.isServer ? 'Server' : 'Client'} side</strong>.
				</p>
			</div>
		);
	}
}
