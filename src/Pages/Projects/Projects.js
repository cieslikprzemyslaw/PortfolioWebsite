import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { useState } from 'react';

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

    const [index, setIndex] = useState(0);
    let time = 3000;

    const changeCards = () => {
        if (index === projectsArray.length-1) {
            setIndex(0);
        }else{
            setIndex(index => index + 1);
        }    
    };

    const changeDots = () => {

    }

    useEffect(() => {
        const interval = setInterval(changeCards, time)
        return () => clearInterval(interval)
    })

    return (
        <section className="projects">
            <h3 className="projects__title">My Projects</h3>
            <ProjectCard
                id={projectsArray[index].id}
                name={projectsArray[index].name}
                description={projectsArray[index].description}
                githubUrl={projectsArray[index].githubUrl}
                webUrl={projectsArray[index].webUrl}
                imgUrl={projectsArray[index].imgUrl} />
                {projectsArray.map(dot => {
                    return(
                        <span className="projects__dot"></span>
                    )
                })}
        </section>
    );
};

export default Projects;