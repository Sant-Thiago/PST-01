import { useEffect, useState } from "react";
import logo from "../../utils/assets/logo.png";
import "./Index.css";
import { useNavigate } from "react-router-dom";

export default function Processing() {
    
    const [progress, setProgress] = useState(0);
    const [text, setText] = useState("Validando dados...");
    const navigate = useNavigate();

    useEffect(() => {
        if (progress >= 100) {
            navigate("/confirmation");
        }

        const timeout = setTimeout(() => {
            setProgress((prev) => {
                const increment = Math.floor(Math.random() * 35) + 5; // 5% a 15%
                const next = Math.min(prev + increment, 100);

                if (next >= 50) {
                    setText("Concluindo resgate...");
                }
                if (next >= 85) {
                    setText("Quase pronto...");
                }

                return next;
            });
        }, Math.random() * 800 + 400); // 400ms a 1200ms

        return () => clearTimeout(timeout);
    }, [progress]);


    return (
        <>
            <header className="processing">
                <img src={logo} alt="tiktok" className="logo" />
            </header>

            <main className="processing">

                <div className="container-processing">
                    <p className="valid">{text}</p>

                    <span className="bar">
                        <span 
                            className="progress"
                            style={{ width: `${progress}%`}}    
                        ></span>
                    </span>
        
                </div>
            </main>
        </>
    )
}