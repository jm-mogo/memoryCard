import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { motion } from "framer-motion";
import Card from "./Card.jsx";
import shuffleArray from "./shuffleArray.jsx";

function App() {
    const [results, setResults] = useState([]);
    const [score, setScore] = useState([]);
    const [bestScore, setBestScore] = useState(0);

    if (score.length > bestScore) {
        setBestScore(score.length);
    }

    if (score.length == 20) {
        alert("Ganaste 🎉🎉🎉!!");
        setScore([]);
    }

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character").then((r) => {
            setResults(r.data.results);
        });
    }, []);

    shuffleArray(results);

    return (
        <>
            <h1>Puntos: {score.length}</h1>
            <h2>Mejor puntaje: {bestScore}</h2>
            <div className="cards">
                {results.sort().map((r) => (
                    <Card
                        key={r.id}
                        id={r.id}
                        name={r.name}
                        url={r.image}
                        score={score}
                        setScore={setScore}
                    />
                ))}
            </div>
        </>
    );
}

export default App;
