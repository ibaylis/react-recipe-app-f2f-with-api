import React, { Component } from 'react';
import Header from "../components/Header";
import { Link } from "react-router-dom";

class Default extends Component {
    render() {
        return (
            <Header title="404" styleClass="default-hero">
                <h2 className="text-light text-uppercase">
                    This page does not exist because of the recipe eating gnomes
                </h2>
                <Link to="/" className="text-uppercase btn btn-secondary btn-lg mt-3">
                    Return to safety
                </Link>
            </Header>
        )
    }
}

export default Default;