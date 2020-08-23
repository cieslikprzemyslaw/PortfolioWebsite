import React, { useState, useEffect } from 'react';

const titles = ["Javascript", "React", "Front End"]

const Header = () => {
    const [titlesId, setTitlesId] = useState(0)

    useEffect(()=> {
        const idInterval = setInterval(() => {
            setTitlesId(titlesId + 1)
            if(titlesId === titles.length){
                setTitlesId(0)
            }
        }, 2000);
        return function cleanup() {
            clearInterval(idInterval)
        }
    })

    return (
        <div className="header">
            <img className="header__image" src="https://cdn.pixabay.com/photo/2020/04/02/12/21/man-4994922_960_720.jpg" alt=""/>
            <section className="header__name">
                <h2 className="header__person">Przemyslaw Cieslik</h2>
                <h4 className="header__title">I am Junior <span className="header__change-words">{titles[titlesId]}</span> developer</h4>
            </section>
        </div>
    );
};

export default Header;