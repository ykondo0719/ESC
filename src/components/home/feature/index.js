import React from 'react';
import './styles.cards.css';

import Icon_1 from '../../../assets/img/icon-1.png'
import Icon_2 from '../../../assets/img/icon-2.png'
import Icon_3 from '../../../assets/img/icon-3.png'
import Icon_4 from '../../../assets/img/icon-4.png'
import Icon_5 from '../../../assets/img/icon-5.png'

const cardData = [
    { title: 'Longevity', content: 'Based on supercapacitor technology, making the battery projected cycle life of 20+ years - 50,000+ Cycles.', icon: Icon_1 },
    { title: 'Reliability', content: 'Our batteries can operate between -40°C to +65°C  (-40°F to +149°F). Optimum operating temps are -20°C~ 60°C ( -68°F to +140°F).', icon: Icon_2 },
    { title: 'Stability', content: 'HSCs are solid-state devices utilizing polymer materials. They offer exceptional safety performance without the risk of thermal runaway.', icon: Icon_3 },
    { title: 'Supercharging', content: 'Electrostatic energy storage enables much quicker ion movement during charging, allowing us to charge significantly faster than any commercial battery.', icon: Icon_4 },
    { title: 'Peak Shaving', content: 'In areas with variable or time-of-use electricity rates, our customers can utilize the energy stored in our Hybrid Supercapacitors to meet their entire site`s energy needs while recharging the HSCs during off-peak hours. This approach will provide significant energy savings, allowing the system to pay for itself over time.', icon: Icon_5 },
]

const Card = ({ title, content, icon, bg }) => {
    return (
        <div className={bg === 'primary' ? "primary-color card" : "card"} data-aos='flip-down'>
            <div className='card-sup'>
                <div className="card-icon">
                    <img src={icon} alt='icon' width={30} />
                </div>
                <h3 className="card-title">{title}</h3>
            </div>
            <div className="card-content">{content}</div>
        </div>
    );
};

const Features = () => {
    return (
        <div className="features-container">
            {
                cardData.map((cardItem) => (
                    <Card 
                        title={cardItem.title}
                        content={cardItem.content}
                        icon={cardItem.icon}
                        bg={(cardItem.title === 'Stability' || cardItem.title === 'Supercharging') ? 'primary' : 'black'}
                    />
                ))
            }
        </div>
    );
};

export default Features;
