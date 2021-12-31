import React from 'react'
import './InterestPoint.css'

export default function InterestPoint({ interest }) {
    return (
        <div class="interest-point">
            <p>{interest.name}</p>
            <p>{interest.type}</p>
            <p>{interest.price}</p>
        </div>
    )
}
