import React from 'react'
import InterestPoint from './InterestPoint/InterestPoint'
import './InterestPoints.css'


export default function InterestPoints({ interests }) {
    return (
        <div className="interest-points">
            <div className="interest-list">
                {interests.map(interest => {
                    return <InterestPoint key={interest.id} interest={interest} />
                })}
            </div>
        </div>
    )
}
