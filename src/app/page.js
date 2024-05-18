
'use client';
import Head from "next/head";
//import Header from "../../components/ManualHeader";
import Header from "../../components/Header";
import LotteryEntrance from "../../components/LotteryEntrance";
import "../../styles/globals.css";
import ManualHeader from "../../components/ManualHeader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Head>
        <title>Smart Contract Lottery</title>
        <meta name="description" content="Our Smart Contract Lottery" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <ManualHeader /> */}
      <Header/>
      <LotteryEntrance/>
    </main>
  );
}
