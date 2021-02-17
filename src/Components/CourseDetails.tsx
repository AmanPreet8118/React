import React, {Component} from 'react'
import './courseDetailscss.css'
import a from '../manifest.json'
const CourseDetails=(props: { details: React.ReactNode })=> {
    return (
        <div>
            <div className="coudetails">
                <div className="blank">

                </div>
                <div className="description">
                    {props.details}
                </div>
                <div className="author">

                </div>
                <div className="star">

                </div>
                <div className="rate">

                </div>
                <div className="button">

                </div>
                <div className="arrow">

                </div>
                <div className="cartdetails">
                    
                </div>
            </div>
        </div>
    )
}

export default CourseDetails
