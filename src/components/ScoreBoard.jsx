function ScoreBoard({ score, bestScore }) {
    return (
        <>
            <div className="score-board">
                <p className="score">Score: {score}</p>
                <p className="best-score">Best Score: {bestScore > 0 ? bestScore : score}</p>
            </div>
        </>
    )
}

export default ScoreBoard;