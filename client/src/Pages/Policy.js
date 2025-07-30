import React from 'react'
import Layout from '../components/Layout/Layout'

const Policy = () => {
  return (
    <Layout title={"privacy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
       


        <p style={{textAlign: 'justify', marginTop: 10, fontWeight: 500}}>
        <b style={{fontSize:'20px'}}>Privacy Policy</b>
  <br />
 

At AMAZEKART, we value your privacy. We collect personal information (name, email, address, payment info) and usage data to provide and improve our services. We share this information with third-party service providers and in legal situations. You can update your information and opt-out of marketing communications anytime. We implement security measures to protect your data. Our app is not for children under 13, and we do not knowingly collect their information. For changes, we will update this policy. Contact us at [www.help@amazekart.com] with questions. Thank you for trusting AMAZEKART.



</p>
        </div>
      </div>
    </Layout>
  )
}

export default Policy