import React from 'react'
import './PageBannerCss.css'
import searchsign from '../images/Rectangle 36.svg'
function PageBanner() {
    return (
        <div>
            <div className="container">
            <div className="empty"></div>
                <div className="course">
                    <p>
                        All Courses
                    </p>
                </div>
                <div className="Dropdown">
                    <select>
                        <option value="Course Price">Course Price</option>
                        <option value="Discount Price">Discount Price</option>
                    </select>
                </div>
                <div className="search">
                    <input type="text" placeholder="Search"></input>
                </div>
                <div className="sign">
                    <button type="button"><img src={searchsign} alt="sign"/></button>
                </div>
                <div className="empty"></div>
            </div>
        </div>
    )
}

export default PageBanner
