function onclick(id, score, setScore) {
    const newscore = [...score];
    if (newscore.includes(id)) {
        setScore([]);
        alert("Perdiste \nComenzar de nuevo");
        return;
    }
    newscore.push(id);
    setScore(newscore);
}

function Card({ id, url, score, setScore }) {
    return (
        <div
            className="card"
            onClick={() => {
                onclick(id, score, setScore);
            }}
        >
            <img className="card-img" src={url}></img>
        </div>
    );
}

export default Card;
