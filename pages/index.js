import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import Cards from "../components/Cards";
import Slide from "../components/Slide";
import styles from "../styles/Home.module.css";

export default function Home({ pizzaLists, admin }) {
  const [close, setClose] = useState(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Order App</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Bitter:wght@100;200;300;400;500;600&display=swap"
          rel="stylesheet"
        />

        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slide />
      {admin && <AddButton setClose={setClose} />}
      <Cards pizzaLists={pizzaLists} />
      {close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  let admin = false;
  console.log(ctx.req.cookies.token);
  const myCookie = ctx.req?.cookies.token || "";
  if (myCookie === process.env.TOKEN) {
    admin = true;
  }
  const res = await axios.get("http://localhost:3000/api/products");
  return { props: { pizzaLists: res.data, admin: admin } };
};
