export default function About() {
  const skills = {
    frontend: ['HTML/CSS', 'JavaScript', 'React', 'Bootstrap/Tailwind'],
    backend: ['Python', 'Django', 'PostgreSQL', 'REST APIs'],
  };

  return (
    <section className="container my-5" id="about">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h2 className="mb-4">About Me</h2>
          <p className="lead mb-5">
            Full Stack Developer building modern web applications with a focus on clean code and user experience.
          </p>

          {/* Skills cards */}
          <div className="row g-4 mb-5">
            <div className="col-md-6">
              <div className="p-4 shadow-sm h-100">
                <h5 className="mb-3">Frontend</h5>
                <div className="d-flex flex-wrap justify-content-center gap-2">
                  {skills.frontend.map(skill => (
                    <span key={skill} className="badge bg-primary px-3 py-2">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-4 shadow-sm h-100">
                <h5 className="mb-3">Backend</h5>
                <div className="d-flex flex-wrap justify-content-center gap-2">
                  {skills.backend.map(skill => (
                    <span key={skill} className="badge bg-success px-3 py-2">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="mb-5">
            I build full-stack applications using modern technologies and best practices. 
            Currently exploring advanced React patterns, cloud deployment, and building scalable web solutions.
          </p>

          {/* Call-to-action buttons */}
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a
              href="https://www.linkedin.com/in/kieranchamberskc/"
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="#contact" className="btn btn-outline-secondary btn-lg">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
