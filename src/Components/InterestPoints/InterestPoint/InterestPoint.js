import React from 'react'
import './InterestPoint.css'
import '../../Util/CategoryCodes.css'

export default function InterestPoint({ interest }) {
    return (
        <div key={interest.id} className={`${interest.code} interest-point`}>
            <p>{interest.name}</p>
            <p>{interest.category}</p>
        </div>
    )
}
