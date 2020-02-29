import React, { Component } from "react";
import { FormGroup, Label, Input } from "reactstrap";

export default class CheckboxOption extends Component {

    render(){
        return (
            <div>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="checkbox" />{' '}{this.props.options.name}
                    </Label>
                </FormGroup>
            </div>
        );
    }
}