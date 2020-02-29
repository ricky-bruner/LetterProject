import React, { Component } from 'react';
import './App.css';
// import DragAndDropTest from './DragAndDropTest';
import LetterPage from './components/letterComponents/LetterPage';
import "./components/letterStyles.css";
import GeneratedFieldMenu from './components/toolbarComponents/GeneratedFieldMenu';

export default class App extends Component {
    state = {
        letterSectionOptions: [
            {
                category: "header",
                type: "header-center-logo-address-right",
                images: [],
                textSections: [],
                textSectionOptions: {
                    
                }
            }
        ],
        chunkTypes: [
            "text",
            "date",
            "dollar",
            "number"
        ],
        textStyles: [
            "bold",
            "normal",
            "italics",
            "underlined",
            "bold-italics",
            "bold-underlined",
            "italics-underlined",
            "bold-italics-underlined"
        ],
        textFonts: [
            "cambria",
            "arial",
            "times-new-roman",
            "calibri"
        ]
    };

    render() {
        return (
            <div>
                <h2>Testing</h2>
                {/* <DragAndDropTest /> */}
                <div className="flex-around">
                    <GeneratedFieldMenu />
                    <LetterPage chunkTypes={this.state.chunkTypes} textStyles={this.state.textStyles} textFonts={this.state.textFonts} />
                </div>
            </div>
        );
    }
}

