// pages/blog.tsx
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Layout from '../components/Layout';
import { getAllPostIds, getPostData } from '../lib/posts';

const Blog = ({ posts }) => {
    return (
        <Layout>
            <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
            <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
            <h1> blog/exobrain posts </h1>
            <div>
                <ul>
                    { posts.map((post) => (
                        <li key={post.slug} class="blog-title"> 
                            <p> [{ post.data.date }] </p>
                            <Link href={`/blog/${post.slug}`}> 
                                {post.data.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export async function getStaticProps() {
    const ids = getAllPostIds();

    const posts = await Promise.all(ids.map(async (filename) => {
        const dat = await getPostData(filename.params.id as string);
        return {
            slug: filename.params.id,
            data: dat
        };
    }));

    posts.sort(function(a,b) {
        return (Date.parse(a.data.date) < Date.parse(b.data.date)) ? 1 : -1;
    });

    return {
        props: {
            posts
        }
    };
}

export default Blog;
