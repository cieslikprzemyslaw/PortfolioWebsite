import React from 'react';

const ProjectCard = ({ id, name, description, githubUrl, webUrl, imgUrl }) => {
    return (
        <section className="project-card" key={id}>
           
                <h3 className="project-card__name">{name}</h3>
                <p className="project-card__description">{description}</p>
                <img className="project-card__image" src={imgUrl} alt={name} />
            <section className="project-card__sources">
                <a href={githubUrl} className="project-card__link project-card__link--gh">github code</a>
                <a href={webUrl} className="project-card__link project-card__link--web">website</a>
            </section>
        </section>
    );
};

export default ProjectCard;