import { use, useEffect, useState } from "react";
import logo from "../utils/assets/logo.png";

import blush from "../utils/assets/blush.png";
import heartEyes from "../utils/assets/heart_eyes.png";
import neutralFace from "../utils/assets/neutral_face.png";
import unamused from "../utils/assets/unamused.png";
import CounterModal from "../modal/counterModal";

import "./pst.css";
import { useNavigate } from "react-router-dom";

function Pst() {
	const [value, setValue] = useState(0.0);
	const [optionSelected, setOptionSelected] = useState(null);
	const [open, setOpen] = useState(false);
	const [newValue, setNewValue] = useState(0.0);
	const [counter, setCounter] = useState(0);
	const navigate = useNavigate();

	const [texts] = useState([
		"Como você avalia sua experiência geral no TikTok?",
		"Qual é o seu formato devídeo favorito no TikTok?",
		"Como você descobre novos vídeos no TikTok?",
		"Quantas horas por dia você passa no TikTok?",
		"O que te faz seguir um criador no TikTok?",
	]);
	const [assessments] = useState([

		[
			{ emoji: "😍", text: "Excelente" },
			{ emoji: "😄", text: "Boa" },
			{ emoji: "😐", text: "Regular" },
			{ emoji: "😫", text: "Ruim" },
		],
		[
			{ emoji: "🎥", text: "Vídeos curtos" },
			{ emoji: "🎬", text: "Vídeos longos" },
			{ emoji: "📺", text: "Lives" },
			{ emoji: "🎧", text: "Áudios" },
		],
		[
			{ emoji: "🔍", text: "Explorar" },
			{ emoji: "🏠", text: "Página Inicial" },
			{ emoji: "🔔", text: "Notificações" },
			{ emoji: "👥", text: "Seguindo" },
		],
		[
			{ emoji: "🕛", text: "Menos de 1 hora" },
			{ emoji: "🕐", text: "1 a 2 horas" },
			{ emoji: "🕑", text: "2 a 3 horas" },
			{ emoji: "🕒", text: "Mais de 3 horas" },
		],
		[
			{ emoji: "👍", text: "Conteúdo" },
			{ emoji: "👥", text: "Seguidores" },
			{ emoji: "📈", text: "Popularidade" },
			{ emoji: "💬", text: "Comentários" },
		]
	]
	);

	const openModal = () => {
		let check = document.querySelector(".option-selected");
		let numberRandomic = Math.random() * 50;
		if (check) {
			setNewValue(numberRandomic);
			setValue(value + numberRandomic);

			document.querySelector(".mensagem-erro").innerHTML = "";
			setOpen(true);
			setCounter(counter + 1);
		} else {
			document.querySelector(".mensagem-erro").innerHTML =
				"Selecione uma opção para continuar";
		}
	};

	const handleClick = () => {
		navigate("/rewards", {state: {saldo: value.toFixed(2)}});
	}

	useEffect(() => {
		if (counter == 5) {
			navigate("/rewards", {state: {saldo: value.toFixed(2)}});
		}
	}, [counter])

	useEffect(() => {
		if (!open) {
			setOptionSelected(null);
		}
	}, [open])

	return (
		<>
		<header className="header">
			<div className="container-logo-pst">
				<p>
					<img src={logo} alt="tiktok" className="logo-image" />
				</p>
				<div className="double-itens">
					<span className="value">R${Number(value).toFixed(2)}</span>
					<button className="sake" onClick={handleClick}>SACAR</button>
				</div>
			</div>
		</header>

		<span className="bar">
			<span 
				className="progress"
				style={{width: counter * 20 + '%'}}	
			></span>
		</span>

		<main className="pst">
			<h2 className="title">{texts[counter]}</h2>

			<p className="legend">Selecione uma opção para continuar:</p>

			<div className="options">
			{counter < 5 ? assessments[counter].map((it, idx) => (
				<button
					className={
						optionSelected === idx ? "option-selected option" : "option"
					}
					key={idx}
					value={idx}
					onClick={() => setOptionSelected(idx)}
				>
				<div className="double-itens">
					<span className="emoji">{it.emoji}</span>
					<p className="option-text">{it.text}</p>
				</div>
				<input
					type="checkbox"
					className="option-check"
					checked={optionSelected === idx}
					readOnly
				/>
				</button>
			)): null }
			</div>

			<button className="continue" onClick={() => openModal()}>
				Continuar
			</button>
			<p className="mensagem-erro"></p>
			<p className="emotion-text">Concorra a um bônus adicional</p>
		</main>

		<CounterModal open={open} setOpen={setOpen} maxValue={newValue} />

		<footer>
			<p className="conditions">
				Ao participar das atividades de recompensa, você concorda com nossos{" "}
				<a
					href="https://www.tiktok.com/legal/page/row/terms-of-service/pt-BR"
					target="_blank"
				>
					Termos e Codições
				</a>
				.
			</p>

			<p className="firula">
				Os valores deste programa são simbólicos e convertidos para materiais
				em curso que custam o valor que ganhou.
			</p>
		</footer>
		</>
	);
}

export default Pst;
