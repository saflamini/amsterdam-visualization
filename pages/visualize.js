import Head from "next/head";
import styles from "../styles/Home.module.css";
import ClientOnly from "../components/ClientOnly";
import AccountTokens from "../components/accountTokens";
import Visualize from "../components/visualize";

export default function ClientSide() {
  return (
    <ClientOnly>
      <Visualize />
    </ClientOnly>
  )
}