export default function Footer() {
  return (
    <footer className="text-center py-4">
      <hr />
      <div className="d-flex justify-content-center gap-4">
        <a
          href="https://github.com/klchambers"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github fa-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/kieranchamberskc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin fa-2x"></i>
        </a>
      </div>
    </footer>
  );
}