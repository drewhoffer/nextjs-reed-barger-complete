import Layout from '../components/Layout';
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Error from './_error';


export default class About extends Component {
    render () {
        const { user, statusCode} = this.props;
        if (statusCode) {
            return <Error statusCode={statusCode}/>
        }
        return (

            
            <Layout title="About">
                <h3>{user.name}</h3>
                <p>{user.bio}</p>
        <p>Checkout my company site at: <a href={user.blog}>{user.blog}</a></p>
                <img src={user.avatar_url} alt="Drew Hoffer" height="200px"/>
            </Layout>

        )
    }

}


About.getInitialProps = async () => {
    const res = await fetch("https://api.github.com/users/drewhoffer")
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();
    console.log(data);
    return { user: data, statusCode}
}