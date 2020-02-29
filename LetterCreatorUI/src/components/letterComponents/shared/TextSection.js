import React, { Component } from "react";
import { Button, Input } from "reactstrap";
import MenuFactory from "../../../modules/MenuFactory";

export default class TextSection extends Component {
    state = {
        activated: false
    }

    activateText = () => {
        this.setState({ 
            activated: !this.state.activated 
        }, () => { this.initiateTextMenu(); });
    }

    onPropertyDrop = () => {
        let menu = MenuFactory.getTextMenu;
        let data = menu.options.filter(o => o.name === "Data Generated");
        data.set = true;
        menu.options = menu.options.filter(o => o.name !== "Data Generated");
        menu.options.push(data);
        this.props.addMenu(menu);
    }

    initiateTextMenu = () => {
        let menu = MenuFactory.getTextMenu;
        let placement = 0;

        if(this.props.menus.length > 0){
            placement = this.props.menus.filter(m => m.title !== "Line Options").length;
        }
        
        menu.placement = placement++;
        this.props.addMenu(menu);
    }
    
    render(){
        return (
            <div>
                {
                    !this.state.activated &&
                    <div>
                        <Button size="sm" color="primary" onClick={() => this.activateText()}>
                            Add Content
                        </Button>
                    </div>
                }
                {
                    this.state.activated &&
                    <div>
                        {
                            !this.state.contentActivated &&
                            <Input className="text-section" placeholder="Type or Drag Data" size="sm" onClick={() => this.initiateTextMenu()} />
                        }
                    </div>
                }
            </div>
        );
    }
}