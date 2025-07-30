import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"about us"}>
    <div className="row contactus ">
      <div className="col-md-6 ">
        <img
          src="/images/about.jpeg"
          alt="contactus"
          style={{ width: "100%" }}
        />
      </div>
      <div className="col-md-4">
   <p style={{textAlign: 'justify', marginTop: 10, fontWeight: 500}}>
  <b style={{fontSize:'20px'}}>About Us</b>
  <br />
  Welcome to AMAZEKART, your premier destination for high-quality products and exceptional service. Founded in 2023, we offer a diverse selection of top-brand items, from the latest tech gadgets to stylish apparel and unique home décor. Our mission is to provide a seamless and enjoyable shopping experience, prioritizing customer satisfaction, quality assurance, and fast, secure shipping. With a commitment to innovation and integrity, AMAZEKART ensures you find exactly what you need at competitive prices. Join our community and discover why AMAZEKART is the trusted choice for savvy shoppers. Thank you for choosing AMAZEKART!
</p>

      </div>
    </div>
  </Layout>
  )
}

export default About