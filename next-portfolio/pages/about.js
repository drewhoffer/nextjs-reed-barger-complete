import Link from 'next/link';
import Layout from '../components/Layout';
import { Component } from 'react';

export default class About extends Component {
    render () {
        return (
            <Layout title="About">
                <Link href="/">
                    <a>Go to home</a>
                </Link>
                <p>A Javascript programmer</p>
                <img src="/static/javascript-logo.png" alt="JavaScript" height="200px"/>
            </Layout>

        )
    }
}