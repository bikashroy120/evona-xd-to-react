import React from 'react'
import './common.css'
import {MdKeyboardArrowRight} from "react-icons/md"
import img from "../../asstes/image/element_2.png"
import img2 from "../../asstes/image/element_1.png"


const Common = ({title,page}) => {
  return (
    <div className='common_area'>
        <div className='common_content'>
            <h2>{title}</h2>
            <span>Home <MdKeyboardArrowRight/>  {page}</span>
            
        </div>
        <img src={img} alt="" className='last_img' /> 
        <img src={img2} alt="" className='fast_img' />
    </div>
  )
}

export default Common