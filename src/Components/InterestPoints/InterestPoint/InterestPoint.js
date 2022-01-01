import React from 'react'
import './InterestPoint.css'

export default function InterestPoint({ interest }) {
    return (
        <div key={interest.id} className={`${interest.code} interest-point`}>
            <p>{interest.name}</p>
            <p>{interest.category}</p>
        </div>
    )
}
