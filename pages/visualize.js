import Head from "next/head";
import styles from "../styles/Home.module.css";
import ClientOnly from "../components/ClientOnly";
import QueryResult from "../components/visualize";
import Visualize from "../components/visualize";
// import LeaderBoard from "../components/leaderBoard";

export default function ClientSide() {
  return (
    <>
      <Head>
        <title>Visualize superfluid</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ClientOnly>
        {/* <QueryResult /> */}
        <Visualize />
      </ClientOnly>
    </>
  );
}