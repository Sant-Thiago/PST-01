
import money from "../../utils/assets/image-removebg-preview.png";
import cards from "../../utils/assets/cartoes.svg";
import pix from "../../utils/assets/pix-image.png";
import "./rewards.css";
import { useState } from "react";

function Rewards({ total = 0 }) {

    const [optionSelected, setOptionSelected] = useState(0);
    const [payOptions] = useState([ 1.5, 5, 10, total ]);

    return (
        <>
            <header>
                &lt; Resgatar recompensas ?
            </header>
            <main>

                <div className="container-saldo">
                    <div className="saldo">
                        <p>Seu saldo</p>
                        <h2>R$ 0</h2>
                    </div>
                    <img src={money} alt="money-image" />
                </div>
                <div className="container-last-rewards">
                    <p>Últimas recompensas: R$54.87</p>
                </div>

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
                            R$ {it.toFixed(2)}
                        </button>
                    ))}
                </div>

                <div className="container-pix">
                    <select defaultValue={0}>
                        <option value={0} hidden>Selecione o tipo de chave: </option>
                        <option value={"cpf"}>CPF</option>
                        <option value={"email"}>E-mail</option>
                        <option value={"phone"}>Telefone</option>
                        <option value={"random-key"}>Chave Aleatória</option>
                    </select>

                    <input type="text" id="iptKey" placeholder="Digite a sua chave PIX" />
                
                    <button 
                        onClick={() => { alert('Funcionou') }}
                    >
                        Realizar Saque
                    </button>
                </div>
            </main>
        </>
    )
}

export default Rewards;