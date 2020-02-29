import React, { Component } from "react";

export default class HeaderSelection extends Component {
    state = {
        headerSelection: ""
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    render(){
        return (
            <div>
                {
                    !this.props.selected &&
                    <div>
                        <h4>Choose a Header Style</h4>
                        <select id="headerSelection" onChange={(e) => this.handleFieldChange(e)}>
                            <option>Logo Header</option>
                            <option>Address with Logo</option>
                            <option>Address Only</option>
                        </select>
                        <button onClick={() => this.props.switchSection("header", this.state.headerSelection)}>Build Section</button>
                    </div>
                }
                {
                    this.props.selected &&
                    <div className="build-area">
                        <p>Build your Header Here:</p>
                        <ul className="generated-menu-list">
                            <li onDragOver={(e) => e.preventDefault()}></li>
                            <li onDragOver={(e) => e.preventDefault()}></li>
                            <li onDragOver={(e) => e.preventDefault()}></li>
                            <li onDragOver={(e) => e.preventDefault()}></li>
                        </ul>
                    </div>
                }


            </div>
        );
    }

}