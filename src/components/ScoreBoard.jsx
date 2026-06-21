import WinnerModal from "./WinnerModal";

function ScoreBoard({ score, bestScore, handleReset, isWinner }) {
    return (
        <>
            <div className="score-board">
                <p className="score stat">Candidates Recalled <span className="actual-stat">{score}</span></p>
                <p className="best-score stat">Personal Best <span className="actual-stat">{bestScore > 0 ? bestScore : score}</span></p>
                {isWinner && <WinnerModal score={score} handleReset={handleReset} />}
            </div>
        </>
    )
}

export default ScoreBoard;