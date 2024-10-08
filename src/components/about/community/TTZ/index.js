import React from "react";
import './styles.ttz.css';

import Img_1 from '../../../../assets/img/ttz-1.png'
import Img_2 from '../../../../assets/img/ttz-2.png'
import Img_3 from '../../../../assets/img/ttz-3.png'

const ttzData = {
    title: ["Accelerating Enerbond's", "Transition to Zero"],
    sub: "Building a battery that can last over 20 years more than triples the current standard in batteries. Longer lifespan means Much lower waste. Our batteries are 100% recyclable whereas other batteries are not. ",
    cards: [
        { content: 'Net Zero refers to balancing the amount of emitted greenhouse gases with the equivalent amount sequestered or offset. Enerbond is committed to achieving net zero emissions by enhancing our renewable energy capacities and improving energy efficiency across all operations.', img: Img_1 },
        { content: 'Net Zero refers to balancing the amount of emitted greenhouse gases with the equivalent amount sequestered or offset. Enerbond is committed to achieving net zero emissions by enhancing our renewable energy capacities and improving energy efficiency across all operations.', img: Img_2 },
        { content: 'Net Zero refers to balancing the amount of emitted greenhouse gases with the equivalent amount sequestered or offset. Enerbond is committed to achieving net zero emissions by enhancing our renewable energy capacities and improving energy efficiency across all operations.', img: Img_3 }
    ]
}


export default function TTZ() {
    return (
        <div className="ttz">
            <div className="ttz-title" data-aos='fade-down'>
                <div className="ttz-title-x">{ttzData.title[0]}</div>
                <div className="ttz-title-y">{ttzData.title[1]}</div>
            </div>
            <div className="ttz-sub" data-aos='fade-down'>{ttzData.sub}</div>
            <div className="ttz-cards">
                {
                    ttzData.cards.map((item) => (
                        <div className="ttz-card-item" data-aos='flip-up'>
                            <img src={item.img} alt="img" />
                            <div className="ttz-item-content">{item.content}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}