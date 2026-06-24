import gonImg from "../assets/gon.gif"
import killuaImg from "../assets/killua.gif";

function Loading() {
    return (
        <>
            <div className="loading-wrapper">
                <p>Loading...</p>
                <div className="loading-img-wrapper">
                    <img src={killuaImg} alt="Killua" />
                    <img src={gonImg} alt="Gon" />
                </div>
            </div>
        </>
    )
}

export default Loading;