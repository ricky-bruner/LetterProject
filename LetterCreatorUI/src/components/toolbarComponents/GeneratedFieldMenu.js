import React, { Component } from "react";

export default class GeneratedFieldMenu extends Component {
    state = {}

    render () {
        return (
            <div className="generated-field-menu">
                <h4>Generated Content Options</h4>
                <p>Provider Data</p>
                <ul className="generated-menu-list">
                    <li draggable>Provider Name</li>
                    <li draggable>Provider Address 1</li>
                    <li draggable>Provider Address 2</li>
                    <li draggable>Provider City</li>
                    <li draggable>Provider State</li>
                    <li draggable>Provider Zip</li>
                </ul>
                <p>Member Data</p>
                <p>Claim Data</p>
            </div>
        );
    }
}