import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
    const [results, setResults] = useState([]);
    const [clickedCards, setClikedCards] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character").then((r) => {
            setResults(r.data.results);
        });
    }, []);

    shuffleArray(results);

    return (
        <>
            <h1>Score {clickedCards.length}</h1>
            <div className="cards">
                {results.sort().map((r) => (
                    <Card
                        key={r.id}
                        id={r.id}
                        name={r.name}
                        url={r.image}
                        results={results}
                        setResults={setResults}
                        clickedCards={clickedCards}
                        setClikedCards={setClikedCards}
                    />
                ))}
            </div>
        </>
    );
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function onclick(e, clickedCards, setClikedCards, setResults, results) {
    const newClickedCards = [...clickedCards];
    if (newClickedCards.includes(e)) {
        setClikedCards([]);
        return;
    }
    newClickedCards.push(e);
    setClikedCards(newClickedCards);
    setResults(shuffleArray(results));
}

function Card({
    id,
    name,
    url,
    clickedCards,
    setClikedCards,
    setResults,
    results,
}) {
    return (
        <div
            className="card"
            onClick={(e) => {
                onclick(id, clickedCards, setClikedCards, setResults);
            }}
        >
            <img className="card-img" src={url}></img>
            {name}
        </div>
    );
}

export default App;
