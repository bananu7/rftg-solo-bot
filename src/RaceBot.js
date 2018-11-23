import React, { Component } from 'react';
import logo from './logo.svg';
import './RaceBot.css';

class Track extends Component {
    constructor(props) {
        super(props);
        if (new.target === Track) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }

        this.state = {
            value: this.props.value
        };
    }

    render() {
        let elements = [];

        for (let i = 0; i < 5; ++i) {
            let className = 'element';
            if (i === this.state.value)
                className += ' active';

            elements.push(<div className={className}/>);
        }

        return (
            <div
                className={this.wrapperClassName}
                onClick={() => this.setState({value: (this.state.value + 1) % 5 })}
            >
                {elements}
            </div>
        );
    }
}

class MoneyTrack extends Track {
    constructor (props) { 
        super(props);
        this.wrapperClassName = "moneytrack";
    }
}

class EconomyTrack extends Track {
    constructor (props) { 
        super(props);
        this.wrapperClassName = "economytrack";
    }
}

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
                    <MoneyTrack value={1}/>
                    <EconomyTrack value={0}/>
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