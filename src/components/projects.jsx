export default function Projects() {
    return(
    <div className="row justify-content-center text-center mt-3" id="projects">
            <div className="col">
                <p className="display-6">Take a look at what I've made &#x1F50E;</p>
                <div className="row">
                    <div className="col">
                        <div className="card bg-dark portfolio-card">
                            <div className="card-content d-lg-flex">
                                <img className="card-img-top portfolio-image"
                                    src='images/glouglou-screencap.png' alt="GlouGlou Screen Capture" />
                                <div className="overlay"></div>
                                <div className="card-body">
                                    <p className="h4 text-white">GlouGlou Natural Wine Store</p>
                                    <p className="h6 text-white"><em>Django, Bootstrap, Cloudinary, Heroku</em></p>
                                    <a href="https://github.com/klchambers/pp5ecommerce" style={{fontSize: 'larger'}}
                                        target="_blank" rel="noopener noreferrer">GitHub Repository</a><br />
                                    <a href="https://pp5ecommerce-a72d5065ca06.herokuapp.com/"
                                        style={{fontSize: 'larger'}} target="_blank" rel="noopener noreferrer">Live Site</a>
                                    <hr />
                                    <div>
                                        <p>A mobile-first e-commerce platform for an online wine retailer focusing
                                            on biodynamic and minimal intervention wines. Prioritising a seamless user
                                            experience on mobile devices, the website's responsive design ensures
                                            optimal
                                            display and functionality across various screen sizes and orientations.
                                        </p>
                                        <p>To foster customer engagement the site integrates with Mailchimp,
                                            enabling efficient newsletter signup to targeted email marketing.
                                            Secure and convenient payment processing is facilitated through the Stripe
                                            API,
                                            safeguarding sensitive customer data and streamlining transactions.
                                        </p>
                                        <p>
                                            User account registration, authentication, and management is handled through
                                            the
                                            use of
                                            AllAuth which provides a robust and secure framework. Authenticated users
                                            gain
                                            access to exclusive features such as submission of questions to
                                            the admins and saved payment information.
                                        </p>
                                        <p>In addition to core e-commerce functionalities, the site also features a
                                            blog,
                                            offering valuable content on natural wine news, informative articles, and
                                            industry trends. An FAQ section with published answers from site
                                            administrators
                                            addresses common customer queries, enhancing transparency and encouraging
                                            self-service
                                            support. The user can submit a question, and will receive an email when site
                                            administrators have answered it and published their answer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-dark portfolio-card">
                            <div className="card-content d-lg-flex flex-row-reverse">
                                <img className="card-img-top portfolio-image"
                                    src='images/recipeme-screencap.png' alt="RecipeMe Screen Capture"
                                    style={{justifySelf: 'flex-end'}} />
                                <div className="overlay"></div>
                                <div className="card-body">
                                    <p className="h4 text-white">RecipeMe: Recipe Sharing App</p>
                                    <p className="h6 text-white"><em>Django, Bootstrap, Cloudinary, Heroku</em></p>
                                    <a href="https://github.com/klchambers/pp4" style={{fontSize: 'larger'}}
                                        target="_blank" rel="noopener noreferrer">GitHub Repository</a><br />
                                    <a href="https://pp4assignment-81282f23e92d.herokuapp.com/"
                                        style={{fontSize: 'larger'}} target="_blank" rel="noopener noreferrer">Live Site</a>
                                    <hr />
                                    <div>
                                        <p>RecipeMe is a social recipe platform that allows users to share and discover
                                            recipes.
                                            User authentication, registration, and management is achieved using Django
                                            AllAuth.
                                        </p>
                                        <p>Once registered and logged in, users can submit recipes, which must be
                                            approved by an administrator to prevent spam and maintain content quality.
                                            Each
                                            recipe includes ingredients, cooking time, and an image.
                                        </p>
                                        <p>Authenticated users can also
                                            post comments on recipes to share their thoughts and feedback to the poster
                                            and others, these comments also require admin approval before they are
                                            published.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-dark portfolio-card">
                            <div className="card-content d-lg-flex">
                                <img className="card-img-top portfolio-image"
                                    src='images/todolist-screencap.png' alt="To Do List Screen Capture" />
                                <div className="overlay"></div>
                                <div className="card-body">
                                    <p className="h4 text-white">To Do List</p>
                                    <p className="h6 text-white"><em>Python, Google Sheets API</em></p>
                                    <a href="https://github.com/klchambers/todo-list" style={{fontSize: 'larger'}}
                                        target="_blank" rel="noopener noreferrer">GitHub Repository</a><br />
                                    <a href="https://pp3todoapp-ab2e466bceb0.herokuapp.com/" style={{fontSize: 'larger'}} 
                                        target="_blank" rel="noopener noreferrer">Live Site</a>
                                    <hr />
                                    <div>
                                        <p>This Python Command Line Interface application allows users to manage
                                            their to-do list by adding tasks and marking them as complete.
                                            The application uses the Google Sheets API and two worksheets ("ToDo" and
                                            "Completed") to store and track tasks.</p>
                                        <p>While the application is designed to
                                            be run in the Terminal, it is also hosted on Heroku for demonstration
                                            purposes, with some changes to data exporting functionality. Locally, the
                                            application saves user data in CSV format to the user's Downloads folder. In
                                            the Heroku-deployed version, a new Spreadsheet is created and the link is
                                            shared with the user, who can then download/export their data via Google
                                            Docs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-dark portfolio-card">
                            <div className="card-content d-lg-flex flex-row-reverse">
                                <img className="card-img-top portfolio-image"
                                    src='images/quizzit-screencap.png' alt="Card image cap"
                                    style={{justifySelf: 'flex-end'}} />
                                <div className="overlay"></div>
                                <div className="card-body">
                                    <p className="h4 text-white">Quizzit</p>
                                    <p className="h6 text-white"><em>JavaScript, HTML, CSS</em></p>
                                    <a href="https://github.com/klchambers/quiz-app" style={{fontSize: 'larger'}}
                                        target="_blank" rel="noopener noreferrer">GitHub Repository</a><br />
                                    <a href="https://klchambers.github.io/quiz-app/" style={{fontSize: 'larger'}}
                                        target="_blank" rel="noopener noreferrer">Live Site</a>
                                    <hr />
                                    <div>
                                        <p>Quizzit is a mobile-first web application that allows users to test their
                                            knowledge by answering general knowledge and trivia questions.</p>
                                        <p>The app consists of a single HTML document with content displayed or hidden
                                            depending on the stage of the quiz. The user is initially shown an
                                            introduction section where they are asked to input their username and select
                                            the 'Start quizzing' button to begin.</p>
                                        <p>Users are given 10 questions to answer. After selecting an answer, their
                                            choice is displayed in green or red to indicate whether the answer is
                                            correct or incorrect. The user's score increases by one point for each
                                            correct answer. After completing all 10 questions, the user is shown their
                                            final score and given the option to play again.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-dark portfolio-card">
                            <div className="card-content d-lg-flex">
                                <img className="card-img-top portfolio-image"
                                    src='images/vinvivant-screencap.png' alt="Card image cap" />
                                <div className="overlay"></div>
                                <div className="card-body">
                                    <p className="h4 text-white">VinVivant Blog</p>
                                    <p className="h6 text-white"><em>HTML, CSS, GitHub Pages</em></p>
                                    <a href="https://github.com/klchambers/VinVivant" style={{fontSize: 'larger'}}
                                        target="_blank" rel="noopener noreferrer">GitHub Repository</a><br />
                                    <a href="https://klchambers.github.io/VinVivant/" style={{fontSize: 'larger'}}
                                        target="_blank" rel="noopener noreferrer">Live Site</a>
                                    <hr />
                                    <div>
                                        <p>VinVivant is a blog about natural wine featuring natural wine reviews, with
                                            the option for the user to sign up to a newsletter to receive blog posts via
                                            email, and a contact form to enter their contact details and send a message.
                                        </p>
                                        <p>It is primarily targeted at those with an interest in wine and natural
                                            winemaking, but the informative nature of the site will make it ideal for
                                            those without prior knowledge to learn more, with the potential to add blog
                                            posts about different grape varietals, winemaking regions, terminology, and
                                            styles.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}