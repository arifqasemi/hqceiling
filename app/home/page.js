import Head from 'next/head';
import Image from 'next/image';
import SectionHero from '../../components/section-hero'
import AboutSection from '../../components/about-section'
import ServiceSection from '../../components/service-section'
import ProjectSection from '../../components/project-section'
import OrderSection from '../../components/order-section'
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
        <SectionHero/>
        <AboutSection/>
        <ServiceSection/>
        <ProjectSection/>
        <OrderSection/>
      </div>
    </>
  );
}
