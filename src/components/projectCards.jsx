export const ProjectData = [{
        name:'GlouGlou Natural Wine Store',
        technologiesUsed: 'Django, Bootstrap, Cloudinary, Heroku',
        image: 'images/glouglou-screencap.png',
        alt: 'GlouGlou Screen Capture',
        repo: 'https://github.com/klchambers/pp5ecommerce',
        live: 'https://pp5ecommerce-a72d5065ca06.herokuapp.com/',
        reverse: false,
        description: ['A mobile-first e-commerce platform for an online wine retailer focusing on biodynamic and minimal intervention wines.',
            'The site integrates Mailchimp for newsletter signup and uses the Stripe API for secure payments.',
            'User authentication is handled via AllAuth, providing access to features such as admin Q&A submissions and saved payment information.',
            'Also includes a blog and FAQ system with admin-published answers.']},
      { 
        name:'RecipeMe: Recipe Sharing App',
        technologiesUsed: 'Django, Bootstrap, Cloudinary, Heroku',
        image: 'images/recipeme-screencap.png',
        alt: 'RecipeMe Screen Capture',
        repo: 'https://github.com/klchambers/pp4',
        live: 'https://pp4assignment-81282f23e92d.herokuapp.com/',
        reverse: true,
        description: ['RecipeMe is a social recipe platform that allows users to share and discover recipes.',
            'User authentication, registration, and management is achieved using Django AllAuth.',
            'Once registered and logged in, users can submit recipes, which must be approved by an administrator to prevent spam and maintain content quality.',
            'Each recipe includes ingredients, cooking time, and an image.',
            'Authenticated users can also post comments on recipes to share their thoughts and feedback to the poster and others, these comments also require admin approval before they are published.']},
    { 
        name:'To Do List',
        technologiesUsed: 'Python, Google Sheets API',
        image: 'images/todolist-screencap.png',
        alt: 'To Do List Screen Capture',
        repo: 'https://github.com/klchambers/todo-list',
        live: 'https://pp3todoapp-ab2e466bceb0.herokuapp.com/',
        reverse: false,
        description: ['This Python Command Line Interface application allows users to manage their to-do list by adding tasks and marking them as complete. The application uses the Google Sheets API and two worksheets ("ToDo" and "Completed") to store and track tasks',
            "While the application is designed to be run in the Terminal, it is also hosted on Heroku for demonstration purposes, with some changes to data exporting functionality. Locally, the application saves user data in CSV format to the user's Downloads folder.",
            'In the Heroku-deployed version, a new Spreadsheet is created and the link is shared with the user, who can then download/export their data via Google Docs.']},

        
    {
        name:'Quizzit',
        technologiesUsed: 'JavaScript, HTML, CSS',
        image: 'images/quizzit-screencap.png',
        alt: 'Quizz App Screen Capture',
        repo: 'https://github.com/klchambers/quiz-app',
        live: 'https://klchambers.github.io/quiz-app/',
        reverse: true,
        description: ['Quizzit is a mobile-first web application that allows users to test their knowledge by answering general knowledge and trivia questions.',
            "The app consists of a single HTML document with content displayed or hidden depending on the stage of the quiz. The user is initially shown an introduction section where they are asked to input their username and select the 'Start quizzing' button to begin.",
            "Users are given 10 questions to answer. After selecting an answer, their choice is displayed in green or red to indicate whether the answer is correct or incorrect. The user's score increases by one point for each correct answer. After completing all 10 questions, the user is shown their final score and given the option to play again."]},

    {
        name:'VinVivant Blog',
        technologiesUsed: 'HTML, CSS, GitHub Pages',
        image: 'images/quizzit-screencap.png',
        alt: 'Quizz App Screen Capture',
        repo: 'https://github.com/klchambers/VinVivant',
        live: 'https://klchambers.github.io/VinVivant/',
        reverse: false,
        description: ['VinVivant is a blog about natural wine featuring natural wine reviews, with the option for the user to sign up to a newsletter to receive blog posts via email, and a contact form to enter their contact details and send a message.',
            "It is primarily targeted at those with an interest in wine and natural winemaking, but the informative nature of the site will make it ideal for those without prior knowledge to learn more, with the potential to add blog posts about different grape varietals, winemaking regions, terminology, and styles."]}
        ]

export default function ProjectCard({ project }) {
    const { name, technologiesUsed, image, alt, repo, live, reverse, description } = project

        return(
            <div className="card bg-dark portfolio-card">
                <div className={`card-content d-lg-flex ${project.reverse ? "flex-row-reverse" : ""}`}>
                <img
                    className="card-img-top portfolio-image"
                    src={image}
                    alt={alt}
                    />
                <div className="overlay"></div>

                <div className="card-body">
                    <p className="h4 text-white">{project.name}</p>
                    <p className="h6 text-white"><em>{project.technologiesUsed}</em></p>

                    <a href={project.repo} target="_blank" rel="noopener noreferrer">
                        GitHub Repository
                    </a><br />
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                        Live Site
                    </a>

                    <hr />
                    <div>
                        {project.description.map((p, idx) => <p key={idx}>{p}</p>)}
                    </div>
                    </div>
                </div>
            </div>
  );
}