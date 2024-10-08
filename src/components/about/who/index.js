import React from "react";
import './styles.who.css'

const data = {
    title: "Who We Are",
    content: "Electron Storage Corporation (ESC) is a leading solid-state battery manufacturer and energy storage solutions provider. We are committed to advancing energy storage technology, revolutionizing the future energy landscape, and delivering high-quality storage solutions globally. Our product lines, including the EM, EF, and EG series, cater to diverse market needs, while our  systems are designed for various applications and project scales. We also offer OEM, ODM, and tailored energy storage solutions to meet specific requirements. Join us in creating a greener future through innovative energy solutions!"
}

export default function Who() {
    return (
        <div className="who" data-aos='fade-up'>
            <div className="who-title" data-aos='zoom-in'>{data.title}</div>
            <div className="who-content">{data.content}</div>
        </div>
    )
}