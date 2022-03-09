import React from 'react';

export default function Navbar() {
    return (
        <header className="header">
            <nav className="header__nav">
                <a className="link"  href="/">
                    <h1 className="text text--title text--white">Where in the world?</h1>
                </a>
                <button className="button button--invisible"><i className="fas fa-moon mr"></i>Dark mode</button>
            </nav>
        </header>
    )
}