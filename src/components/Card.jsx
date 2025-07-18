import React from 'react'
import TestimonialCard from './TestimonialCard'
import "../components/Card.css"

const Card = () => {
    return (
        <>
            <div className="main-card">
                <div className="uppercard">
                    <TestimonialCard />
                    <TestimonialCard />
                </div>
                 <p className='spoke' >They Spoke.We Delivered</p>
                <div className="lowercase">
                    <TestimonialCard />
                    <TestimonialCard />
                </div>
            </div>
        </>
    )
}

export default Card