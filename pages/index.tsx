// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

const Home = () => {
    return (
        <Layout>
            <Head>
                <title> home </title>
            </Head>
            <h1> glad you could make it. </h1>
            <p> Welcome to my personal website. It&apos;s relatively shoddy looking at the moment, but I&apos;m still an amateur when it comes to web design. </p>
            <p> I created this website to familiarize myself with some web frameworks, as well as to provide a platform for me to document my notes, thoughts, and ideas. </p>
            <p> I don&apos;t expect a large audience (or any audience at all) for the content I write about, rather, this website serves as a cathardic outlet for self-expression. </p>
        </Layout>
    );
};

export default Home;
