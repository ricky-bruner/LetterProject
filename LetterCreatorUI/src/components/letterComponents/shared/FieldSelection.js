import React, { Component } from "react";
import { Divider, FormGroup, Label, InputGroup, InputGroupAddon, Input, Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import SelectionOption from "./SelectionDropdown";
import "./shared.css";

export default class FieldSelection extends Component {
    state = {
        typeSelected: "",
        fontSelected: "",
        styleSelected: "",
        fontSizeSelected: "",
        addContent: false,
        dataProperty: false,
        contentActivated: false
    }
    
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.innerText
        this.setState(stateToChange)
    }

    addContent = () => {
        this.setState({
            addContent: !this.state.addContent
        })
    }

    stageContent = () => {
        this.setState({
            contentActivated: !this.state.contentActivated
        })
    }

    render(){
        const options = [
            { 
                name: "typeSelected",
                type: "Type",
                options: this.props.props.chunkTypes
            },
            {
                name: "fontSelected",
                type: "Font",
                options: this.props.props.textFonts
            },
            {
                name: "fontSizeSelected",
                type: "Font Size",
                options: [8, 10, 12, 14, 16, 18, 20, 22, 24, 26]
            },
            {
                name: "styleSelected",
                type: "Style",
                options: this.props.props.textStyles
            }
        ]
        
        return (
            <div>
                {
                    !this.state.addContent &&
                    <div>
                        <Button size="sm" onClick={() => this.addContent()}>
                            Add Content
                        </Button>
                    </div>
                }
                {
                    this.state.addContent &&
                    <div>
                        {
                            !this.state.contentActivated &&
                            <div onDrop={() => this.stageContent()} onClick={() => this.stageContent()}>
                                Type or Drag Data
                            </div>
                        }
                        {
                            this.state.contentActivated &&
                            <div>
                                <div id="UncontrolledPopover" type="button" className="selection-input">
                                    <InputGroup>
                                        <Input size="sm" placeholder="Type or Drag Data" />
                                        <InputGroupAddon addonType="append">
                                            <Button size="sm" color="secondary">Complete Chunk</Button>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </div>
                                <UncontrolledPopover placement="bottom" target="UncontrolledPopover">
                                    <PopoverHeader>Customize Content</PopoverHeader>
                                    <PopoverBody>
                                        <div className="selection-menu">
                                            <FormGroup check>
                                                <Label check>
                                                <Input type="checkbox" id="checkbox2" />{' '}
                                                DATA
                                                </Label>
                                            </FormGroup>
                                            {
                                                options.map(o => <SelectionOption handleFieldChange={this.handleFieldChange} options={o.options} type={o.type} id={o.name} selectedValue={this.state[o.name]} />)
                                            }
                                        </div>
                                    </PopoverBody>
                                    <PopoverHeader>Customize Line</PopoverHeader>
                                    <PopoverBody>
                                        <div className="selection-menu">
                                            {
                                                this.props.options.map(o => <SelectionOption handleFieldChange={this.handleFieldChange} options={o.options} type={o.type} id={o.name} selectedValue={this.state[o.name]} />)
                                            }
                                        </div>
                                    </PopoverBody>
                                </UncontrolledPopover>
                            </div>
                        }
                    </div>
                }
            </div>
        );
    }
}