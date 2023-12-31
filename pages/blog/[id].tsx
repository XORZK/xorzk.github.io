// pages/blog/[id].js
import { marked } from 'marked'
import { getAllPostIds, getPostData } from '../../lib/posts';
import matter from 'gray-matter';
import Head from 'next/head';
import Layout from '../../components/Layout';
import "../../styles/katex.min.css";

const Post = ({ postData }) => {
    return (
        <Layout>
            <Head>
                <title> { postData.title } </title>
                <meta name="description" content={ postData.description } />
                <meta name="author" content={ postData.author } />
                <meta name="keywords" content={ postData.tags } />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div className="blog-entry-title">
                <h1> { postData.title } </h1>
                <div className="blog-metadata">
                    <h3 className="blog-keywords"> ({postData.tags}) </h3>
                    <h3 className="blog-entry-date"> [{postData.date}] </h3>
                </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Layout>
    );
};

export const getStaticPaths = async () => {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const postData = await getPostData(params.id as string)
    return {
        props: {
          postData
        }
    }
}

export default Post;
