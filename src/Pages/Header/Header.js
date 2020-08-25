import React, { useState, useEffect } from 'react';
import '../../Utils/Images/ProfilPhoto.jpg';

const titles = ["I am Junior Javascript Developer", "I am Junior React Developer", "I am Junior Front End Developer"]

const Header = () => {
    const [titlesId, setTitlesId] = useState(0)

    const photo = require('../../Utils/Images/Untitled.png')

    useEffect(()=> {
        const idInterval = setInterval(() => {
            setTitlesId(titlesId + 1)
            if(titlesId === titles.length-1){
                setTitlesId(0)
            }
        }, 5000);
        return function cleanup() {
            clearInterval(idInterval)
        }
    })

    return (
        <div className="header">
            <img className="header__image" src={photo} alt=""/>
            <section className="header__name">
                <h2 className="header__person">Przemyslaw Cieslik</h2>
                <h4 className="header__title header__change-words">{titles[titlesId]}</h4>
            </section>
        </div>
    );
};

export default Header;