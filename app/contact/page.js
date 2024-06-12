
import ContactContent from '@/components/contact';
import HeroImage from '../../assets/images/bread-bg.png'
import OrderSection from '@/components/order-section';
import Space from '@/components/space';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
export const metadata = {
  title: 'Contact - HQ Ceiling',
  description: 'Learn more about us on the About Us page.',
};

function Page() {
  return (
   <>
    <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
   <div style={{height:'70vh',backgroundImage:`url(${HeroImage.src})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',marginTop:-80}}>
      <div style={{height:'70vh',backgroundColor:'#00000082',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
         <h3 style={{color:'white',fontSize:55,fontWeight:600}}>Contact Us</h3>
         <FontAwesomeIcon icon={faAngleDown} style={{color:'white',fontSize:29}}/>
      </div>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d865839.2784948112!2d115.30201503519508!3d-32.03719220851128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32966cdb47733d%3A0x304f0b535df55d0!2sPerth%20WA%2C%20Australia!5e0!3m2!1sen!2sid!4v1718156023393!5m2!1sen!2sid"  style={{border:0,width:'100%',height:'500px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <ContactContent/>
   </>
    
  )
}

export default Page
