'use client'
import './about-section.css'



const slideInVariants = {
  hidden: { opacity: 0, y:100 },
  visible: { opacity: 1,y:0, transition: { duration: 0.5 } },
};
function AboutSection() {
  return (
    <div className='about-section' >
      <div className='about-heading'>
        <p className='about-sub-heading'>We Offer</p>
        <h3 className='about-head'>Innovative Residential and Commercial Construction Solutions</h3>
      </div>
      <div className='about-desc'>
        <p>With experienced staff and trades across different sectors of the construction industry, HQ Construction is proud to offer a combination of new home, renovation, and commercial construction services. Applying our Intelligent Design and Quality Build mentality to each area, we are able to offer custom design and construction services in each sector. </p>
      </div>

    </div>
  )
}

export default AboutSection
