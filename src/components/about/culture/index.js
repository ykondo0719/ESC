import React from "react";
import './styles.culture.css'


const cultureData = [
    { title: "Core Value", content: "Our company is a commitment to customer-centricity. We believe that our dedicated employees are the foundation of everything we do, driving exceptional service and innovation. Their passion fuels our success, ensuring customer needs are always a top priority." },
    { title: "Core vision", content: "ESC envisions a future where it continues to lead the renewable energy sector by introducing innovative technologies that drive global sustainability. Over the next decade, we aim to further reduce our carbon footprint by 50%, advancing our commitment to a greener world." },
    { title: "Corporate Spirit", content: "We prioritize innovation, always seeking new ideas and cutting-edge approaches. Continuous improvement is at the core of our ethos, driving us to refine our processes and exceed expectations. We believe in adaptability, embracing change as an opportunity to grow. " },
    { title: "Our Working Philosophy", content: "Our working philosophy is rooted in professionalism, ensuring every task is handled with the highest standards. We take responsibility for delivering results that meet or exceed expectations. Efficiency is key, optimizing resources and time for the best outcomes. Guided by ethical principles, we maintain integrity in all our actions." },
]

export default function Culture() {
    return (
        <div className="culture">
            <div className="culture-title" data-aos='zoom-in'>Our Corporation Culture</div>
            <div className="culture-items-list">
                <div className="culture-items-l">
                    <div className="culture-item" data-aos='flip-up'>
                        <div className="culture-item-title">{cultureData[0].title}</div>
                        <div className="culture-item-content">{cultureData[0].content}</div>
                    </div>
                    <div className="culture-item" data-aos='flip-up'>
                        <div className="culture-item-title">{cultureData[1].title}</div>
                        <div className="culture-item-content">{cultureData[1].content}</div>
                    </div>
                </div>
                <div className="culture-items-r">
                    <div className="culture-item" data-aos='flip-up'>
                        <div className="culture-item-title">{cultureData[2].title}</div>
                        <div className="culture-item-content">{cultureData[2].content}</div>
                    </div>
                    <div className="culture-item" data-aos='flip-up'>
                        <div className="culture-item-title">{cultureData[3].title}</div>
                        <div className="culture-item-content">{cultureData[3].content}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}