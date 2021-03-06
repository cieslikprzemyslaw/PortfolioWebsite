import React from 'react';

import EmailForm from './EmailForm';

import Icon from '@mdi/react';
import { mdiFacebook, mdiGithub, mdiLinkedin } from '@mdi/js';

const constactIcons = [
    {
        id: 0,
        icon: mdiFacebook,
        name: "Facebook",
        myLink: "https://www.facebook.com/profile.php?id=100000375258188",
        color: "1977F3",
    },
    {
        id: 1,
        icon: mdiGithub,
        name: "Github",
        myLink: "https://github.com/cieslikprzemyslaw",
        color: "323131",
    },
    {
        id: 2,
        icon: mdiLinkedin,
        name: "Javascript",
        myLink: "https://www.linkedin.com/in/przemyslaw-cieslik-b90457169/",
        color: "7084D3",
    },
]

const Contacts = () => {

    return (
        <section className="contact">
            <h3 className="contact__title">Want to get in touch?</h3>
            <p className="contact__description">You can contact with me:</p>
            <section className="contact__link">
            {constactIcons.map(contact => {
                    const { id, icon, name, myLink, color } = contact
                    return (
                        <a href={myLink}>
                            <Icon
                            key={id}
                            size={3}
                            path={icon}
                            title={name}
                            color={color}
                        />
                        </a>
                        
                    )
                })}
            </section>
            <EmailForm />
        </section>
    );
};

export default Contacts;