import Head from 'next/head';
import Image from 'next/image';

export const metadata = {
  title: 'About Us - My Next.js App',
  description: 'Learn more about us on the About Us page.',
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <div>
        <h1>About Us</h1>
        <p>This is the about page content.</p>
      </div>
    </>
  );
}
