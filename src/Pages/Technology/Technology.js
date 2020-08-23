import React, { useState } from 'react';

import Icon from '@mdi/react'
import { mdiLanguageHtml5, mdiLanguageCss3, mdiLanguageJavascript, mdiReact, mdiNpm, mdiGit, mdiMaterialUi } from '@mdi/js';

const technologyStack = [
    {
        id: 0,
        icon: mdiLanguageHtml5,
        name: "HTML5",
        description: [
            'Good knowledge about semantic tags',
            'BEM methodology',
        ],
        color: "E44D26",
    },
    {
        id: 1,
        icon: mdiLanguageCss3,
        name: "CSS3",
        description: [
            'Progressive Web Applications',
            'Good background ',
            'Animation with use @keyframes',
            'Flexbox and CSS Grid',
        ],
        color: "2465F1",
    },
    {
        id: 2,
        icon: mdiLanguageJavascript,
        name: "Javascript",
        description: [
            'Closures and Hoisting',
            'Working with Objects and Arrays',
            'Connect with API (Fetch method)',
            'Knowladge how work async and sync',
            'Good knowledge of the syntax',
        ],
        color: "F0D91D",
    },
    {
        id: 3,
        icon: mdiReact,
        name: "React",
        description: [
            'React router',
            'React Hooks',
        ],
        color: "5ED4F4",
    },
    {
        id: 4,
        icon: mdiNpm,
        name: "NPM",
        description: [
            'Basic knowladge how to work with NPM and how to use it',
        ],
        color: "C53635",
    },
    {
        id: 5,
        icon: mdiGit,
        name: "GIT",
        description: [
            'basic comments to work with my repositories and other',
        ],
        color: "E94F32",
    },
    {
        id: 6,
        icon: mdiMaterialUi,
        name: "Material UI",
        description: [
            'Knowladge how to work with documentation and components from Material UI'
        ],
        color: "007DC5",
    },
]

const Technology = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [index, setIndex] = useState(null);

    const handleClick = (id) => {
        setIsClicked(true)
        setIndex(id)
    }

    const showTechnologyDescription = () => {
        return (
            <>
                <h3 className="technology__skill-title">{technologyStack[index].name}</h3>
                <p >{technologyStack[index].description.map(paragraph => {
                    return(
                    <p className="technology__skill-paragraph">{paragraph}</p>)
                })}</p>
            </>
        )
    }

    return (
        <section className="technology">
            <section className="technology__text">
                <h2 className="technology__title">Technology Stack:</h2 >
                <p className="technology__info">(click on a icon)</p>
            </section>
            <section className="technology__skills">
                {technologyStack.map(skill => {
                    const { id, icon, name, color } = skill
                    return (
                        <Icon
                            className="technology__skill"
                            key={id}
                            size={5}
                            path={icon}
                            title={name}
                            color={color}
                            onClick={handleClick.bind(this, id)}
                        />
                    )
                })}
                <section className="technology__description">
                    {isClicked ? showTechnologyDescription() : null}
                </section>
            </section>
        </section>
    );
};

export default Technology;