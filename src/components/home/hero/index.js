import React from 'react';
import './styles.hero.css';

import ESC_model from '../../../assets/img/produc-4.png'
import Carousel from '../../Carousel/Carousel';

// const items = [
//     <>
//         <div className='hero-content' data-aos='fade-down'>
//             <div className='sup'>
//                 <div>No Thermal Runaway to Cause Explosions and Fires</div>
//                 <div>30,000+ Full Cycles - 100% DOD</div>
//                 <div>20 - 30 Year Expected Lifespan</div>
//                 <div>No Annual Maintenance</div>
//                 <div>100% Recyclable</div>
//             </div>
//             <div className='hero-description'>Electron Storage Corporation (ESC) delivers cutting-edge energy
//                 storage technologies for a cleaner, sustainable world.</div>
//             <div className='hero-hidden-image'>
//                 <img src={ESC_model} alt='hero-esc' className='hero-image' />
//             </div>
//             <div className='sub'>
//                 <div className='button-r'>Read More</div>
//                 <div className='button-c'>Contact Us</div>
//             </div>
//         </div>
//         <div className='hero-slide' data-aos='fade-down'>
//             <img src={ESC_model} alt='hero-esc' className='hero-image' />
//         </div>
//     </>,
//     <>
//         <div className='hero-content' data-aos='fade-down'>
//             <div className='sup'>
//                 <div>No Thermal Runaway to Cause Explosions and Fires</div>
//                 <div>30,000+ Full Cycles - 100% DOD</div>
//                 <div>20 - 30 Year Expected Lifespan</div>
//                 <div>No Annual Maintenance</div>
//                 <div>100% Recyclable</div>
//             </div>
//             <div className='hero-description'>Electron Storage Corporation (ESC) delivers cutting-edge energy
//                 storage technologies for a cleaner, sustainable world.</div>
//             <div className='hero-hidden-image'>
//                 <img src={ESC_model} alt='hero-esc' className='hero-image' />
//             </div>
//             <div className='sub'>
//                 <div className='button-r'>Read More</div>
//                 <div className='button-c'>Contact Us</div>
//             </div>
//         </div>
//         <div className='hero-slide' data-aos='fade-down'>
//             <img src={ESC_model} alt='hero-esc' className='hero-image' />
//         </div>
//     </>,
//     <>
//         <div className='hero-content' data-aos='fade-down'>
//             <div className='sup'>
//                 <div>No Thermal Runaway to Cause Explosions and Fires</div>
//                 <div>30,000+ Full Cycles - 100% DOD</div>
//                 <div>20 - 30 Year Expected Lifespan</div>
//                 <div>No Annual Maintenance</div>
//                 <div>100% Recyclable</div>
//             </div>
//             <div className='hero-description'>Electron Storage Corporation (ESC) delivers cutting-edge energy
//                 storage technologies for a cleaner, sustainable world.</div>
//             <div className='hero-hidden-image'>
//                 <img src={ESC_model} alt='hero-esc' className='hero-image' />
//             </div>
//             <div className='sub'>
//                 <div className='button-r'>Read More</div>
//                 <div className='button-c'>Contact Us</div>
//             </div>
//         </div>
//         <div className='hero-slide' data-aos='fade-down'>
//             <img src={ESC_model} alt='hero-esc' className='hero-image' />
//         </div>
//     </>
// ]

function Hero() {

    return (
        <div className="hero">
            {/* <Carousel items={items} /> */}
            <div className='hero-content' data-aos='fade-down'>
                <div className='sup'>
                    <div>ESC Hybrid Supercapacitor Battery</div>
                    <div>No Themal Runaway - No Explosion or Fire Risk</div>
                    <div>50,000+ Full Cycles at 100% DOD</div>
                    <div>20+ Year Lifespan</div>
                    <div>No Annual Upkeep or Maintenance</div>
                    <div>100% Fully Recyclable</div>
                </div>
                <div className='hero-description'>Electron Storage Corporation (ESC) delivers cutting-edge energy
                    storage technologies for a cleaner, sustainable world.</div>
                <div className='hero-hidden-image'>
                    <img src={ESC_model} alt='hero-esc' className='hero-image' />
                </div>
                <div className='sub'>
                    <div className='button-c'>View Product</div>
                </div>
            </div>
            <div className='hero-slide' data-aos='fade-down'>
                <img src={ESC_model} alt='hero-esc' className='hero-image' />
            </div>
        </div>
    );
}

export default Hero;
