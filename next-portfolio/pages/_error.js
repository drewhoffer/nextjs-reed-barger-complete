import Layout from '../components/Layout';

const _Error = ({statusCode}) => (
    <Layout title="Error!!">
        {
        statusCode ? `Could not load user data: Status Code ${statusCode}` :
        <p>Couldn't get that page, sorry!!</p>

        }
    </Layout>
)

export default _Error;