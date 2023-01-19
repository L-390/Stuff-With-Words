import {NextPage} from "next";
import Head from "next/head";
import Navbar from "../components/navbar";

const Guessword: NextPage = () => {
    return (
        <>
            <Head>
                <title>Fun with Words</title>
            </Head>
            <Navbar currentPage='guessword'/>
        </>
    )
}

export default Guessword;