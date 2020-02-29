import React, { Component } from "react";
import CheckboxOption from "./CheckboxOption";
import SelectionDropdown from "./SelectionDropdown";
import { Button } from "reactstrap";

export default class OptionsMenuSection extends Component {
    render(){
        return (
            <div>
                <div className="menu-header">
                    {this.props.menu.title}
                </div>
                <div className="menu-body">
                    <div className="selection-menu">
                        {
                            this.props.menu.options.filter(mO => mO.type !== "checkbox").map(o => <SelectionDropdown options={o}/>)
                        }
                        <div className="checkbox-container">
                            {
                                this.props.menu.options.filter(mO => mO.type === "checkbox").map(o => <CheckboxOption options={o} />)
                            }
                        </div>
                    </div>
                    <div>
                        <Button size="sm" color="success">Complete</Button>
                    </div>
                </div>
            </div>
        );
    }
}