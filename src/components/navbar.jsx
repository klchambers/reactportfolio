export default function Navbar() {
    return(
    <nav className="navbar navbar-expand-md navbar-dark fixed-top">
        <div className="container-fluid">
            <div>
                <h1 className="text-light display-5">Kieran Chambers</h1>
                <p className="text-light">Full Stack Developer</p>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-md-0 justify-content-center text-center">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#top">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" className="nav-link">My Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">Contact Me</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}