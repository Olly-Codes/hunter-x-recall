function WinnerModal({ handleReset }) {
    return (
        <>
            <div className="winner-modal">
                <h2>You win!</h2>
                <div className="winner-img"></div>
                <button onClick={handleReset}>Play Again</button>
            </div>
        </>
    )
}

export default WinnerModal;