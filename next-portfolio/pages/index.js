import Link from 'next/link';
import Layout from '../components/Layout';

const Index = () => (

    <Layout title="Home">
        <Link href="/">
            <a>Go to home</a>
        </Link>
        <p>Welcome to the home page</p>
    </Layout>
);

export default Index;