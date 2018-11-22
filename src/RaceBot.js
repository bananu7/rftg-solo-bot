import React, { Component } from 'react';
import logo from './logo.svg';
import './RaceBot.css';

class RaceBot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            credits: 0,
            economy: 0,
            tableau: []
        }
    }

    render() {
        return (
            <div className="racebot">
                You play against an "adaptable robot" opponent.
                <div className="moneytrack">
                    <div className="element"/>
                    <div className="element"/>
                    <div className="element"/>
                    <div className="element"/>
                    <div className="element"/>
                </div>
                <div className="economytrack">
                    <div className="element"/>
                    <div className="element"/>
                    <div className="element"/>
                    <div className="element"/>
                    <div className="element"/>
                </div>
            </div>
        );
    }
}

export default RaceBot;