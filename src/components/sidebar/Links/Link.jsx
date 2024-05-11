import React from 'react';

const Link = () => {
    const links = [
        "Home",
        "Servicos",
        "Portfolio",
        "Contato",
        "Sobre"
    ];

    return (
        <div className='links'>
            {links.map(link => <a href={`#${link}`} key={link}>{link}</a>)}
        </div>
    )
}

export default Link