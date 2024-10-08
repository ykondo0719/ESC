import React from "react";
import './styles.tech.css'

import Icon_1 from '../../../assets/img/tech-1.png'
import Icon_2 from '../../../assets/img/tech-2.png'
import Icon_3 from '../../../assets/img/tech-3.png'

const data = [
    {title: "High Energy Density", content: "Our batteries provide exceptional energy density, optimizing power output while reducing the physical space required.", icon: Icon_1},
    {title: "Safety and Reliability", content: "Our batteries are designed with advanced safety protocols, delivering dependable performance in all conditions.", icon: Icon_2},
    {title: "Sustainability", content: "Committed to environmental stewardship, our batteries are designed with eco-friendly materials and processes.", icon: Icon_3},
]

export default function Tech() {
    return(
        <div className="tech">
            <div className="tech-title" data-aos='zoom-in'>Our Core Technologies</div>
            <div className="tech-items-list">
                {data.map((item)=> (
                    <div className="tech-item" data-aos='flip-up'>
                        <div className="tech-item-title">
                            <img src={item.icon} alt="icon" />
                            <div>{item.title}</div>
                        </div>
                        <div className="tech-item-content">{item.content}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}