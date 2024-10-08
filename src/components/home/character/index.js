import React from "react";
import './styles.character.css'

import Icon_1 from '../../../assets/img/char-1.png'
import Icon_2 from '../../../assets/img/char-2.png'
import Icon_3 from '../../../assets/img/char-3.png'
import Icon_4 from '../../../assets/img/char-4.png'
import Icon_5 from '../../../assets/img/char-5.png'
import Icon_6 from '../../../assets/img/char-6.png'
import Icon_7 from '../../../assets/img/char-7.png'
import Icon_8 from '../../../assets/img/char-8.png'
import Icon_9 from '../../../assets/img/char-9.png'
import Icon_10 from '../../../assets/img/char-10.png'
import Icon_11 from '../../../assets/img/char-11.png'
import Icon_12 from '../../../assets/img/char-12.png'

const data = [
    {title: 'Wide Temperature Range', content: "Discharges efficiently from -40ºC to 65ºC.", icon: Icon_1},
    {title: 'High Charge Rate', content: "Supports rapid 25C charge/discharge rates.", icon: Icon_2},
    {title: 'Heat-Free Operation', content: "No heat generated during cycling.", icon: Icon_3},
    {title: 'Minimal Capacity Loss', content: "Maintains capacity over extensive cycling.", icon: Icon_4},
    {title: 'Built-In Safety', content: "Integrated safeguards protect the module.", icon: Icon_5},
    {title: 'Remote Monitoring', content: "Enables real-time performance tracking.", icon: Icon_6},
    {title: 'Safe Usage', content: "No risk of thermal runaway.", icon: Icon_7},
    {title: 'Maintenance-Free', content: "No upkeep needed during storage or use.", icon: Icon_8},
    {title: 'Sustainable', content: "Components are fully recyclable.", icon: Icon_9},
    {title: 'Environmentally Friendly', content: "Non-toxic with no disposal impact.", icon: Icon_10},
    {title: 'Long Charge Retention', content: "Holds charge over extended inactivity.", icon: Icon_11},
    {title: 'Exceptional Durability', content: "100,000+ charge/discharge cycles.", icon: Icon_12},
]

export default function Character() {
    return(
        <div className="char">
            <div className="char-title" data-aos='zoom-in'>Essential characteristics</div>
            <div className="char-items-list">
                {data.map((item)=> (
                    <div className="char-item" data-aos='fade-up'>
                        <img src={item.icon} alt="icon" />
                        <div>
                            <div className="char-item-title">{item.title}: </div>
                            <div>{item.content}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}