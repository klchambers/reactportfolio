export default function Hero() {
    return(
        <div className="row justify-content-center text-center">
        <div className="col-md-6">

            <img id="profile-photo" src="/images/me.jpeg" alt="A photo of me"
                style={{paddingBottom: '25px'}} />
                            <p className="display-3">Hello!👋</p>
            <p className="display-6">I'm <strong>Kieran</strong></p>
        </div>
        </div>
    )
}