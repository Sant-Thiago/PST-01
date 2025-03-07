import { useState } from "react";
import logo from "../utils/assets/logo.png";

import blush from "../utils/assets/blush.png";
import heartEyes from "../utils/assets/heart_eyes.png";
import neutralFace from "../utils/assets/neutral_face.png";
import unamused from "../utils/assets/unamused.png";
import CounterModal from "../modal/counterModal";

import "./pst.css"

function Pst() {
    const [value, setValue] = useState(0.0);
    const [optionSelected, setOptionSelected] = useState(null);
    const [open, setOpen] = useState(false);
    const [newValue, setNewValue] = useState(0.0);

    const [ texts ] = useState(["Como você avalia sua experiência geral no TikTok?"]);
    const [ assessments ] = useState([
        { emoji: heartEyes, text: "Excelente" },
        { emoji: blush, text: "Boa" },
        { emoji: neutralFace, text: "Regular" },
        { emoji: unamused, text: "Ruim" }
    ]);

    const handleClickOption = (index,) => {
        setOptionSelected(index)
    }
    
    const openModal = () => {
        let check = document.querySelector(".option-selected")
        if(check){
            setNewValue(Math.random() * 100)
            setValue(value + newValue)
            document.querySelector(".mensagem-erro").innerHTML = ""
            setOpen(true)
        }else{
            document.querySelector(".mensagem-erro").innerHTML = "Selecione uma opção para continuar"
        }

    }

  return (
    <>
        <header>
            <p>
                <img src={logo} alt="tiktok" className="logo-image"/>
            </p>
            <div className="double-itens">
                <span className="value">R${Number(value).toFixed(2)}</span>
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
                            className={optionSelected === idx ? "option-selected option" : "option"} 
                            key={idx}
                            value={idx}
                            onClick={() => handleClickOption(idx)}
                        >
                            <div className="double-itens">
                                <img 
                                    src={it.emoji} 
                                    alt={it.text}
                                    className="emoji"
                                />
                                <p className="option-text">{it.text}</p>
                            </div>
                            <input type="checkbox" className="option-check" checked={optionSelected === idx} readOnly/>
                        </button>
                    ))
                }
            </div>

            <button className="continue" onClick={() => openModal()}>Continuar</button>
            <p className="mensagem-erro"></p>
            <p className="emotion-text">Concorra a um bônus adicional</p>
        </main>

        <CounterModal open={open} setOpen={setOpen} maxValue={newValue}/>

        <footer>
            <p className="conditions">Ao participar das atividades de recompensa, você concorda com nossos <a href="https://www.tiktok.com/legal/page/row/terms-of-service/pt-BR" target="_blank">Termos e Codições</a>.</p>
            
            <p className="firula">Os valores deste programa são simbólicos e convertidos para materiais em curso que custam o valor que ganhou.</p>
        </footer>
    </>
    );
}

export default Pst;
