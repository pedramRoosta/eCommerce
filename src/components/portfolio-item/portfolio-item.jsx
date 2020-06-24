import React from 'react'
import './portfolio-item.scss'

const PortfolioItem = ({id,imageAddr,title,desc}) => {
    return (
        <div className="portfolio-item">
            <div className="bgImage" style={{backgroundImage:`url(${imageAddr})`}}></div>
            <div className="portfolio-content">
                <h2 className="portfolio-item-title">{title}</h2>
                <span className="portfolio-item-desc">{desc}</span>
            </div>
        </div>)

}
export default PortfolioItem;