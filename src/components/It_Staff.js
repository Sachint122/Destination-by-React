import React from 'react'
import Head from './hooks/Head'
import imagehead from '../images/IT-Staffings.png'
import Leftimg from './hooks/Leftimg'
import hacker from '../images/ithead.png'
export default function It_Staff() {
    return (
        <>
            <Head
                headers="Training & Education"
                text1="Home"
                text2="Services"
                text3="IT & Staff"
                image={imagehead}
            />
            <hr />
             <Leftimg
                title="Transforming Your Workforce: IT Staffing Solutions for Success"
                description="At Destination Technologies, we understand the importance of a strong online presence for small and medium businesses. Our website designing services cater specifically to the unique needs of SMBs, helping them establish a professional and impactful online identity. We offer custom website design solutions that are visually appealing, user-friendly, and optimized for performance."
                imageUrl={hacker}
            />
            <hr />
        </>
    )
}
