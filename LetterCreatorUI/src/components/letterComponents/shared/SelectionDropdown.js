import React, { Component } from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import BaseMethods from "../../../modules/BaseMethods";

export default class SelectionDropdown extends Component {
    state = {
        selected: false
    }   

    handleSelection = (e) => {
        BaseMethods.handleFieldChange(this, e);
        this.setState({
            selected: true
        })
    }

    render(){
        return (
            <div className="selection-option">
                <UncontrolledDropdown size="sm">
                    <DropdownToggle color="primary" caret>
                        {
                            !this.state.selected &&
                            this.props.options.name
                        }
                        {
                            this.state.selected &&
                            this.state[this.props.options.data]
                        }
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem disabled>{this.props.options.name}</DropdownItem>
                        <DropdownItem divider></DropdownItem>
                        {
                            this.props.options.options.map(x => <DropdownItem id={this.props.options.data} onClick={(e) => this.handleSelection(e)}>{x}</DropdownItem>)
                        }
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        );
    }
}