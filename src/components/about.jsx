export default function About() {
    const skills = {
        frontend: ['HTML/CSS', 'JavaScript', 'React', 'Bootstrap/Tailwind'],
        backend: ['Python', 'Django', 'PostgreSQL', 'REST APIs']
    };

    return(
        <div className="container mt-5" id="about">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <h2 className="text-center mb-4">About Me</h2>
                    
                    <p className="lead text-center mb-4">
                        Full Stack Developer building modern web applications
                    </p>

                    <div className="row mb-4">
                        <div className="col-md-6">
                            <h5>Frontend</h5>
                            <ul className="list">
                                {skills.frontend.map(skill => (
                                    <li key={skill}>• {skill}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <h5>Backend</h5>
                            <ul className="list">
                                {skills.backend.map(skill => (
                                    <li key={skill}>• {skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <p className="mb-4">
                        I build full-stack applications with a focus on clean code and user experience. 
                        Currently exploring modern React patterns and expanding my skills in cloud deployment.
                    </p>

                    <div className="d-flex gap-3 justify-content-center">
                        <a href="https://www.linkedin.com/in/kieranchamberskc/" 
                           className="btn btn-primary"
                           target="_blank" 
                           rel="noreferrer">
                            LinkedIn
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}