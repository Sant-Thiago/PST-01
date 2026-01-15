import { ChevronLeft } from "lucide-react";
import money from "../../utils/assets/image-removebg-preview.png";
import cards from "../../utils/assets/cartoes.svg";
import pix from "../../utils/assets/pix-image.png";
import "./rewards.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Rewards() {

    const {saldo} = useLocation().state || { saldo: 0 };

    const [optionSelected, setOptionSelected] = useState(0);
    const [payOptions] = useState([ 1.5, 5, 10, saldo ]);
    const [keyPix, setKeyPix] = useState(null);
    const [keyType, setKeyType] = useState(null);

    const navigate = useNavigate();

    const handleFinishSake = () => {
        if (keyType == null) {
            alert("SELECIONE UMA TIPO DE CHAVE");
            return; 
        }
        if (keyPix == null || keyPix.trim().length == 0) {
            alert("PREENCHA O CAMPO CHAVE PIX");
            return;
        }

        navigate("/processing");
    }

    return (
        <>
            <header className="header">
                <ChevronLeft className="back-arrow"/> 
                <h2>Resgatar Recompensas</h2>
            </header>
            <main className="rewards">

            <div className="container-saldo-master">
                <div className="container-saldo">
                    <div className="saldo">
                        <p>Seu saldo</p>
                        <h2>R$ {saldo}</h2>
                    </div>
                    <img src={money} alt="money-image" />
                </div>

                <div className="container-last-rewards">
                    <p>Últimas recompensas: R$54.87</p>
                </div>

            </div>

            <div className="container-saldo-sake">

                <div className="container-sake">
                    <h3>Sacar dinheiro</h3>
                    <p>
                        <img src={cards} alt="cartões" className="cartoes" />
                        Transferência bancária / 
                        <img src={pix} alt="pix" className="pix"/>
                        </p>
                </div>

                <div className="pay-options">

                    {payOptions.map((it, idx) => (
                        <button
                            onClick={() => {setOptionSelected(idx)}}
                            className={optionSelected === idx ? "option-selected pay-option" : "pay-option"}
                        >
                            R$ {it}
                        </button>
                    ))}
                </div>

                <div className="container-pix">
                    <label htmlFor="name" className="label">Nome</label>
                    <input type="text" id="name" placeholder="Seu nome" />
                    <label htmlFor="type" className="label">Tipo de Chave PIX</label>
                    <select 
                        value={keyType} 
                        onChange={(e) => setKeyType(e.currentTarget.value)}
                        id="type"
                    >
                        <option value="" hidden>Selecione o tipo de chave: </option>
                        <option value="cpf">CPF</option>
                        <option value="email">E-mail</option>
                        <option value="phone">Telefone</option>
                        <option value="random-key">Chave Aleatória</option>
                    </select>

                    <label htmlFor="chave" className="label">Chave PIX</label>
                    <input type="text" id="chave" value={keyPix} onChange={(e) => {setKeyPix(e.currentTarget.value)}} placeholder="Digite a sua chave PIX" />
                
                    <button 
                        onClick={() => { handleFinishSake() }}
                    >
                        Realizar Saque
                    </button>
                </div>
            </div>

            </main>
        </>
    )
}

export default Rewards;