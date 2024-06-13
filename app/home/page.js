import Head from 'next/head';
import Image from 'next/image';
import SectionHero from '../../components/section-hero'
import AboutSection from '../../components/about-section'
import ServiceSection from '../../components/service-section'
import ProjectSection from '../../components/project-section'
import OrderSection from '../../components/order-section'
import VideoSection from '../../components/video-section'
import TestimonialSection from '../../components/testimonial-section'
import TeamSection from '../../components/team-section'
import BlogSection from '../../components/blog-section'
import Space from '../../components/space'
export const metadata = {
  title: 'Home - HQ Ceiling',
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
        {/* <Space/> */}
        <ServiceSection/>
        {/* <Space/> */}
        <ProjectSection/>
        {/* <OrderSection/> */}
        <VideoSection/>
         <Space/>
        <TestimonialSection/>
        <Space/>
        {/* <TeamSection/> */}
        <BlogSection/>
      </div>
    </>
  );
}
