import { useState, useEffect } from "react";
import { Modal, Box, Typography } from "@mui/material";
import "./counterModal.css";

function CounterModal({ open, setOpen, maxValue }) {
	const [count, setCount] = useState(0.0);

	useEffect(() => {
		let interval;

		if (open) {
			setCount(0);
			interval = setInterval(() => {
				setCount((prev) =>
					prev < maxValue ? prev + Math.random() * 5 : maxValue
				);
			}, 25);
		}

		return () => clearInterval(interval);
	}, [open]);

	return (
		<>
			<Modal open={open} onClose={() => setOpen(false)}>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: 400,
						bgcolor: "white",
						boxShadow: 24,
						paddingTop: 0,
						paddingBottom: 4,
						borderRadius: 2,
						textAlign: "center",
					}}
				>
					<div className="title-modal">Nova recompensa</div>
					<br />
					<Typography variant="h6" fontWeight={700} gutterBottom>
						Você ganhou
					</Typography>
					<Typography variant="h2" fontWeight={700} gutterBottom>
						<span className="real">R$</span>{Number(count).toFixed(2)}
					</Typography>
					<Typography variant="h8" gutterBottom>
						Responda mais pesquisas para ganhar até <b>R$850</b>
					</Typography>
					<br />
					<br />
					<button className="next-button" onClick={() => setOpen(false)}>
						<p>Continuar recebendo</p>
					</button>
				</Box>
			</Modal>
		</>
	);
}

export default CounterModal;
