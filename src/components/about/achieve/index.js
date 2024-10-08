import React from "react";
import './styles.achieve.css'

import Cert_img from '../../../assets/img/cert.png'

export default function Achieve() {
    return(
        <div className="achieve">
            <div className="achieve-title" data-aos='fade-down'>Achievements</div>
            <div className="cert-image" data-aos='slide-right'>
                <img src={Cert_img} alt="cert" />
            </div>
        </div>
    )
}