
import AboutSection from '@/components/about-section';
import Image from 'next/image';
import HeroImage from '../../assets/images/slide1.jpg'
import OrderSection from '@/components/order-section';
import Space from '@/components/space';
import Head from 'next/head';

export const metadata = {
  title: 'Contact - HQ Ceiling',
  description: 'Learn more about us on the About Us page.',
};

function Page() {
  return (
   <>
   <div style={{height:'60vh',backgroundImage:`url(${HeroImage.src})`,backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
      <div style={{height:'60vh',backgroundColor:'#00000082',display:'flex',justifyContent:'center',alignItems:'center'}}>
         <h3 style={{color:'white',fontSize:55,fontWeight:600}}>Contact Us</h3>
      </div>
    </div>
    <AboutSection/>
    <Space/>
    <OrderSection/>
    {/* <TeamSection/> */}
   </>
    

  )
}

export default Page
