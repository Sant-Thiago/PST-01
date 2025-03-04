import { useState, useEffect } from "react";
import { Modal, Box, Typography } from "@mui/material";
import "./counterModal.css";

function CounterModal({ open, setOpen }) {
  const [count, setCount] = useState(0.0);

  useEffect(() => {
    let interval;

    if (open) {
      setCount(0);
      interval = setInterval(() => {
        setCount((prev) => (prev < 100 ? prev + Math.random() * 5 : 100));
      }, 50);
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
            width: 300,
            bgcolor: "white",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" fontWeight={700} gutterBottom>
            Você ganhou
          </Typography>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            {Number(count).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Typography>
          <Typography variant="h8" gutterBottom>
            Responda mais pesquisas para ganhar até <b>R$850</b>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default CounterModal;
