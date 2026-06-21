function WinnerModal({ handleReset, score }) {
    return (
        <>
            <div className="overlay">
                <div className="winner-modal">
                    <p className="h-assoc">Hunter Association &bull; Result</p>
                    <p>Every candidate recalled without error</p>
                    <p>You may proceed to the next exam</p>
                    <div className="score-wrapper">
                        <p className="final-text">Final Record</p>
                        <p>{score}</p>
                    </div>
                    <button onClick={handleReset}>Retake the trial</button>
                </div>
            </div>
        </>
    )
}

export default WinnerModal;