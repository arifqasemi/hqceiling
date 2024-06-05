import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";

export default function Home() {
  const title = "About Us - My Next.js App";
  const description = "Learn more about us on the About Us page.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div>
        <h1>About Us</h1>
        <p>This is the about page content.</p>
      </div>
    </>
  );
}
