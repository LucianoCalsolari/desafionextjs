import {  NextPage } from 'next';
import useSWR from 'swr';
import { Title } from '../components/Title';
import http from '../utils/http';
import { PostModel } from '../utils/models';

const fetcher  = (url: string ) => http.get(url).then((res) => res.data);

const PostsPage:NextPage = () => {

    const {data: posts } = useSWR<PostModel[]>("transactions",fetcher);

    return (
        <div>
            <Title>Posts</Title>
            {posts?.map((t,key) => <div>
                <div key={key}>
                    <div>
                        <p>id {t.account_id}</p>
                        <p>post {t.amount}</p>
                    </div>
                </div>
            </div>)};
        </div>
    );
};


export default PostsPage;



