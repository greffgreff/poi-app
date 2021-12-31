import React from 'react'
import './InterestPoint.css'

export default function InterestPoint({ interest }) {
    return (
        <div id={interest.id} key={interest.id} className="interest-point">
            <p>{interest.name}</p>
            <p>{interest.type}</p>
            <p>{interest.price}</p>
        </div>
    )
}
