import React from 'react';
import { Navbar } from 'react-bootstrap';

import "./style.css";

export default class Header extends React.Component {
    render() {
        return (
                <header>
                    <Navbar className="navbar bg-dark">
                        <Navbar.Header>
                            <Navbar.Brand className="text-white">
                                <a href="http://localhost:3000">GitHub User Analyser</a>
                            </Navbar.Brand>
                        </Navbar.Header>
                    </Navbar>
                </header>
        )
    }
}