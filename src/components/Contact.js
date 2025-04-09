import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

export default function Contact() {
  return (
    <div>
        <Nav/>

      <div className="form">
      <h1><marquee behavior="" direction="">---------Contact Us--------</marquee></h1>
      
        <form>
            <input type="text" placeholder='Enter Your Name'/>
            <input type="text" placeholder='Age'/>
            <input type="text" placeholder='Date of Birth'/>
            <input type="text" placeholder='Email'/>
            <input type="text" placeholder='Phone Number'/>
            <div className="gender"> 
            Gender:
            <input type="radio" name='gender'/>Male
            <input type="radio" name='gender'/>Female <br />
            </div>
            <textarea name="" id=""placeholder='Enter Your Opinio'></textarea>
        </form>
      </div>
      <Footer/>
    </div>
  )
}
