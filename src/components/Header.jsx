import imgUrl from "../assets/satotz.jpg";

function Header() {
    return (
        <>
            <div className="header">
                <div className="examiner-pfp">
                    <img src={imgUrl} alt="Satotz Examiner" />
                </div>
                <div className="exam-text">
                    <p>Hunter Association &bull; Offical Trial</p>
                    <h1>Hunter <span>x</span> Recall</h1>
                    <p>The first exam has commenced.</p>
                    <p>Memorize the candidates &bull; Do not recall a face twice</p>
                </div>
            </div>
        </>
    )
}

export default Header;