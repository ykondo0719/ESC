import React from 'react';
import './styles.parte.css';

import ESC_model from '../../../assets/img/produc-3.png'

function Parte() {
    return (
        <div className="intro">
            <div className='intro-img' data-aos='zoom-in'>
                <img src={ESC_model} alt='intro-esc' width={300} className='intro-image' />
            </div>
            <div className='intro-content' data-aos='fade-down'>
                <div className='intro-sup'>
                    Why choose our HSC battery over other options?
                </div>
                <div className='intro-description'>
                    <div className='intro-description-list'>
                        <div className='intro-description-list-item'>
                            <li></li>
                            <div>High-Cycle Applications: If your device requires frequent charging/discharging (e.g., renewable energy systems, electric vehicles with regenerative braking, or industrial machinery), HSCs are far more reliable.</div>
                        </div>
                        <div className='intro-description-list-item'>
                            <li></li>
                            <div>Fast Charging Needs: For applications needing rapid charging, such as power tools or grid systems, HSCs are unmatched.</div>
                        </div>
                        <div className='intro-description-list-item'>
                            <li></li>
                            <div>Safety Prioritization: If safety is a key concern—especially in extreme environments—HSCs are inherently safer.</div>
                        </div>
                        <div className='intro-description-list-item'>
                            <li></li>
                            <div>Extreme Temperature Use: For operations in harsh climates or temperature-sensitive applications, HSCs perform better.</div>
                        </div>
                        <div className='intro-description-list-item'>
                            <li></li>
                            <div>Long-Term Cost Efficiency: Although HSCs have a higher upfront cost, their longer cycle life and low maintenance make them more cost-effective over time.</div>
                        </div>
                    </div>
                    <div className='intro-description-content'>HSCs are the clear choice for applications that demand high power, long cycle life, rapid charging, and extreme safety - especially in industrial, automotive, and renewable energy systems.</div>
                </div>
            </div>
        </div>
    );
}

export default Parte;
