export default function Hero() {
    return(
        <div className="row justify-content-center text-center">
        <div className="col-md-6" id="home">

            <img id="profile-photo" src="/images/me.jpeg" alt="A photo of me"
                style={{paddingBottom: '25px'}} />
                            <p className="display-3">Hello!<span className="wave">👋</span></p>
            <p className="display-6">I'm <strong>Kieran</strong></p>
            <p className="lead mb-5">
                Full Stack Developer building modern web applications with a focus on clean code and user experience.
          </p>
        </div>
        </div>
    )
}