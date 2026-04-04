import React from 'react'
import Image from 'next/image'
import "@/uploads/styles/component/component.css"
const TestimonialsCard = ({
  userImage,
  desc,
  userName,
  city
}) => {
  return (
    <>
      <div className="testimonials-card">
        <div className="qoma">
          <Image src="/assets/images/NGO/qoma.png" height={55} width={55} alt="qoma" ></Image>
        </div>
        <figure>
          <Image src="/assets/images/NGO/testimonals-user.png" height={70} width={70} alt="user img" ></Image>
        </figure>
        <p>Partnering with this foundation provides a fantastic learning opportunity on high-engagement philanthropy</p>
        <div className="bot">
          <h4>Rohan Sharma</h4>
          <p>New Delhi</p>
        </div>
      </div>
    </>
  )
}

export default TestimonialsCard