import ProjectCard, { ProjectData } from "./projectCards";

export default function Projects() {
    return(
    <div className="row justify-content-center text-center mt-3" id="projects">
            <div className="col">
                <p className="display-6">Take a look at what I've made &#x1F50E;</p>
                <div className="row">
                    <div className="row">
                        <div className="col">
                            {ProjectData.map((p, i) => ( <ProjectCard key={i} project={p} />))}
                        </div>
                    </div>
            </div>
        </div>
    </div>
    );
}