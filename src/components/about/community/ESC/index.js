import React from "react";
import './styles.esc.css'

import Icon_1 from '../../../../assets/img/dev-1.png'
import Icon_2 from '../../../../assets/img/dev-2.png'
import Icon_3 from '../../../../assets/img/dev-3.png'
import Icon_4 from '../../../../assets/img/dev-4.png'
import Icon_5 from '../../../../assets/img/dev-5.png'
import Icon_6 from '../../../../assets/img/dev-6.png'

const data = [
    {title: "Develop", content: "Enerbond develops projects that streamline environmental and grid integration while minimizing ecological impact.", icon: Icon_1},
    {title: "Build", content: "We aim to exceed 1GW of advanced energy storage by 2025, integrating cutting-edge technological innovations.", icon: Icon_2},
    {title: "Finance", content: "Leveraging deep expertise in M&A and financing, Enerbond ensures that projects are economically sustainable from start to finish.", icon: Icon_3},
    {title: "Partner", content: "Enerbond collaborates with diverse stakeholders to enhance project development and expand our energy solutions.", icon: Icon_4},
    {title: "Operate", content: "We manage projects with a focus on operational excellence, ensuring efficiency and reliability throughout their lifecycle.", icon: Icon_5},
    {title: "Innovate", content: "Enerbond drives forward with continuous research and development, pushing the boundaries of energy storage technology to create more efficient, scalable, and sustainable solutions for a cleaner future.", icon: Icon_6},
]

export default function ESC() {
    return(
        <div className="esc">
            <div className="esc-title" data-aos='zoom-in'>ESC</div>
            <div className="esc-items-list">
                {data.map((item)=> (
                    <div className="esc-item" data-aos='flip-up'>
                        <div className="esc-item-title">
                            <img src={item.icon} alt="icon" />
                            <div>{item.title}</div>
                        </div>
                        <div className="esc-item-content">{item.content}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}