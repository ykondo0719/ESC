import React from "react";
import './styles.practice.css'

import Icon_1 from '../../../assets/img/practice-1.png'
import Icon_2 from '../../../assets/img/practice-2.png'
import Icon_3 from '../../../assets/img/practice-3.png'

const data = [
    {title: "Innovative Solutions", content: "ESC leverages advanced battery technology to boost energy efficiency and reduce waste, making a substantial impact on lowering carbon emissions.", icon: Icon_1},
    {title: "Resource Management", content: "Our batteries are designed with advanced safety protocols, delivering dependable performance in all conditions.", icon: Icon_2},
    {title: "Community Engagement", content: "ESC is dedicated to promoting environmental awareness, enhancing educational initiatives, and collaborating with organizations to drive sustainability efforts globally.", icon: Icon_3},
]

export default function Practice() {
    return(
        <div className="practice">
            <div className="practice-container">
                <div className="practice-title" data-aos='zoom-in'>How We Practice Sustainability</div>
                <div className="practice-items-list">
                    {data.map((item)=> (
                        <div className="practice-item" data-aos='zoom-in'>
                            <div className="practice-item-title">
                                <img src={item.icon} alt="icon" />
                                <div>{item.title}</div>
                            </div>
                            <div className="practice-item-content">{item.content}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}