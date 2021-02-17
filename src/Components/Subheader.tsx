import React from 'react'
import react from '../images/Mask Group 1.png'
import './subheadercss.css'
function Subheader() {
    return (
        <div>
            <div className="sub">
                <div className="empty"></div>
                <div className="text">
                    <article>
                        Discover Latest Courses On
                    </article>
                    <article>
                        React
                    </article>
                </div>
                <div className="Photo">
                    <img src={react} alt="reactlogo" />
                </div>
                <div className="empty"></div>
            </div>
        </div>
    )
}

export default Subheader
