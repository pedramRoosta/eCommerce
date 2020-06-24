import React from 'react'
import './portfolio.scss'
import PortfolioItem from '../portfolio-item/portfolio-item'

class Portfolio extends React.Component {
    constructor() {
        super();
        this.state = {
            portfolioItems: [
                {
                    id: 1,
                    title: 'Websites',
                    imageAddr:'https://picsum.photos/id/111/200/300',
                    desc: 'websites and services'
                },
                {
                    id: 2,
                    title: '3D Modeling',
                    imageAddr:'https://picsum.photos/id/112/200/300',
                    desc: 'Game Object Modeling and more...'
                },
                {
                    id: 3,
                    title: 'Hobbies',
                    imageAddr:'https://picsum.photos/id/113/200/300',
                    desc: 'Hobbies and more...'
                },
                {
                    id: 4,
                    title: 'About Me',
                    imageAddr:'https://picsum.photos/id/114/200/300',
                    desc: '?'
                },
                {
                    id: 5,
                    title: 'Contact',
                    imageAddr:'https://picsum.photos/id/115/500/500',
                    desc: 'tell me about yourself',
                    
                }
            ]
        }
    }
    render() {
        return <div className="portfolio">
            {
               this.state.portfolioItems.map(item=><PortfolioItem key={item.id} {...item}/>)
            }

        </div>
    }
}
export default Portfolio;