function Board({ characters, handleClick }) {
    return (
        <>
            <ul className="board">
                {characters.map((char) => {
                    return (
                        <li onClick={() => handleClick(char.id)} key={char.id}>
                            <img className="char-img" style={{ width: 100, height: 100 }} src={char.image} alt={char.name} />
                            <p className="char-name">Name: {char.name}</p>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Board;