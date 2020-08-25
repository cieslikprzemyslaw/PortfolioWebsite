import React from 'react';

import ProjectCard from './ProjectCard';


const projectsArray = [
    {
        id: 0,
        name: "Pomodoro",
        description: "example description text",
        githubUrl: "https://github.com/cieslikprzemyslaw/pomodoro",
        webUrl: "",
        imgUrl: "https://reactjsexample.com/content/images/2019/07/Pomodoro-Clock.jpg",
    },
    {
        id: 1,
        name: "Pomodoro",
        description: "example description text",
        githubUrl: "https://github.com/cieslikprzemyslaw/pomodoro",
        webUrl: "",
        imgUrl: "https://miro.medium.com/max/602/1*bzvWJOvvgekT5hQhwNmTkg.png",
    },
    {
        id: 2,
        name: "Pomodoro",
        description: "example4 description text",
        githubUrl: "src/Utils/Images/pomodoro-mobile.png",
        webUrl: "",
        imgUrl: "https://miro.medium.com/max/602/1*bzvWJOvvgekT5hQhwNmTkg.png",
    },
]

const Projects = () => {

    return (
        <section className="projects">
            <h3 className="projects__title">My Projects</h3>
            <section className="projects__card">
                {projectsArray.map(project => {
                    return(
                        <ProjectCard
                    id={project.id}
                    name={project.name}
                    description={project.description}
                    githubUrl={project.githubUrl}
                    webUrl={project.webUrl}
                    imgUrl={project.imgUrl} />
                    )
                })}
            </section>
        </section>
    );
};

export default Projects;