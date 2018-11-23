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
                <div className="tracks">
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
                <div className="horizontal-line"/>
                <div className="playerchoice">
                    <div className="element"/>
                    <div className="element"/>
                    <div className="element"/>
                    <div className="element"/>
                    <div className="element"/>
                    <div className="element"/>
                    <div className="element"/>
                    <div className="element"/>
                    <div className="element"/>
                </div>
                <div className="horizontal-arrow"/>
                <div className="robotchoice">
                    <div className="element">Explore</div>
                    <div className="element">Explore</div>
                    <div className="element">Develop</div>
                    <div className="element">Develop</div>
                    <div className="element">Settle</div>
                    <div className="element">Settle</div>
                    <div className="element">Trade</div>
                    <div className="element">Consume x2</div>
                    <div className="element">Produce</div>
                </div>
            </div>
        );
    }
}

export default RaceBot;