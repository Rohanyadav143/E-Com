import React from 'react'
import About from '../Components/About'
import Breadcrum from '../Components/Breadcrum'
import Feature from '../Components/Feature'
import Testimonial from '../Components/Testimonial'
import Newsletter from '../Components/Newsletter'

export default function AboutPage() {
  return (
    <>
    <Breadcrum title="About Us"/>
    <About/>
    <Feature/>
    <Testimonial/>
    <Newsletter/>
    </>
  )
}
