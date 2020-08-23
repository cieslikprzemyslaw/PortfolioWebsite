import React from 'react';

const Hobby = () => {
    return (
        <section className="hobby">
            <h3 className="hobby__title">What I like doing in my free time?</h3>
            <section className="hobby__card">
                <h4 className="hobby__card-title">Coding</h4>
            <img style={{width: "90%", margin:"20px 0"}} src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg" alt="programming"/>
            <p className="hobby__description">Writing code it isi my passion. Every free time when It is possibly I'm coding.</p>
            </section>
            <section className="hobby__card">
                <h4 className="hobby__card-title">Trips</h4>
            <img style={{width: "90%", margin:"20px 0"}} src="https://cdn.pixabay.com/photo/2016/01/09/18/27/old-1130731_960_720.jpg" alt="trips"/>
            <p className="hobby__description">I like trips. This bigger and smaller.</p>
            </section>
            <section className="hobby__card">
                <h4 className="hobby__card-title">Computer Games</h4>
            <img style={{width: "90%", margin:"20px 0"}} src="https://cdn.pixabay.com/photo/2018/02/28/21/44/technology-3189176_960_720.jpg" alt="computer games"/>
            <p className="hobby__description">Sometimes I need to relaks a little more then I like play for RPG</p>
            </section>
            <section className="hobby__card">
                <h4 className="hobby__card-title">Learning</h4>
            <img style={{width: "90%", margin:"20px 0"}} src="https://cdn.pixabay.com/photo/2015/05/12/09/13/freelancer-763730_960_720.jpg" alt="Learning"/>
            <p className="hobby__description">If you don't know what you can do with you small part of life when you don't have inspiration. Just learn this can take you profits in the future.</p>
            </section>   
        </section>
    );
};

export default Hobby;