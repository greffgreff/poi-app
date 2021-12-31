import React from 'react'
import InterestPoint from './InterestPoint/InterestPoint'
import './InterestPoints.css'


export default function InterestPoints({ interests }) {
    return (
        <div class="interest-points">
            <div class="interest-list">
                {interests.map(interest => {
                    return <InterestPoint interest={interest} />
                })}
            </div>
        </div>
    )
}
