import React from "react";
import './styles.tq.css';

const tqData = {
    title: ["Our Commitment", "To Quality"],
    sub: "At ESC, we believe in building the Absolute Best product on the market! We strive to be the Gold Standard in Graphene based Energy Storage.",
    content: [
        {
            title: "Quality Standards",
            data: [
                { subTitle: "Product Excellence: ", subData: "Our products undergo rigorous testing and quality control measures to ensure reliability and performance that exceed industry standards." },
                { subTitle: "Certifications: ", subData: "“ESC“ is proud to hold numerous certifications from recognized global standards organizations like ETL" }
            ]
        },
        { title: "Innovation and Continuous Improvement", data: "Innovation drives our quality commitment. We continually invest in research and development to enhance our products and services, ensuring that we not only meet but exceed customer expectations." },
        { title: "Background", data: "Over 25 years in Telecommunications installing batteries of all configurations for customers all over the U.S. Over 18 years designing and manufacturing electrical products from concept to production models.  " },
        { title: "Customer-Centric Approach", data: "Our dedication to quality extends beyond our products. We are committed to providing exceptional service, ensuring that every customer interaction is informed by responsiveness, transparency, and respect." },
        { title: "Sustainability and Ethics", data: "Much ethical considerations go into all aspects of our operations, striving to make a positive impact on the environment and communities we serve." },
    ]
}

export default function TQ() {
    return (
        <div className="tq">
            <div className="tq-title" data-aos='fade-down'>
                <div className="tq-title-x">{tqData.title[0]}</div>
                <div className="tq-title-y">{tqData.title[1]}</div>
            </div>
            <div className="tq-sub" data-aos='fade-down'>{tqData.sub}</div>
            <div className="tq-items">
                <div className="tq-items-l">
                    <div className="tq-item" data-aos='flip-up'>
                        <div className="tq-item-title">{tqData.content[0].title}</div>
                        <div className="tq-item-content">
                            <div className="tq-item-sub-content">
                                <span>{tqData.content[0].data[0].subTitle}</span>
                                {tqData.content[0].data[0].subData}
                            </div>
                            <div className="tq-item-sub-content">
                                <span>{tqData.content[0].data[1].subTitle}</span>
                                {tqData.content[0].data[1].subData}
                            </div>
                        </div>
                    </div>
                    <div className="tq-item" data-aos='flip-up'>
                        <div className="tq-item-title">{tqData.content[1].title}</div>
                        <div className="tq-item-content">{tqData.content[1].data}</div>
                    </div>
                    <div className="tq-item" data-aos='flip-up'>
                        <div className="tq-item-title">{tqData.content[2].title}</div>
                        <div className="tq-item-content">{tqData.content[2].data}</div>
                    </div>
                </div>
                <div className="tq-items-r">
                    <div className="tq-item" data-aos='flip-up'>
                        <div className="tq-item-title">{tqData.content[3].title}</div>
                        <div className="tq-item-content">{tqData.content[3].data}</div>
                    </div>
                    <div className="tq-item" data-aos='flip-up'>
                        <div className="tq-item-title">{tqData.content[4].title}</div>
                        <div className="tq-item-content">{tqData.content[4].data}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}