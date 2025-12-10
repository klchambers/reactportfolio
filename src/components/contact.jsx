export default function Contact() {
    return(
        <div className="row justify-content-center text-center mt-3" id="contact">
            <div className="col-md-8 col-lg-6">
                <p className="display-6">Send me a message! <span className="speech-bubble">&#128172;</span></p>
                <form
                    action={import.meta.env.VITE_FORMSPREE_URL}
                    method="POST"
                    className="form-container contact-form d-flex flex-column align-items-center"
                >
                    <div className="w-100 d-flex align-items-start mb-3">
                        <label htmlFor="email" className="form-label">Your email:</label>
                        <input id="email" className="form-control" type="email" name="email" required />
                    </div>

                    <div className="w-100 d-flex align-items-start mb-3">
                        <label htmlFor="message" className="form-label">Your message:</label>
                        <textarea id="message" className="form-control" name="message" rows={5} required />
                    </div>

                    <button id="submit-button" className="btn btn-primary mt-2" type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}