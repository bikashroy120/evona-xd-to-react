import React from 'react'
import Common from '../component/common/Common'
import pageHome from "../asstes/image/image.png"
import '../styles/page.css'

const Page = () => {
  return (
    <>
     <Common title={"Our Page"} page="page"/>
      <section className='page_home'>
        <img src={pageHome} alt="" />
      </section>
      <section className='page_slyder'>
          <div className="container">
            
          </div>
      </section>
    </>
  )
}

export default Page