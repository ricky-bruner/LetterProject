import React, { Component } from "react";
import { Button, Alert } from "reactstrap";
import MenuFactory from "../../../modules/MenuFactory";
import TextSection from "./TextSection";
import OptionsMenu from "./OptionsMenu";

export default class LetterLine extends Component {
    state = {
        activated: false,
        textSections: [],
        menus: []
    }

    activateLine = () => {
        let menus = this.state.menus;
        menus.push(MenuFactory.getLineMenu);

        this.setState({ 
            activated: !this.state.activated,
            menus: menus
        });
    }

    addMenu = (menu) => {
        let menus = this.state.menus;
        menus.push(menu);

        this.setState({
            menus: menus
        })
    }

    saveTextSection = () => {
        let section = {

        }

        this.setState({
            textSections: this.state.textSections.push(section)
        })
    }
    
    render(){
        return (
            <div>
                {
                    !this.state.activated &&
                    <Button size="sm" onClick={() => this.activateLine()}>
                        Add Letter Line
                    </Button>
                }
                {
                    this.state.activated &&
                    <Alert color="info" className="letter-line">
                        <div className="letter-line-contents">
                            <div className="text-section-container">
                                <TextSection menus={this.state.menus} addMenu={this.addMenu} />
                            </div>
                            <Button size="sm" color="primary" onClick={() => this.saveTextSection()}>Complete Line</Button>
                        </div>
                        <OptionsMenu menus={this.state.menus} />
                    </Alert>
                }
                {/* {
                    this.state.activated &&
                    <div className="letter-line">
                        <div color="info" id="UncontrolledPopover" type="button" className="selection-input">
                            <InputGroup className="letter-line-contents">
                                <div className="text-section-container">
                                    <TextSection addMenu={this.addMenu} />
                                </div>
                                <InputGroupAddon addonType="append">
                                    <Button size="sm" color="primary" onClick={() => this.saveTextSection()}>Complete Line</Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </div>
                        <PopoverMenu target={"UncontrolledPopover"} menus={this.state.menus} />
                    </div>
                } */}
            </div>
        );
    }
}