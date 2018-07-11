import React from 'react';
import './Header.css';

const Header = props => (
    <div className="header offset-md-2">
        <nav className="navbar navbar-default navbar-fixed-top">
            <ul>
                <span className="nav-item" id='title'><a className="nav-link">Marvel Clicky Game!</a></span>
                <span className="nav-item"><a className="nav-link">{props.prompt}</a></span>
                <div id="scores">
                    <span className="nav-item nav2"><a className="nav-link">Score: {props.score}</a></span>
                    <span className="nav-item nav2"><a className="nav-link">Top Score: {props.topScore}</a></span>
                </div>
            </ul>
        </nav>
    </div>
);

export default Header;

