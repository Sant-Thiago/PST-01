import { useState } from "react";
import logo from "../utils/assets/logo.png";

import "./pst.css"

function Pst() {
    const [value, setValue] = useState(0);

    const [ texts ] = useState(["Como você avalia sua experiência geral no TikTok?"]);
    const [ assessments ] = useState([
        { emoji: '😍', text: "Excelente" },
        { emoji: '😊', text: "Boa" },
        { emoji: '😐', text: "Regular" },
        { emoji: '😒', text: "Ruim" }
    ]);

  return (
    <>
        <header>
            <p>
                <img src={logo} alt="tiktok" className="logo-image"/>
            </p>
            <div className="double-itens">
                <span className="value">R${value}</span>
                <button>SACAR</button>
            </div>
        </header>

        <main>
            <span className="bar"></span>

            <h2>
                {texts[0]}
            </h2>
            
            <span>Selecione uma opção para continuar:</span>
            
            <div className="options">
                {
                    assessments.map(it => (
                        <button>
                            <div>
                                <span>
                                    {it.emoji}
                                </span>
                                <p>{it.text}</p>
                            </div>
                        </button>
                    ))
                }
            </div>
        </main>
    </>
    );
}

export default Pst;
