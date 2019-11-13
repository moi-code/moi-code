import React from 'react';
import App from 'next/app';
import Head from 'next/head'

import Navbar from '../src/components/Navbar'
import Layout from '../src/components/Layout';

class MoiCode extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<moi className='h-100'>
				<Head>
					<title>Moi Code</title>
				</Head>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</moi>
		);
	}
}

export default MoiCode;
