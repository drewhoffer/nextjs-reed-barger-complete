import Layout from '../components/Layout';
import { withRouter } from 'next/router';

const Post =  ({ router }) => (
    <Layout title={router.query.title}>
        <p>Pariatur consectetur ex incididunt aute sunt sint. Officia laborum ullamco reprehenderit deserunt consequat eiusmod duis ex fugiat sint laborum sint veniam reprehenderit. Lorem consectetur elit fugiat et quis irure laboris cupidatat. Ut nisi fugiat esse dolor aliquip cillum tempor est labore sit ex occaecat exercitation nisi. Id velit ea occaecat non officia laborum ipsum ea. Irure excepteur ad anim fugiat quis magna veniam velit officia consectetur ullamco Lorem quis nostrud. Magna esse labore nisi aliquip mollit duis Lorem exercitation aute mollit.
            
        </p>
    </Layout>
);

export default withRouter(Post);