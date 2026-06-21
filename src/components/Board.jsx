function Board({ characters, handleClick }) {
    return (
        <>
            <ul className="board">
                {characters.map((char) => {
                    return (
                        <li className="char-card" onClick={() => handleClick(char.id)} key={char.id}>
                            <div className="img-wrapper">
                                <img className="char-img" src={char.image} alt={char.name} />
                            </div>
                            <p className="char-name">{char.name}</p>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Board;