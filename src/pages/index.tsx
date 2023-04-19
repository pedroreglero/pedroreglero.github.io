import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import { Roboto } from 'next/font/google';

const roboto = Roboto({subsets: ["latin"], weight: "300"});

const Home: NextPage = () => {
    return (
        <div className={roboto.className}>
            <Head>
                <title>Pedro&apos;s Resume</title>
                <link rel="icon" href="/icon.png" />
            </Head>
            <Header />
            <Experience />
            <Skills />
            <Education />
            <Contact />
        </div>
    );
};

export default Home;