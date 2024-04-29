import React from 'react';
import "./Header.css"

const Header = () => {
    // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
    const style = {};

    return (
        <header className="header footer">
            <h1 style={style}>Fast React Pizza Co.</h1>
        </header>
    )
}

export default Header;