import { useState } from "react";
import logo from "../utils/assets/logo.png";

import blush from "../utils/assets/blush.png";
import heartEyes from "../utils/assets/heart_eyes.png";
import neutralFace from "../utils/assets/neutral_face.png";
import unamused from "../utils/assets/unamused.png";


import "./pst.css"

function Pst() {
    const [value, setValue] = useState(0);
    const [selectedCheckbox, setSelectedCheckbox] = useState(null);

    const [ texts ] = useState(["Como você avalia sua experiência geral no TikTok?"]);
    const [ assessments ] = useState([
        { emoji: heartEyes, text: "Excelente" },
        { emoji: blush, text: "Boa" },
        { emoji: neutralFace, text: "Regular" },
        { emoji: unamused, text: "Ruim" }
    ]);

    const handleChangeCheckbox = (index) => {
        setSelectedCheckbox(index)
    }

  return (
    <>
        <header>
            <p>
                <img src={logo} alt="tiktok" className="logo-image"/>
            </p>
            <div className="double-itens">
                <span className="value">R${value}</span>
                <button className="sake">SACAR</button>
            </div>
        </header>

        <span className="bar"></span>

        <main>
            <h2 className="title">
                {texts[0]}
            </h2>
            
            <p className="legend">Selecione uma opção para continuar:</p>
            
            <div className="options">
                {
                    assessments.map((it, idx) => (
                        <button 
                            className="option" 
                            key={idx}
                            value={idx}
                            onClick={() => handleChangeCheckbox(idx)}
                        >
                            <div className="double-itens">
                                <img 
                                    src={it.emoji} 
                                    alt={it.text}
                                    className="emoji"
                                />
                                <p className="option-text">{it.text}</p>
                            </div>
                            <input type="checkbox" className="option-check" checked={selectedCheckbox === idx} readOnly/>
                        </button>
                    ))
                }
            </div>
        </main>
    </>
    );
}

export default Pst;
