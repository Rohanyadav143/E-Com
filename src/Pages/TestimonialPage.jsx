import React from 'react'
import Breadcrum from '../Components/Breadcrum'
import Testimonial from '../Components/Testimonial'
import Newsletter from '../Components/Newsletter'

export default function TestimonialPage() {
    return (
        <>
            <Breadcrum title="Our Testimonials" />
            <Testimonial />
            <Newsletter />
        </>
    )
}
