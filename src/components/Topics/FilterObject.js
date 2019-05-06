import React, { Component } from 'react'

export default class FilterObject extends Component {
    constructor(){
        super()

        this.state = {
            employees: [
                {
                    name: "aang",
                    wee: "air",
                    woo: "bender"
                },
                {
                    name: "katara",
                    yee: "water",
                    yoo: "bender"
                },
                {
                    name: "toph",
                    nee: "earth",
                    noo: "bender"
                }
            ],

            userInput: '',
            filteredEmployees: []
        }
    }


    render() {
        return(
            <div className="puzzleBox filterObjectPB">
            <h4> Filter Object </h4>
            <span className="puzzleText"></span>
            <input className="inputLine"></input>
            <button className="confirmationButton"> Filter </button>
            <span className="resultsBox filterObjectRB"></span>
            </div>
        )
    }
}