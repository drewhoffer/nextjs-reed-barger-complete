import Layout from '../components/Layout';
import Link from 'next/link';


const PostLink = ({ title, slug }) => (
    <li>
        <Link as={`${slug}`} href={`/post?title=${title}`}>
            <a>{title} Post</a>
        </Link>
    </li>
);


const Blog = () => (
    <Layout title="My Blog">
        <ul>
            <PostLink title="React" slug="react-post"/>
            <PostLink title="Angular" slug="angular-post"/>
            <PostLink title="Vue" slug="vue-post"/>

        </ul>
    </Layout>
);


export default Blog;